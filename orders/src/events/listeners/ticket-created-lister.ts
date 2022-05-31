import { Message } from "node-nats-streaming";
import { Subjects, Listener, TicketCreatedEvent } from "@sdktickets/sammy";

import { Ticket } from '../../models/ticket';
import { queueGroupName } from "./queueGroupName";


export class TicketCreatedListener extends Listener<TicketCreatedEvent>{
	subject: Subjects.TicketCreated = Subjects.TicketCreated;

	queueGroupName = queueGroupName;

	onMessage(data: TicketCreatedEvent['data'], msg: Message){}
}