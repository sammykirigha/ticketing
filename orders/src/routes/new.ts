import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@sdktickets/sammy'
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';
import { Order } from '../models/order';

const router = express.Router();

router.post('/api/orders', requireAuth, [
	body('ticketId')
		.not()
		.isEmpty()
		.custom((input: string) => mongoose.Types.ObjectId.isValid(input))
		.withMessage('Ticket id must be provided')
], validateRequest, async (req: Request, res: Response) => {
	const {ticketId} = req.body
	//Find the ticket the user is trying to order in the database
	const ticket = await Ticket.findById(ticketId)
	if (!ticket) {
		throw new NotFoundError()
	}

	//Make sure that this ticket is not already reserved
	//run query to look at all orders. find an order where the ticket
	//is the ticket we just found and the orders status is not cancelled.
	//if we find an order from that means the tickets is reserved
	

	const isReserved = await ticket.isRerseved()
		if (isReserved) {
		throw new BadRequestError('Ticket is already reserved')
	}


	//Calculate an expiration date for this order

	//Build the order and save it to the database

	//publish an event syaing that an order was created
	res.send({})
})

export { router as createOrderRouter }