import nats, { Message } from "node-nats-streaming";
import { randomBytes } from "crypto";
console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
    url: "http://localhost:4222",
});

stan.on("connect", () => {
    console.log("am listening to you guys");

    stan.on('close', () => {
        console.log('Nats connection is closed');
        process.exit()
        
    })

    const options = stan
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable();
    const subscription = stan.subscribe(
        "ticket:created",
        "orders-service-queue-group"
    );

    subscription.on("message", (msg: Message) => {
        const data = msg.getData();

        if (typeof data === "string") {
            console.log(
                `message sequence is ${msg.getSequence()}, and the data is ${data}`
            );
		}
		msg.ack()
	});
	
});

process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())
