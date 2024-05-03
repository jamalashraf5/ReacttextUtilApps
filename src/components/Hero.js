import React from "react";

export default function Hero(props) {
  return (
    <div>
      <div className="container d-flex my-3">
        <div
          className="card -deck mb-3 text-center mx-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
        >
          <div className="card-header fs-3">Upper Case</div>
          <div className="card-body">
            <p className="card-text">
              It will change all the characters into upper case.
            </p>
          </div>
        </div>
        <div
          className="card -deck mb-3 text-center mx-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
        >
          <div className="card-header fs-3">Lower Case</div>
          <div className="card-body">
            <p className="card-text">
              It will change all the characters into Lower case.
            </p>
          </div>
        </div>
        <div
          className="card -deck mb-3 text-center mx-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
        >
          <div className="card-header fs-3">Capitalized Case</div>
          <div className="card-body">
            <p className="card-text">
              It will change all the first characters of every words into Upper
              Case.
            </p>
          </div>
        </div>
        <div
          className="card -deck mb-3 text-center mx-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
        >
          <div className="card-header fs-3">Sentence Case</div>
          <div className="card-body">
            <p className="card-text">
              It will change all the first characters of every Sentences into
              Upper Case.
            </p>
          </div>
        </div>
        <div
          className="card -deck mb-3 text-center mx-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
        >
          <div className="card-header fs-3">Clear Text</div>
          <div className="card-body">
            <p className="card-text">It will Clear all the entered text.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
