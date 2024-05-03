import React, { useState } from "react";

export default function TextField(props) {
  const handleUpCase = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text changed to Upper Case','success');
  };
  const handleLowCase = () => {
    // console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text changed to Lower Case','success');
  };

  const handleclrCase = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleared ', 'success');
  };
  const handleCapCase = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert('First character of every word turned to upper case','success');
  };
  const handleSenCase = () => {
    let newText = text.split(".");
    for (let i = 0; i < newText.length; i++) {
      // Trim any leading or trailing whitespace from each sentence
      newText[i] = newText[i].trim();
      if (newText[i]) {
        // Check if the sentence is not empty
        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
      }
    }
    newText = newText.join(".");
    setText(newText);
    props.showAlert('All sentences capitalized', 'success');
  };

  const handleSelCase = () => {
    let sel_txt = document.getElementById("myBox");
    sel_txt.select();
    navigator.clipboard.writeText(sel_txt.value);
    props.showAlert('Copied to clipboard!', "success");
  };

  const handleExtraSpace = () => {
    let newText = text.replace(/(\s+)/g, " ");
    setText(newText);
    props.showAlert('Remove extra spaces', 'success');
  };

  const handleOnChnage = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="container" style={{color: props.mode ==='dark'?'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>
          {" "}
          Convert to uppercase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowCase}>
          {" "}
          Convert to lowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapCase}>
          {" "}
          Capitalized Text{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSenCase}>
          {" "}
          Sentence Case{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSelCase}>
          {" "}
          Select Text{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          {" "}
          Remove Extra Spaces{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclrCase}>
          {" "}
          Clear Text{" "}
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().split(/\s+/).filter(Boolean).length} words, {text.length} Characters,{" "}
          {text.split(".").length - 1} sentences and {text.split("\n").length}{" "}
          Lines.
        </p>
        <p>
          It will take <b>{0.008 * text.trim().split(/\s+/).filter(Boolean).length}</b> minutes to read
          the given text.
        </p>
        <h2>Preview</h2>
        <textarea
          className="form-control"
          value={text}
          readOnly
          style={{
            width: "100%",
            resize: "none",
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
          rows="8"
        ></textarea>
        {/* <textarea name="" id="" width="100%" rows="8" readOnly>{text}</textarea> */}
        {/* <p>{text}</p> */}
      </div>
    </div>
  );
}
