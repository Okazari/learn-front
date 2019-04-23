import { add } from "./add";

//jest

describe("Add test suite", () => {
  it("should add two numbers", () => {
    expect(add(1, 1)).toBe(2);
    expect(add(2, 2)).toBe(4);
  });
});
