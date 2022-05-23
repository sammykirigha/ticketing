import { Subjects, Publisher, TicketUpdatedEvent } from "@sdktickets/sammy";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
	subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}