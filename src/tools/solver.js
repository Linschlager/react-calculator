import { compose } from "./compose";
import {
  touchingSqrtRegex,
  touchingBracketsRegex,
  sqrtRegex,
  powRegex,
  multiplicationDivisionRegex,
  additionSubtractionRegex,
  openningBrackets,
  closingBrackets
} from "./consts";
import simpleCalculation from "./simpleCalculator";

const matchAndSolve = (input, regex, solver) => {
  const firstMatch = input.match(regex);
  if (!firstMatch) return input; // Anchor. Stop recursion once there are no occurrences left
  // Recursively solve all occurrences of the calculation
  return matchAndSolve(solver(input, firstMatch), regex, solver);
};

const resolveTouchingSqrt = (input) => {
  return matchAndSolve(input, touchingSqrtRegex, (input, firstMatch) => {
    const [match, left, right] = firstMatch.filter((e) => e); // Remove the undefined elements from the unmatched capture groups
    return input.replace(match, `${left}*${right}`);
  });
};

const resolveTouchingBrackets = (input) => {
  return matchAndSolve(input, touchingBracketsRegex, (input, firstMatch) => {
    const [match, left, right] = firstMatch.filter((e) => e); // Remove the undefined elements from the unmatched capture groups
    return input.replace(match, `${left}*${right}`);
  });
};

const resolveBrackets = (input) => {
  let type = -1;
  let startIndex = -1;
  for (let i = 0; i < input.length; i++) {
    // Find most inner openning bracket and save its type
    if (openningBrackets.includes(input[i])) {
      type = openningBrackets.indexOf(input[i]);
      startIndex = i;
    }
    // Find first matching bracket
    if (startIndex >= 0 && closingBrackets[type] === input[i]) {
      const slice = input.slice(startIndex, i + 1); // end is exclusive, hence +1
      return resolveBrackets(
        input.replace(slice, solve(slice.slice(1, slice.length - 1)))
      );
      // If there is a bracket of another type found first -> break the loop. No matching brackets were found
    } else if (closingBrackets.includes(input[i])) break;
  }
  // If no more matching brackets are found, continue solving chain
  return input;
};

const replaceSqrt = (input) => {
  return matchAndSolve(input, sqrtRegex, (input, firstMatch) => {
    const [match, number] = firstMatch;
    return input.replace(match, Math.sqrt(number));
  });
};

const simpleOperation = (regex) => (input) => {
  return matchAndSolve(input, regex, (input, firstMatch) => {
    const [match, op1, , op, op2] = firstMatch;
    return input.replace(match, simpleCalculation(op1, op, op2));
  });
};

const solvePower = (input) => {
  return simpleOperation(powRegex)(input);
};

const solveDotOperation = (input) => {
  return simpleOperation(multiplicationDivisionRegex)(input);
};

const solveLineOperations = (input) => {
  return simpleOperation(additionSubtractionRegex)(input);
};

/**
 *
 * @param {String} input Whole calculation in a string.
 * @returns the solution of the input param as a string
 */
const solve = (input) => {
  // Perform operations in order
  return compose(
    resolveTouchingSqrt,
    resolveTouchingBrackets,
    resolveBrackets,
    solvePower,
    replaceSqrt,
    solveDotOperation,
    solveLineOperations
  )(input);
};
export default solve;
