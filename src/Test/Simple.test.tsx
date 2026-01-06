import { describe, it, expect } from "vitest";

describe("Simple Test", () => {
  it("Display the simple test: Test are working.", () => {
    const message = "Test are working.";
    expect(message).toBe("Test are working.");
  });
});

describe("Sum of two numbers", () => {
  it("Should show the sum of 2 numbers", () => {
    const a = 50;
    const b = 115;
    const result = a + b;
    expect(result).toBe(165);
    expect(result).toEqual(a + b);
  });
});
