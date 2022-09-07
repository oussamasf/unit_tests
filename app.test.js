const server = require("./index");
const request = require("supertest");

test("testing server instance", async () => {
  const { body, status } = await request(server).get("/api");
  expect(body).toEqual({ a: "Welcome!" });
  expect(status).toEqual(200);
});
