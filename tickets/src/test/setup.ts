import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import { json } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import jwt from 'jsonwebtoken'
declare global {
	namespace NodeJS {
		interface Global {
			signin(): string
		}
	}
}

let mongo: any;

beforeAll(async () => {
	process.env.JWT_KEY = 'sammy';

	mongo = new MongoMemoryServer();
	const mongoUri = await mongo.getUri();

	await mongoose.connect(mongoUri)
})

beforeEach(async () => {
	const collections = await mongoose.connection.db.collections();
	
	for (let collection of collections) {
		await collection.deleteMany({})
	}
})

afterAll(async() => {
	await mongo.stop();
	await mongoose.connection.close()
})

// global.signin = () => {
// 	//build a jwt payload. {email, id}
// 	const payload = {
// 		id: 'kjhfuyq34r439',
// 		email: 'test@test.com'
// 	}

// 	//create a jwt
// 	const token = jwt.sign(payload, process.env.JWT_KEY!)

// 	//build session object
// 	const sesssion = {jwt: token}

// 	// turn session into json
// 	const sesssioJSON = JSON.stringify(sesssion);


// 	//turn json and encode it as base64
// 	const base64 = Buffer.from(sesssioJSON).toString('base64')

// 	// retun  a string thats the cookie with the encoded data

// 	return [`express:sess=${base64}`]
	
// }