import request from 'supertest';
import { app } from '../../app';

// const createticket = () => {
// 	return request(app).post('/api/tickets').set('Cookie', global.signin()).send({
// 		title: 'cjshbjch',
// 		price: 20
// 	})
// }

// it('can fetch a list of tickets', async () => {
	
// 	await createticket();
// 	await createticket();
// 	await createticket();

// 	const response = await request(app).get('./api/tickets').send().expect(200)

// 	expect(response.body.length).toEqual(3);
// })