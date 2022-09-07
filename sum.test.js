const sum = require("./sum");

test("sum(1,2) should be equal to 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("using matcher is equal ", () => {
  const data = { foo: 1, bar: 2, baz: 3 };
  data["joe"] = "doo";
  expect(data).toEqual({ foo: 1, bar: 2, baz: 3, joe: "doo" });
});

test("null", () => {
  const truth = null;

  expect(truth).not.toBeTruthy();
});
