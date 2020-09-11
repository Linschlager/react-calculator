import solve from "../solver";

describe("the solve function can handle operations seperately", () => {
  test("it can handle basic addition", () => {
    expect(+solve("1+2+3+4")).toEqual(10);
  });
  test("it can handle basic subtraction", () => {
    expect(+solve("10-2-3-4")).toEqual(1);
  });
  test("it can handle basic division", () => {
    expect(+solve("20/5/2")).toEqual(2);
  });
  test("it can handle basic multiplication", () => {
    expect(+solve("2*3*4")).toEqual(24);
  });
  test("it can handle a basic sqrt", () => {
    expect(+solve("sqrt(36)")).toEqual(6);
  });
  test("it can handle a basic power", () => {
    expect(+solve("6^2")).toEqual(36);
  });
});

describe("the solve function can handle two mixed operations", () => {
  test("it can handle addition and subtraction", () => {
    expect(+solve("1+2-3+4")).toEqual(4);
  });
  test("it can handle addition and division", () => {
    expect(+solve("1/2+3+4/2")).toEqual(5.5);
  });
  test("it can handle addition and multiplication", () => {
    expect(+solve("1+2+3*4")).toEqual(15);
  });
  test("it can handle addition and sqrt", () => {
    expect(+solve("2+sqrt(4)")).toEqual(4);
  });
  test("it can handle addition and power", () => {
    expect(+solve("10+2^3")).toEqual(18);
  });
  test("it can handle subtraction and division", () => {
    expect(+solve("10-20/5")).toEqual(6);
  });
  test("it can handle subtraction and multiplication", () => {
    expect(+solve("20-5*2")).toEqual(10);
  });
  test("it can handle subtraction and sqrt", () => {
    expect(+solve("20-sqrt(36)")).toEqual(14);
  });
  test("it can handle subtraction and power", () => {
    expect(+solve("10-2^3")).toEqual(2);
  });
  test("it can handle division and multiplication", () => {
    expect(+solve("100/30*30")).toEqual(100);
  });
  test("it can handle division and sqrt", () => {
    expect(+solve("100/sqrt(100)")).toEqual(10);
  });
  test("it can handle division and power", () => {
    expect(+solve("2^6/16")).toEqual(4);
  });
  test("it can handle multiplication and sqrt", () => {
    expect(+solve("3*sqrt(16)")).toEqual(12);
  });
  test("it can handle multiplication and power", () => {
    expect(+solve("3*2^2")).toEqual(12);
  });
  test("it can handle sqrt and power", () => {
    expect(+solve("sqrt(15^2)")).toEqual(15);
  });
});
