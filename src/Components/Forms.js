import React, { useState } from "react";

export default function Forms(props) {
  const [text, setText] = useState("");
  const handleClearButtonClick = () => {
    setText("");
    props.passAlert("Text Cleared!", "success");
  };
  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
    props.passAlert("Converted to UpperCase!", "success");
  };
  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    props.passAlert("Converted to LowerCase!", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value + "");
  };
  const handleCopyButtonClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.passAlert("Text Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.passAlert("Extra Spaces Removed!", "success");
  };
  const handleUserNameButtonClick = () => {
    let fullName = document.getElementById("myBox").textContent;
    let processedName = fullName.toLowerCase();
    let processedName2 = processedName.split(/[ ]+/).join("");
    processedName2 += processedName2.length;
    let userName = document.createElement("span");
    userName.textContent = processedName2;
    document.getElementById("myBox").value += "@" + userName.textContent;
    props.passAlert("Username created", "success");
  };
  return (
    <>
      <div className="container">
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "#042743" : "white",
              color: props.mode === "light" ? "white" : "#0f0f0f",
              transition: "all 0.3s ease-in-out",
            }}
            id="myBox"
            onChange={handleOnChange}
            rows={8}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCopyButtonClick}
        >
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleUserNameButtonClick}
        >
          Create Username
        </button>
        <br />
        <button
          className="btn btn-primary my-2"
          onClick={handleClearButtonClick}
        >
          Clear the Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary:</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element !== 0;
            }).length
          }
          words, {text.length} characters
        </p>
      </div>
    </>
  );
}
