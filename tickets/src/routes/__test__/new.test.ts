import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/tickets";

it('it has a router handler listening to /api/tickets for post request', async () => {

	const response = await request(app).post('/api/tickets').send({})
	expect(response.status).not.toEqual(404)
})


it('it can be accessed if the user is signed in', async () => {

	const response = await request(app).post('/api/tickets').set('Cookie', global.signin()).send({})
	expect(response.status).toEqual(401)
})


it('return a status other than 401 if the user is signed in', async () => {

	const response = await request(app).post('/api/tickets').send({})
	expect(response.status).not.toEqual(401)
})


it('it return an error if an invalid title is provided', async () => {
	await  request(app).post('/api/tickets').set('Cookie', global.signin()).send({
		title: '',
		price: 10
	})
	.expect(400)

})


it('it return an error if an invalid price is provided', async () => {
 await  request(app).post('/api/tickets').set('Cookie', global.signin()).send({
		title: '',
		price: -10
	})
		.expect(400)
	
	await  request(app).post('/api/tickets').set('Cookie', global.signin()).send({
		title: 'jhgkjrtbg',
	})
	.expect(400)
})


it('it creates a ticket with valid parameters', async () => {
	let tickets = await Ticket.find({})
	expect(tickets.length).toEqual(0)

	const title =  'asdfvlhfv'
	await request(app).post('/api/tickets').set('Cookie', global.signin()).send({ title, price: 20 }).expect(201)
	tickets = await Ticket.find({});
	expect(tickets.length).toEqual(1)
	expect(tickets[0].price).toEqual(20);
	expect(tickets[0].title).toEqual(title);
}) 