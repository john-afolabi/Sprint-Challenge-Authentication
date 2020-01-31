const request = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");

beforeEach(async () => {
  await db("users").truncate();
});

describe("Register endpoint", () => {
  describe("POST /register", () => {
    test("Did it return a 201 status", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "admin", password: "1234" })
        .expect(201);
    });

    test("Did it return the new user object", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "admin", password: "1234" });
      expect(JSON.parse(res.text)).toHaveProperty("username", "password", "id");
    });
  });
});
