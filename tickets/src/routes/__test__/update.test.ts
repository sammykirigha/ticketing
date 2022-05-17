import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("return s a 404 is the provided doest not exist", async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .set("Cookie", global.signin())
        .send({
            title: "hrbvkh",
            price: 20,
        })
        .expect(404);
});

it("return s a 401 if the user is not authenticated", async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: "hrbvkh",
            price: 20,
        })
        .expect(401);
});

it("returns a 401 if the user does not own the ticket", async () => {
    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", global.signin())
        .send({
            title: "ughbsdchkvj",
            price: 20,
        });

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", global.signin())
        .send({
            title: "khlsgkjefoerkjnlkjfm",
            price: 1000,
        });
});

it("returns a 400 if the user provides an invalid title or price", async () => {
    const cookie = global.signin();

    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
            title: "ughbsdchkvj",
            price: 20,
        });

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "",
            price: 30,
		});
	
	  await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "kjrebjrtlbvkm",
            price: -30,
        });
});

// it("updates the ticket provided the valid inputs", async () => {
// 	  const cookie = global.signin();

//     const response = await request(app)
//         .post("/api/tickets")
//         .set("Cookie", cookie)
//         .send({
//             title: "ughbsdchkvj",
//             price: 20,
// 		});
	
// 	await request(app).put(`/api/tickets/${response.body.id}`).set('Cookie', cookie).send({
// 		title: 'new title',
// 		price: 100
// 	}).expect(200)

// 	const ticketResponse = await request(app).get(`/api/tickets/${response.body.id}`).send()

// 	expect(ticketResponse.body.title).toEqual('new title')
// 	expect(ticketResponse.body.price).toEqual(100)
// });
