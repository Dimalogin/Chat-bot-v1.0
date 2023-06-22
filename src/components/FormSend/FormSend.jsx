import React from "react";
import "./FormSend.css";
import Loader from "../Loader/Loader.jsx";
import getDateFromApi from "../../utils/getDateFromApi.js";

function checkValidity(object) {
  if (object.status === 400 || object.photos.length < 5) {
    return false;
  }

  return true;
}

function createUserObject(name, value) {
  return {
    who: "user",
    data: {
      nickname: name,
      message: value,
    },
  };
}

function createBotObject(isEmpty, data) {
  if (isEmpty) {
    return {
      who: "bot",
      isEmpty: false,
      data: {
        nickname: "Bot",
        message: data.photos,
      },
    };
  } else {
    return {
      who: "bot",
      isEmpty: true,
      data: {
        nickname: "Bot",
        message:
          "Фотографий по данному запросу у меня нет(Или запрос введен некорректно), попробуйте еще раз.",
      },
    };
  }
}

function FormSend(props) {
  const { isOpen, updateUserMessage, updateBotMessage, userName } = props;
  const [valueInput, setValueInput] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const getDate = () => {
    const object = createUserObject(userName, valueInput);
    updateUserMessage(object);

    setLoading(true);
    const date = getDateFromApi(valueInput);

    setTimeout(() => {
      date.then((response) => {
        const isValid = checkValidity(response);
        if (isValid) {
          const object = createBotObject(true, response);
          updateBotMessage(object);
        } else {
          const object = createBotObject(false);
          updateBotMessage(object);
        }
      });

      setLoading(false);
    }, 1500);

    setValueInput("");
  };

  const checkEmptyInput = () => {
    if (valueInput.length > 0) {
      getDate();
    } else {
      alert("Вы ничего не ввели.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <input
        type="text"
        className="messages-text"
        value={valueInput}
        onChange={(event) => {
          setValueInput(event.target.value);
        }}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="messages-btn__send"
        onClick={(event) => {
          event.preventDefault();
          checkEmptyInput();
        }}
      >
        {isLoading ? <Loader /> : "Send"}
      </button>
    </>
  );
}

export default FormSend;
