import { FaDeleteLeft } from "react-icons/fa6";
import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [currentNumber, setCurrentNumber] = useState('');

  const appendToExpression = (value) => {
    setCurrentNumber([...currentNumber, value])
    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(expression));
      setExpression("");
    } catch (error) {
      setResult("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
    setCurrentNumber("")
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-3">
      <div>
        <div className="bg-blue-500 text-white font-bold rounded shadow p-2 w-full h-28 text-right flex flex-col">
          <span>{currentNumber}</span>
          <span className="mt-2">{result}</span>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <button
            className="text-white font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={() => appendToExpression("/")}
          >
            <FaDeleteLeft />
          </button>
          <button
            className="text-white font-bold py-2 px-4 rounded shadow bg-red-500"
            onClick={clearExpression}
          >
            C
          </button>
          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={() => appendToExpression("%")}
          >
            %
          </button>
          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={() => appendToExpression("/")}
          >
            /
          </button>
          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("1")}
          >
            1
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("2")}
          >
            2
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("3")}
          >
            3
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={() => appendToExpression("+")}
          >
            +
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("4")}
          >
            4
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("5")}
          >
            5
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("6")}
          >
            6
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={() => appendToExpression("-")}
          >
            -
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("7")}
          >
            7
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("8")}
          >
            8
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("9")}
          >
            9
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={() => appendToExpression("*")}
          >
            x
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression(".")}
          >
            .
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow"
            onClick={() => appendToExpression("0")}
          >
            0
          </button>

          <button
            className="text-[#333] font-bold py-2 px-4 rounded shadow bg-white"
            onClick={() => appendToExpression("00")}
          >
            00
          </button>
          <button
            className="text-white font-bold py-2 px-4 rounded shadow bg-yellow-300"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
