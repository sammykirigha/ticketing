import { CustomeError } from "./custome-error";

export class DatabaseConnectionError extends CustomeError {
    statusCode = 500;
    reason= 'Error while connection to the database'
    constructor(){
        super('Error connecting to db')
 
        //only because we extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors(){
        return [
            {message: this.reason}
        ]
    }
}