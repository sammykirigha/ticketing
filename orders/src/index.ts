import mongoose from "mongoose";
import { app } from "./app";
import { TicketCreatedListener } from "./events/listeners/ticket-created-listener";
import { TicketUpdatedListener } from "./events/listeners/ticket-updated-listener";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
    // if (!process.env.JWT_KEY) {
    //     throw new Error("JWT_KEY must be defined!!!!!");
    // }

    // if (!process.env.MONGO_URI) {
    //     throw new Error("MONGO_URI must be definied");
    // }

    try {
        
        await natsWrapper.connect('ticketing', 'sammykirighaa', 'http://nats-srv:4222')
        natsWrapper.client.on("close", () => {
            console.log("Nats connection is closed");
            process.exit();
        });

        process.on("SIGINT", () => natsWrapper.client.close());
        process.on("SIGTERM", () => natsWrapper.client.close());

        new TicketCreatedListener(natsWrapper.client).listen();
        new TicketUpdatedListener(natsWrapper.client).listen();
        
        await mongoose.connect("mongodb://tickets-mongo-srv:27017/tickets");
        console.log("Connected to MongoDb");
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log("App listening on port 3000!......");
    });
};

start();
