import { CustomeError } from "./custome-error";

export class NotAuthorized extends CustomeError {
	statusCode = 401;
 
	constructor() {
		super('Not authorized')

		Object.setPrototypeOf(this, NotAuthorized.prototype)
	}
	serializeErrors(){
		return [{message: 'Not authorized'}]
	}
}