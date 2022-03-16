import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator'
import { DatabaseConnectionError } from '../errors/database-validation-errors';
import { RequestValidationError } from '../errors/request-validation-errors';

const router = express.Router();

router.post('/api/users/signup', 
    [
        body('email')
        .isEmail()
        .withMessage('Please provide a valid email'),
        body('password')
        .trim()
        .isLength({min: 6, max: 20})
        .withMessage('Password must be between 6 and 20 characters')
    ], 
    (req: Request, res: Response) => {
 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array())
    }
    const {email, password} = req.body

    console.log('creating a user');
    throw new DatabaseConnectionError()

    res.send({})
    
})

export {router as signupRouter}