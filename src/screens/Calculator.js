import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleNumClick = (num) => {
    if (!operation) {
      setNum1(num1 + num);
    } else {
      setNum2(num2 + num);
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
  };

  const handleCalculateClick = () => {
    if (num1 && num2) {
      switch (operation) {
        case "+":
          setResult(parseFloat(num1) + parseFloat(num2));
          break;
        case "-":
          setResult(parseFloat(num1) - parseFloat(num2));
          break;
        case "*":
          setResult(parseFloat(num1) * parseFloat(num2));
          break;
        case "/":
          setResult(parseFloat(num1) / parseFloat(num2));
          break;
        default:
          setResult("Error");
      }
    }
  };

  const handleClearClick = () => {
    setNum1("");
    setNum2("");
    setOperation("");
    setResult("");
  };

  return (
    <div className="calculator" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 50,
      backgroundColor: "#ADD8E6"
    }}>
      <div className="screen">
        {num1} {operation} {num2} = {result}
      </div>
      <div className="buttons"style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: 100
      }}>
        <button onClick={() => handleNumClick("1")}>1</button>
        <button onClick={() => handleNumClick("2")}>2</button>
        <button onClick={() => handleNumClick("3")}>3</button>
        <button onClick={() => handleNumClick("4")}>4</button>
        <button onClick={() => handleNumClick("5")}>5</button>
        <button onClick={() => handleNumClick("6")}>6</button>
        <button onClick={() => handleNumClick("7")}>7</button>
        <button onClick={() => handleNumClick("8")}>8</button>
        <button onClick={() => handleNumClick("9")}>9</button>
        <button onClick={() => handleNumClick("0")}>0</button>

        <button onClick={() => handleOperationClick("+")}>+</button>
        <button onClick={() => handleOperationClick("-")}>-</button>
        <button onClick={() => handleOperationClick("*")}>*</button>
        <button onClick={() => handleOperationClick("/")}>/</button>

        <button onClick={handleCalculateClick}>=</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
