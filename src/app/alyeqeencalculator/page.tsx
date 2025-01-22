"use client";
import React, { JSX, useRef } from "react";
import { useState, useEffect } from "react";
const math = require("mathjs");

function AlyeqeenCalculator() {
  const padKeys: string[] = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "x",
    "0", ".", "%", "÷",
    "√", "𝑥²", "C", "="
];

  const [clickedButtonValue, setClickedButtonValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (buttonValue: string) => {
    setErrorMessage("");

    if (inputRef.current) {
      inputRef.current.focus(); // Automatically focus after render
    }

    try {
      if (buttonValue === "=") {
        if (inputValue === "" || inputValue === "undefined") {
          setInputValue("");
          setErrorMessage("Please enter a valid expression");
        } else if (inputValue.includes("÷") || inputValue.includes("x")) {
          const replacedDiv = inputValue.replaceAll("÷", "/");
          const replacedMul = replacedDiv.replaceAll("x", "*");

          const calculatedValue = math.evaluate(replacedMul);

          setInputValue(calculatedValue);
        } else {
          const calculatedValue = math.evaluate(inputValue);

          setInputValue(calculatedValue);
        }
      } else if (buttonValue === "C") {
        setInputValue("");
      } else {
        setInputValue((prev) => prev + buttonValue);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setInputValue("Error");
        setErrorMessage("Please enter a valid expression");
      }
    }
  };


  const buttonStyling: string = `bg-[#03556B] text-white p-2 shadow-md rounded-md w-[60px] h-[70px] hover:bg-[#1E6C82]`;
  const inputStyling: string =
    "border-[#03556B] text-[#03556B] text-[22px] font-semibold p-2 shadow-md rounded-md w-full h-[60px] outline-none border border-[#03556B] focus:border-2 focus:border-[#03556B]";

  const keyPads: JSX.Element[] = padKeys.map((char: string) => {
    return (
      <button
        className={buttonStyling + `${char === "=" ? "col-span-4" : ""}`}
        key={char}
        title={char === "C" ? "Clear" : char}
        type="button"
        onClick={() => handleClick(char)}
      >
        {char}
      </button>
    );
  });

  return (
    <div className="bg-white text-[#03556B] flex justify-center p-8 ">
      <div className="bg-[#E5EFF2] flex flex-col justify-center border-2 border-[#03556B] rounded-xl shadow-md max-w-md p-8 space-y-4 hover:bg-[#ddeaee]">
        <div className="mt-2">
          <input
            readOnly
            ref={inputRef}
            className={inputStyling}
            type="text"
            value={inputValue}
            name="inputName"
            placeholder="2 + 2 = 100"
           
          ></input>
        </div>
        <div className="text-red-700 ml-2 text-[15px]">
          {errorMessage !== "" ? errorMessage : ""}
        </div>

        <div className={"grid grid-cols-4 p-2 gap-2"}>{keyPads}</div>
      </div>
    </div>
  );
}

export default AlyeqeenCalculator;
