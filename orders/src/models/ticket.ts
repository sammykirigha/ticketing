import { OrderStatus } from '@sdktickets/sammy';
import mongoose from 'mongoose';
import { Order } from './order';

interface TicketAttr {
	title: string;
	price: number;
}

export interface TicketDoc extends mongoose.Document {
	title: string;
	price: number;
	isRerseved(): Promise<boolean>
}

export interface TicketModel extends mongoose.Model<TicketDoc>{
	build(attrs:TicketAttr):TicketDoc
}

const ticketSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	}
}, {
	toJSON: {
		transform(doc, ret){
			ret.id = ret._id
			delete ret._id
		}
	}
})

ticketSchema.statics.build = (attrs: TicketAttr) => {
	return new Ticket(attrs)
}

ticketSchema.methods.isReserved = async function() {
	const existingOrder = await Order.findOne({
		ticket: this,
		status: {
			$in: [
				OrderStatus.Created,
				OrderStatus.AwaitingPayment,
				OrderStatus.Complete
			]
		}
	})
	return !!existingOrder;
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)

export {Ticket}

