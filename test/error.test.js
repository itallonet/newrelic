const CustomError = require("../src/error");

describe("CustomError", () => {
  test("should have name CustomError", () => {
    const error = new CustomError("Test error");
    expect(error.name).toBe("CustomError");
  });

  test("should have the correct message", () => {
    const errorMessage = "Test error";
    const error = new CustomError(errorMessage);
    expect(error.message).toBe(errorMessage);
  });

  test("should be throwable", () => {
    expect(() => {
      throw new CustomError("Test error");
    }).toThrow(CustomError);
  });
});
