import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error("SECRET_KEY must be defined");
    }

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI must be definied")
    }
    try {
        await mongoose.connect("");
        console.log("Connected to MongoDb");
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log("App listening on port 3000!......");
    });
};

start();
