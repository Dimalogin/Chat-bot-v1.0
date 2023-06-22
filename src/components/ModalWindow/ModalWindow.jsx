import React from "react";
import "./ModalWindow.css";

function checkValidity(value) {
  if (value === "" || value.trim() === "") {
    alert("The field must not be empty");
    return false;
  } else if (value.length < 5) {
    alert("Your Username is short");
    return false;
  }

  return true;
}

function ModalWindow(props) {
  const { isOpen, sendForm } = props;
  const [inputValue, setInputValue] = React.useState("");

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div className="modal-col">
          <h3 className="modal-title">Enter your Username:</h3>
          <input
            type="text"
            className="modal-input"
            placeholder="Username"
            maxLength="15"
            required
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div className="modal-col">
          <button
            type="submit"
            onClick={(event) => {
              if (checkValidity(inputValue)) {
                sendForm(event)(inputValue);
              } else {
                setInputValue("");
              }
            }}
            className="modal-btn__start"
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
