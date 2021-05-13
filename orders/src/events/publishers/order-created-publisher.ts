import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@ojembatickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
