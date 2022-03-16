import {ValidationError} from 'express-validator'
import { CustomeError } from './custome-error';


export class RequestValidationError extends CustomeError {
    statusCode = 400;
    constructor(public errors: ValidationError[]){
        super('Invalid credentials ')

        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors(){
        return this.errors.map((error) => {
            return {
                message: error.msg,
                field: error.param
            }
        })
    }
}