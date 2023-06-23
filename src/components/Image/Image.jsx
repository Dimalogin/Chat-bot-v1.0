import React from "react";
import "./Image.css";
import ModalImage from "../ModalImage/ModalImage";

function Image(props) {
  const { image } = props;

  const [openModal, setOpenModal] = React.useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

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
      {openModal && <ModalImage image={image} closeModal={closeModal} />}
    </>
  );
}

export default Image;
