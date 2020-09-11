import solve from "../tools/solver";
import useForm from "../tools/useForm.hook";
import React, { useState, useCallback } from "react";
import "../styles.css";

const MathNumber = ({ children }) => {
  const replaceNumbers = (input) => {
    if (!input) return " ";
    const matches = input.match(/(\d*\.?\d+e\+\d+)/g);
    if (!matches) return input;
    matches.forEach((match) => {
      const [base, exponent] = match.split("e+");
      const number = `${base}&nbsp;&times;&nbsp;10<sup>${exponent}</sup>`;
      input = input.replace(match, number);
    });
    return input;
  };
  if (!children)
    return <div className="result-display">The solution will appear here</div>; // Fallback if there is no input yet
  return (
    <div
      className="result-display"
      dangerouslySetInnerHTML={{ __html: replaceNumbers(children) }}
    />
  );
};

const Calculator = () => {
  const [solution, setSolution] = useState("");
  const updateSolution = useCallback((input) => {
    setSolution(solve(input));
  }, []);
  const inputField = useForm("", updateSolution);

  return (
    <>
      <MathNumber>{solution}</MathNumber>
      <input
        className="input-field"
        placeholder={"Enter calculation"}
        {...inputField}
      />
    </>
  );
};

export default Calculator;
