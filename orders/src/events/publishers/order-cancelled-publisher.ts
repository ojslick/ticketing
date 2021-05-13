import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@ojembatickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
