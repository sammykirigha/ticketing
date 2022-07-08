import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface TicketAttr {
	id: string;
	title: string;
	price: number;
}

export interface TicketDoc extends mongoose.Document {
	title: string;
	price: number;
	version: number
	isRerseved(): Promise<boolean>
}

export interface TicketModel extends mongoose.Model<TicketDoc> {
	build(attrs: TicketAttr): TicketDoc
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
		transform(doc, ret) {
			ret.id = ret._id
			delete ret._id
		}
	}
})

ticketSchema.set('versionKey', 'version')
ticketSchema.plugin(updateIfCurrentPlugin)

ticketSchema.statics.build = (attrs: TicketAttr) => {
	return new Ticket({
		_id: attrs.id,
		title: attrs.title,
		price: attrs.price
	})
}


const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)

export { Ticket }

