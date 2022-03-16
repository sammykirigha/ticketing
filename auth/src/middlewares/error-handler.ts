import  {Request, Response, NextFunction} from 'express';
import { DatabaseConnectionError } from '../errors/database-validation-errors';
import { RequestValidationError } from '../errors/request-validation-errors';

export const errorHandler = (
    err:Error, 
    req:Request,
    res:Response,
    next: NextFunction
    ) => {

  if(err instanceof RequestValidationError){
    const formattedError = err.errors.map((error) => {
      return {meaasge: error.msg, field: error.param}
    })
    return res.status(400).send(formattedError)
  }

  if(err instanceof DatabaseConnectionError){
    return res.status(500).send({errors: [
      {message: err.reason}
    ]})
    
  }

  res.status(400).send({
      errors: [{message: 'Something went wrong try again later'}]
  })
  
}