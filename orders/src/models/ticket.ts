import mongoose from 'mongoose';

interface TicketAttr {
	prince: number
}

export interface TicketDoc extends mongoose.Document {
	title: string;
	price: string
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

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)

export {Ticket}

