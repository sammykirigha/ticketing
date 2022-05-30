import { NotAuthorized, NotFoundError, OrderStatus } from '@sdktickets/sammy';
import express, {Request, Response} from 'express';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';
import { Order } from '../models/order'
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {
	const { orderId } = req.params
	
	const order = await Order.findById(orderId).populate('ticket')

	if (!order) {
		throw new NotFoundError();
	}

	if (order.userId !== req.currentUser!.id) {
		throw new NotAuthorized()
	}

	order.status = OrderStatus.Cancelled;
	await order.save()

	new OrderCancelledPublisher(natsWrapper.client).publish({
		id: order.id,
		ticket: {
			id: order.ticket.id,
			price: order.ticket.price
		}
	})

	res.status(204).send(order);
})

export {router as deleteOrderRouter}