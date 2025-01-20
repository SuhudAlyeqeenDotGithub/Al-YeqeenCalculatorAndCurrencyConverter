"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

function AlyeqeenCalculator() {
  const padKeys: string = "789+456-123x0=C÷";

  const [clickedButtonValue, setClickedButtonValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [valueToCalulate, setValueToCalculate] = useState<string>("");
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (buttonValue: string) => {
      const buttonValueSpaced = buttonValue + " "
      if (inputRef.current) {
      inputRef.current.focus(); // Automatically focus after render
    }

    if (buttonValue === "=") {
        if(inputValue.includes("÷") || inputValue.includes("x")) {
            const replacedDiv = inputValue.replace("÷", "/");
            const replacedMul = replacedDiv.replace("x", "*");
            setValueToCalculate(replacedMul);
            console.log("replacedMul", replacedMul);
        }
    } else if (buttonValue === "C") {
      setInputValue("");
    } else {
      setInputValue((prev) => prev + buttonValueSpaced);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  console.log("input value", inputValue);
  const buttonStyling: string = "bg-[#03556B] text-white p-2 shadow-md rounded-md w-[60px] h-[70px] hover:bg-[#1E6C82]";
  const inputStyling: string =
    "border-[#03556B] text-[#03556B] text-[22px] font-semibold p-2 shadow-md rounded-md w-full h-[60px] outline-none border border-[#03556B] focus:border-2 focus:border-[#03556B]";
  const keyPads: JSX.Element[] = padKeys.split("").map((char: string) => {
    return (
      <button className={buttonStyling} key={char} title={char} type="button" onClick={() => handleClick(char)}>
        {char}
      </button>
    );
  });

  return (
    <div className="bg-white text-[#03556B] flex justify-center p-8 ">
      <div className="bg-[#E5EFF2] flex flex-col justify-center border-2 border-[#03556B] rounded-xl shadow-md max-w-md p-8 space-y-4">
        <div className="mt-2">
          <input
            ref={inputRef}
            className={inputStyling}
            type="text"
            value={inputValue}
            name="inputName"
            placeholder="2 + 2 = 100"
            onChange={handleInput}
          ></input>
        </div>

        <div className={"grid grid-cols-4 p-2 gap-2"}>{keyPads}</div>
      </div>
    </div>
  );
}

export default AlyeqeenCalculator;
