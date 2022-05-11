import request from "supertest";
import { app } from "../../app";

it('it has a router handler listening to /api/tickets for post request', async () => {

	const response = await request(app).post('/api/tickets').send({})
	expect(response.status).not.toEqual(404)
})


it('it can be accessed if the user is signed in', async () => {

	const response = await request(app).post('/api/tickets').send({})
	expect(response.status).toEqual(401)
})


it('return a status other than 401 if the user is signed in', async () => {

	const response = await request(app).post('/api/tickets').send({})
	expect(response.status).not.toEqual(401)
})


it('it return an error if an invalid title is provided', async () => {

})


it('it return an error if an invalid price is provided', async () => {

})


it('it creates a ticket with valid parameters', async () => {

}) 