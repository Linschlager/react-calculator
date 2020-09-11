const simpleCalculation = (operand1, operation, operand2) => {
  switch (operation) {
    case "+":
      return +operand1 + +operand2;
    case "-":
      return +operand1 - +operand2;
    case "*":
      return +operand1 * +operand2;
    case "/":
      return +operand1 / +operand2;
    case "^":
      return (+operand1) ** +operand2;
    default:
      console.error(operand1, operation, operand2);
      throw new Error("Invalid Operation");
  }
};

export default simpleCalculation;
