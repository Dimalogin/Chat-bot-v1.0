import React from "react";
import "./BotImages.css";
import CloseBtn from "../../images/close-btn.png";

function BotImages(props) {
  const { image } = props;
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <img
        className="bot-image"
        src={image.src.tiny}
        onClick={() => {
          setOpenModal(true);
        }}
        alt="bot"
      ></img>
      {openModal && (
        <div className="image-overlay">
          <div className="image-modal">
            <img className="modal-image" src={image.src.landscape} alt='bot'></img>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img className="close-icon" src={CloseBtn} alt="bot"></img>
          </button>
        </div>
      )}
    </>
  );
}

export default BotImages;
