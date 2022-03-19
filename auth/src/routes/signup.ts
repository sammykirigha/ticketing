import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
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
            // console.log("Email already in use");
            // res.send({});
            throw new BadRequestError('Email already in use!')
        }

        const user = User.build({ email, password });

        await user.save();

        res.status(201).send(user);
    }
);

export { router as signupRouter };
