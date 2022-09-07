const server = require("./index");
const request = require("supertest");

test("testing server instance", async () => {
  const { body, status } = await request(server).get("/");
  expect(body).toEqual({});
  expect(status).toEqual(200);
});
