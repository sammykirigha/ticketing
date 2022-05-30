import { NotAuthorized, NotFoundError, OrderStatus } from '@sdktickets/sammy';
import express, {Request, Response} from 'express';
import { Order } from '../models/order'

const router = express.Router();

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {
	const { orderId } = req.params
	
	const order = await Order.findById(orderId)

	if (!order) {
		throw new NotFoundError();
	}

	if (order.userId !== req.currentUser!.id) {
		throw new NotAuthorized()
	}
	res.send({})
})

export {router as deleteOrderRouter}