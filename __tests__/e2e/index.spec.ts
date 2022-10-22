import { app, server, groceryList } from "../../src/index";
import request from 'supertest';
import { Grocery } from "../../src/index.d";

describe("groceries", () => {
    test("should return grocery list with status code 200", async () => {
        await request(app).get("/groceries").expect(200, groceryList);
    });

    test("should add apples with status code 201", async () => {
        const grocery: Grocery = { item: "apples", quantity: 3 };
        await request(app).post("/groceries").send(grocery).expect(201);
        const { body } = await request(app).get("/groceries");
        expect(body).toHaveLength(4);
        expect(body).toContainEqual(grocery);
    });

    test("should add bananas with status code 201", async () => {
        const grocery: Grocery = { item: "bananas", quantity: 4 };
        await request(app).post("/groceries").send(grocery).expect(201);
        const { body } = await request(app).get("/groceries");
        expect(body).toHaveLength(5);
        expect(body).toContainEqual(grocery);
    });

    afterAll((done) => {
        server.close();
        done();
    })
})