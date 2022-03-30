import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

import { BadRequestError } from "../errors/bad-request";
import { RequestValidationError } from "../errors/request-validation-errors";
import { User } from "../models/user";

const router = express.Router();

router.post(
    "/api/users/signup",
    [
        body("email").isEmail().withMessage("Please provide a valid email"),
        body("password")
            .trim()
            .isLength({ min: 4, max: 10 })
            .withMessage("password must be between 4 and 10 characters"),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }
        const { email, password } = req.body;

        const existingUser = await User.findOne({email});

        if (existingUser) {
            throw new BadRequestError('Email already in use!')
        }

        const user = User.build({ email, password });

        await user.save();

        //generate jwt
        const userJwt = jwt.sign({
            id: user.id,
            email: user.email
        }, 'sammy')

        //Store it on session object
        req.session = {
            jwt: userJwt
        }

        res.status(201).send(user);
    }
);

export { router as signupRouter };
