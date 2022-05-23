import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/base-ticket.class";


console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
    url: "http://localhost:4222",
});

stan.on("connect", () => {
    console.log("am listening to you guys");

new TicketCreatedListener(stan).listen()
    

   
});





