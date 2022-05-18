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
        await natsWrapper.connect('ticketing', 'sdnjdcfv','http://nats-srv:4222' )
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
