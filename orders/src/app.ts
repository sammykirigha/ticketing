import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {deleteOrderRouter} from'./routes/delete'
import { createOrderRouter } from './routes/new'
import { showOrderRouter } from './routes/show'
import {indexOrderRouter} from'./routes/index'
import { errorHandler, NotFoundError, currentUser } from "@sdktickets/sammy";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test',
    })
);
app.use(currentUser);

app.use(createOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter)
app.use(deleteOrderRouter)

app.all("*", async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
