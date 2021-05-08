import mongoose from 'mongoose';

interface OrderAttrs {
  userId: string;
  status: string;
  expiresAt: Date;
  ticket: TicketDoc;
}

interface OrderDoc extends mongoose.Document {
  userId: string;
  status: string;
  expiresAt: Date;
  ticket: TicketDoc;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}
