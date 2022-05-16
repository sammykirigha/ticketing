import { Publisher } from "./base-puplisher";
import { TicketCreatedEvent } from "./ticket-created-event"; 
import { Subjects } from "./subjects";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
	subject: Subjects.TicketCreated = Subjects.TicketCreated
}