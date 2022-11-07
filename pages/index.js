import React, { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState(10);
  const [submit, setSubmit] = useState(false);
  const [text, setText] = useState(""); // remember to reset to empty string
  const [lowercase, setLowercase] = useState("");
  const [uppercase, setUppercase] = useState("");
  const [number, setNumber] = useState("");
  const [special, setSpecial] = useState("");
  const [isLowercase, setIsLowercase] = useState(0);
  const [isUppercase, setIsUppercase] = useState(0);
  const [isNumber, setIsNumber] = useState(0);
  const [isSpecial, setIsSpecial] = useState(0);
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);
  const [buttonPress, setButtonPress] = useState(false);
  const [copyPress, setCopyPress] = useState(false);
  const [empty, setEmpty] = useState(true);
  const tempPassword = [];
  let params = lowercase + uppercase + number + special;
  const strength = isLowercase + isUppercase + isNumber + isSpecial;

  {
    /* 
    const [warning, setWarning] = useState("");
    const [sliderPress, setSliderPress] = useState(false);
    const [checkPress, setCheckPress] = useState(false);
  */
  }

  useEffect(() => {
    if (submit) {
      if (!params == "") {
        for (let i = 0; tempPassword.length < input; i++) {
          tempPassword.push(params[Math.floor(Math.random() * params.length)]);
        }
        setPassword(tempPassword.join(""));
        setText("");
      } else if (params.length == 0) {
        setText("No parameters");
      }
      setSubmit(false);
    }
  }, [submit]);

  function handleCopy() {
    if (password != "") {
      const element = document.createElement("textarea");
      element.value = password;
      document.body.appendChild(element);
      element.select();
      document.execCommand("copy");
      document.body.removeChild(element);
      setText("Copied!");
    }
  }

  function handleUpper(event) {
    event.target.checked
      ? (setUppercase("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), setIsUppercase(1))
      : (setUppercase(""), setIsUppercase(0));
  }

  function handleLower(event2) {
    event2.target.checked
      ? (setLowercase("abcdefghijklmnopqrstuvwxyz"), setIsLowercase(1))
      : (setLowercase(""), setIsLowercase(0));
  }

  function handleNumber(event3) {
    event3.target.checked
      ? (setNumber("0123456789"), setIsNumber(1))
      : (setNumber(""), setIsNumber(0));
  }

  function handleSpecial(event4) {
    event4.target.checked
      ? (setSpecial("!@#$%&'()*+,^-./:;<=>?[]_`{~}|"), setIsSpecial(1))
      : (setSpecial(""), setIsSpecial(0));
  }

  function handleChange(e) {
    setInput(e.target.input);
  }

  return (
    <>
      <div className="pt-[5.5vh] w-[540px] h-[80px]">
        <h1 className="text-center text-5xl p-10">Password Generator</h1>
        <div className="bg-[#18171F] flex flex-row items-center p-3">
          <h2 className="text-[32px]">{password}</h2>
          <h3 className="ml-auto mr-0 text-lg bg-transparent color-[#00FFFF] animate-fade">
            {text}
          </h3>
          <svg
            onClick={handleCopy}
            onMouseDown={() => setCopyPress(true)}
            onMouseUp={() => setCopyPress(false)}
            className={`${
              copyPress ? "#fef08a" : "fill-white"
            } ml-[auto] mr-5 cursor-pointer `}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M39 40H13q-1.2 0-2.1-.9-.9-.9-.9-2.1V5q0-1.2.9-2.1.9-.9 2.1-.9h17.4L42 13.6V37q0 1.2-.9 2.1-.9.9-2.1.9ZM28.9 14.9V5H13v32h26V14.9ZM7 46q-1.2 0-2.1-.9Q4 44.2 4 43V12.05h3V43h24.9v3Zm6-41v9.9V5v32V5Z" />
          </svg>
        </div>
        <div className="w-full h-[30px] " />

        {/* below controls "main" box of the generator */}

        <div className="  p-10 text-lg rounded-3xl">
          <div className="flex flex-row text-xl pb-4 items-center">
            Character Length
            <p onChange={handleChange} className="ml-[auto] mr-0 text-4xl">
              {input}
            </p>
          </div>
          <input
            className="w-full my-6"
            type="range"
            id="slider"
            min={8}
            max={20}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ul className="flex flex-col ">
            <li onChange={(event) => handleUpper(event)} className="pt-4">
              <input
                id="uppercase"
                type="checkbox"
                className="bg-zinc-700 border-white rounded-full h-7 w-7 text-transparent"
              ></input>
              <label htmlFor="uppercase">Include Uppercase</label>
            </li>
            <li onChange={(event2) => handleLower(event2)} className="pt-4">
              <input
                id="lowercase"
                type="checkbox"
                className="bg-zinc-700 border-white rounded-full h-7 w-7 text-transparent"
              ></input>
              <label htmlFor="lowercase">Include Lowercase</label>
            </li>
            <li onChange={(event3) => handleNumber(event3)} className="pt-4">
              <input
                id="numbers"
                type="checkbox"
                className="bg-zinc-700 border-white rounded-full h-7 w-7 text-transparent"
              ></input>
              <label htmlFor="numbers">Include Numbers</label>
            </li>
            <li onChange={(event4) => handleSpecial(event4)} className="pt-4">
              <input
                id="symbols"
                type="checkbox"
                className="bg-zinc-700 border-white rounded-full h-7 w-7 text-transparent"
              ></input>
              <label htmlFor="symbols">Include Symbols</label>
            </li>
          </ul>
          <div className="flex flex-row w-[460px] h-[80px] bg-zinc-700 items-center text-3xl mt-6">
            STRENGTH:
            <label
              className={`${
                strength == 0
                  ? "bg-zinc-700 ml-6 mb-0 mt-auto"
                  : strength == 1
                  ? "bg-red-500 w-[13.75%] rounded-r-none"
                  : strength == 2
                  ? "bg-yellow-200 w-[27.5%] rounded-r-none"
                  : strength == 3
                  ? "bg-lime-200 w-[41.25%] rounded-r-none"
                  : "bg-green-400 w-[55%] rounded-r-full"
              } text-[#E6E5EA] ml-12 my-[5%] h-3/4 rounded-l-full transition-all`}
              htmlFor="strengthTest"
            >
              <p className={`${strength == 0 ? "" : "hidden"} w-[250px]`}>
                Password not set
              </p>
            </label>
          </div>
          <button
            onClick={() => setSubmit(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setButtonPress(true)}
            onMouseUp={() => setButtonPress(false)}
            className={`${
              buttonPress
                ? "bg-[#24232C] text-[#00FFFF]"
                : "bg-zinc-700 text-[#24232C]"
            } flex flex-row border-4 border-transparent hover:shadow-2xl w-[460px] h-[80px] hover:bg-yellow-200 hover:text-zinc-700 items-center justify-center mx-0 mt-10 rounded-3xl text-4xl text-[#fef08a] transition-all`}
          >
            GENERATE{" "}
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path className = "transition-all" fill={`${hover ? "#3f3f46" : "#fef08a"}`} d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />             
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
