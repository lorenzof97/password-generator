import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [input, setInput] = useState(10);
  const [submit, setSubmit] = useState(false);
  const [text, setText] = useState(""); // remember to reset to empty string
  const [lowercase, setLowercase] = useState("");
  const [uppercase, setUppercase] = useState("");
  const [number, setNumber] = useState("");
  const [special, setSpecial] = useState("");
  const [password, setPassword] = useState("");
  const [sliderPress, setSliderPress] = useState(false);
  const [checkPress, setCheckPress] = useState(false);
  const [buttonPress, setButtonPress] = useState(false);
  const [copyPress, setCopyPress] = useState(false);
  const [warning, setWarning] = useState("");
  const tempPassword = [];
 
  // let [params, setParams] = useState(lowercase + uppercase + number + special);
  let params = lowercase + uppercase + number + special;

  useEffect(() => {
    if (submit) {
      for (let i = 0; tempPassword.length < input; i++) {
        tempPassword.push(params[Math.floor(Math.random() * params.length)]);
      }
      setPassword(tempPassword.join(""));
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
      ? setUppercase("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      : setUppercase("");
  }

  function handleLower(event2) {
    event2.target.checked
      ? setLowercase("abcdefghijklmnopqrstuvwxyz")
      : setLowercase("");
  }

  function handleNumber(event3) {
    event3.target.checked ? setNumber("0123456789") : setNumber("");
  }

  function handleSpecial(event4) {
    event4.target.checked
      ? setSpecial("!@#$%&'()*+,^-./:;<=>?[]_`{~}|")
      : setSpecial("");
  }

  function handleChange(e) {
    setInput(e.target.input)
  }
 
  

  return (
    <>
      {/* if doesnt work move down the css to a div below to encapsulate it */}
      <div className="pt-[5.5vh] w-[540px] h-[80px]">
        <h1 className="text-center text-5xl p-10">Password Generator</h1>
        <div className="bg-[#18171F] border-2 border-[#00FFFF] flex flex-row mx-[auto] items-center p-3 rounded-3xl">
          <h2 className="text-[32px]">{password}</h2>
          <h3 className="absolute text-center text-lg pl-[300px] bg-transparent color-[#00FFFF]">{text}</h3>
          <svg
            onClick={handleCopy}
            onMouseDown={() => setCopyPress(true)}
            onMouseUp={() => setCopyPress(false)}
            className={`${copyPress ? "fill-white" : "fill-[#00FFFF]"} ml-[auto] mr-5`}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M39 40H13q-1.2 0-2.1-.9-.9-.9-.9-2.1V5q0-1.2.9-2.1.9-.9 2.1-.9h17.4L42 13.6V37q0 1.2-.9 2.1-.9.9-2.1.9ZM28.9 14.9V5H13v32h26V14.9ZM7 46q-1.2 0-2.1-.9Q4 44.2 4 43V12.05h3V43h24.9v3Zm6-41v9.9V5v32V5Z" />
          </svg>
        </div>
        {/* <p className = "h-5"></p> */}
        <div className = "w-full h-[30px] [bg-[#18171F]"/>
        <div className="bg-[#18171F] p-10 text-lg rounded-3xl border-[#00FFFF] border-2">
          <div className="flex flex-row text-xl pb-4 items-center">
            Character Length<p onChange = {handleChange} className="ml-[auto] mr-0 text-4xl">{input}</p>
          </div>
          {/* consider doing this as label together with p *, also proly using state here */}
     
            <input
              className="w-full my-6"
              type="range"
              id="slider"
              min={8}
              max={20}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

          <ul className="">
            <li onChange={(event) => handleUpper(event)} className="pt-4">
              <input id="uppercase" type="checkbox"></input>
              <label htmlFor="uppercase">Include Uppercase</label>
            </li>
            <li onChange={(event2) => handleLower(event2)} className="pt-4">
              <input id="lowercase" type="checkbox"></input>
              <label htmlFor="lowercase">Include Lowercase</label>
            </li>
            <li onChange={(event3) => handleNumber(event3)} className="pt-4">
              <input id="numbers" type="checkbox"></input>
              <label htmlFor="numbers">Include Numbers</label>
            </li>
            <li onChange={(event4) => handleSpecial(event4)} className="pt-4">
              <input id="symbols" type="checkbox"></input>
              <label htmlFor="symbols">Include Symbols</label>
            </li>
          </ul>
          <div className="flex flex-row w-[460px] h-[80px] bg-[#18171F] items-center text-3xl text-[#817D92] mt-6">
            STRENGTH:
            <label className="text-[#E6E5EA] ml-[auto] mr-0" htmlFor="strengthTest">{console.log(password)}</label>
          </div>
          <button
            onClick={() => setSubmit(true)}
            onMouseDown={() => setButtonPress(true)}
            onMouseUp={() => setButtonPress(false)}
            
            className={`${buttonPress ? "bg-[#24232C] text-[#00FFFF]" : "bg-[#00FFFF] text-[#24232C]"} flex flex-row border-4 w-[460px] h-[80px] items-center justify-center mx-0 mt-10 rounded-3xl border-[#00FFFF]`}
          >
            GENERATE{" "}
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
