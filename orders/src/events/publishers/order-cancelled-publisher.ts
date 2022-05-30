import { Subjects, Publisher, OrderCancelledEvent } from "@sdktickets/sammy";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
subject: Subjects.OrderCancelled =Subjects.OrderCancelled
}