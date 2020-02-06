const sum = (a, b) => a + b;
describe("Add function", () => {
  test("it should add two numbers", () => {
    expect(sum(4, 7)).toEqual(11);
  });
});
