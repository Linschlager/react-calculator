// singleNum = (?<opX>\d*\.?\d+(e\+\d+)?)

export const additionSubtractionRegex = /(?<op1>\d*\.?\d+(e\+\d+)?)(?<op>[+-])(?<op2>\d*\.?\d+(e\+\d+)?)/;
export const multiplicationDivisionRegex = /(?<op1>\d*\.?\d+(e\+\d+)?)(?<op>[*/])(?<op2>\d*\.?\d+(e\+\d+)?)/;
export const sqrtRegex = /sqrt(?<op1>\d*\.?\d+(e\+\d+)?)/;
export const powRegex = /(?<op1>\d*\.?\d+(e\+\d+)?)(?<op>\^)(?<op2>\d*\.?\d+(e\+\d+)?)/;
export const openningBrackets = ["(", "[", "{", "<"];
export const closingBrackets = [")", "]", "}", ">"];
// One or more closing brackets must be touching one or more openning brackets
// The brackets on both sides must be containing a number at some point
// One side can be just a number
export const touchingBracketsRegex = new RegExp(
  `(\\d+[${closingBrackets
    .map((_) => `\\${_}`)
    .join("")}]+)([${openningBrackets.join(
    ""
  )}]+\\d+)|(\\d+[${closingBrackets
    .map((_) => `\\${_}`)
    .join("")}]+)([0-9])|([0-9])([${openningBrackets.join("")}]+\\d+)`
);
export const touchingSqrtRegex = /(\d+)(sqrt)/;
