import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest, NotFoundError, requireAuth, NotAuthorized } from '@sdktickets/sammy';
import { Ticket } from '../models/tickets';

const router = express.Router();

router.put('/api/tickets/:id', requireAuth, async (req: Request, res: Response) => {
	
})

export {router as updateTicketRouter}