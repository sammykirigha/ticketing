import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request";

import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { Password } from "../services/password";

const router = express.Router();

router.post(
    "/api/users/signin",
    [
        body("email").isEmail().withMessage("Email must be valid"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("You must use your password"),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new BadRequestError("Invalid credentials");
        }

        const passwordMatch = await Password.compare(
            existingUser.password,
            password
      );
      
      if (!passwordMatch) {
         throw new BadRequestError('Invalid credentials')
      }
      
      //generate jwt
        const userJwt = jwt.sign({
            id: existingUser.id,
            email: existingUser.email
        }, process.env.SECRET_KEY!)

        //Store it on session object
        req.session = {
            jwt: userJwt
        }

        res.status(201).send(existingUser);
    }
);

export { router as signinRouter };
