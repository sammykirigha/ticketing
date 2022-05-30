import  {Publisher, OrderCreatedEvent, Subjects} from '@sdktickets/sammy';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
	subject: Subjects.OrderCreated = Subjects.OrderCreated
}

