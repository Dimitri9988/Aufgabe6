const { sum,sub,mult,divi } = require("./Math");

test("sum add two numbers", () => {
    const result = sum(20, 30);
    const expected = 50;
    expect(result).toBe(expected);
});

test("sub two numbers", () => {
    const result = sub(90, 60);
    const expected = 30;
    expect(result).toBe(expected);
})

test("mult two numbers", () => {
    const result = mult(4, 6);
    const expected = 24;
    expect(result).toBe(expected);
})

test("divi two numbers", () => {
    const result = divi(100, 20);
    const expected = 5;
    expect(result).toBe(expected);
})

test ("Test negativ numbers in sum", () => {
    const result = sum(-20, -10);
    const expected = -30;
    expect(result).toBe(expected);
} ) 

