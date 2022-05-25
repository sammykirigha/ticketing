import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
    // if (!process.env.JWT_KEY) {
    //     throw new Error("JWT_KEY must be defined!!!!!");
    // }

    // if (!process.env.MONGO_URI) {
    //     throw new Error("MONGO_URI must be definied");
    // }

    try {
        await mongoose.connect("mongodb://tickets-mongo-srv:27017/tickets");
        await natsWrapper.connect('ticketing', 'sammykirigha', 'http://nats-srv:4222')
        natsWrapper.client.on("close", () => {
            console.log("Nats connection is closed");
            process.exit();
        });

        process.on("SIGINT", () => natsWrapper.client.close());
        process.on("SIGTERM", () => natsWrapper.client.close());
        console.log("Connected to MongoDb");
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log("App listening on port 3000!......");
    });
};

start();
