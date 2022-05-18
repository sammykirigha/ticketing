import { Subjects, Publisher, TicketCreatedEvent } from "@sdktickets/sammy";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
	subject: Subjects.TicketCreated = Subjects.TicketCreated
}