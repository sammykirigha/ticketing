import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@sdktickets/sammy';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';
import { Order } from '../models/order';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();
const EXPIRE_WINDOW_SECONDS = 15 * 60 * 1000

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
	

	const existingOrder = await Order.findOne({
		ticket: ticket,
		status: {
			$in: [
				OrderStatus.Created,
				OrderStatus.AwaitingPayment,
				OrderStatus.Complete
			]
		}
	})
	// const isReserved = await ticket.isRerseved()
		if (existingOrder) {
		throw new BadRequestError('Ticket is already reserved...')
	}


	//Calculate an expiration date for this order
	const expirationDate = new Date();
	const numSeconds = expirationDate.getTime() + EXPIRE_WINDOW_SECONDS;
	const expiringTime = new Date(numSeconds);

	//Build the order and save it to the database'
	const order = Order.build({
		userId: req.currentUser!.id,
		status: OrderStatus.Created,
		expiresAt: expiringTime,
		ticket
	})
	await order.save();
	//publish an event syaing that an order was created;
	new OrderCreatedPublisher(natsWrapper.client).publish({
		id: order.id,
		status: order.status,
		expiresAt: order.expiresAt.toISOString(),
		userId: order.userId,
		ticket: {
			id: ticket.id,
			price: ticket.price
		}
	})
	res.status(201).send(order)
})

export { router as createOrderRouter }