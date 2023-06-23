import CloseBtn from "../../images/close-btn.png";
import "./ModalImage.css";

function ModalImage(props) {
  const { image, closeModal } = props;

  return (
    <div className="image-overlay">
      <div className="image-modal">
        <img className="modal-image" src={image.src.landscape} alt="bot"></img>
      </div>
      <button
        type="button"
        className="modal-close"
        onClick={() => {
          closeModal();
        }}
      >
        <img className="close-icon" src={CloseBtn} alt="bot"></img>
      </button>
    </div>
  );
}

export default ModalImage;
