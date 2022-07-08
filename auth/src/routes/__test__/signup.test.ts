import request from "supertest";
import { app } from "../../app";

it('return a 201 on successful signup', async () => {
    return await request(app)
        .post("/api/users/signup")
		.send({
			email: "test@gmail.com",
			password: "password"
		}).expect(201)
});

// it('return 400 with invalid email', async () => {
// 	return request(app)
//         .post("/api/users/signup")
// 		.send({
// 			email: "irejkjjnofkw;oidae",
// 			password: "password"
// 		}).expect(400)
// })

// it('return 400 with invalid password', async () => {
// 	return request(app)
//         .post("/api/users/signup")
// 		.send({
// 			email: "irejkjjnofkw;oidae",
// 			password: "p"
// 		}).expect(400)
// })

// it('return 400 with missing email and password', async () => {
// 	return request(app)
//         .post("/api/users/signup")
// 		.send({}).expect(400)
// })


// it('disallows duplicate emails', async () => {
// 	await request(app).post('/api/users/signup').send({
// 		email: "test@gmail.com",
// 		password: "password"
// 	}).expect(201)

// 	await request(app).post('/api/users/signup').send({
// 		email: "test@gmail.com",
// 		password: "password"
// 	}).expect(400)
// })

// it('It should return a cookie on successful signup', async () => {
// 	const response = await request(app).post('/api/users/signup').send({
// 		email: "test@gmail.com",
// 		password: "password"
// 	}).expect(201)

// 	expect(response.get('Set-Cookie')).toBeDefined();

// })