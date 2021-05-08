import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@ojembatickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
