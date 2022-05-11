import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest, NotFoundError, requireAuth, NotAuthorized } from '@sdktickets/sammy';
import { Ticket } from '../models/tickets';

const router = express.Router();

router.put('/api/tickets/:id', requireAuth, async (req: Request, res: Response) => {
	const ticket = await Ticket.findById(req.params.id)

	if (!ticket) {
		throw new NotFoundError()
	}

	if (ticket.userId !== req.currentUser!.id) {
		throw new NotAuthorized()
	}

	res.send(ticket)
})

export {router as updateTicketRouter}