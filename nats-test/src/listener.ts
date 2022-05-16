import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/base-ticket.class";


console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
    url: "http://localhost:4222",
});

stan.on("connect", () => {
    console.log("am listening to you guys");

    stan.on("close", () => {
        console.log("Nats connection is closed");
        process.exit();
    });
new TicketCreatedListener(stan).listen()
    

   
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());



