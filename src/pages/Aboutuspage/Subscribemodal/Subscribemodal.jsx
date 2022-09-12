import React, {useState} from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Subscribemodal = ({children, openButtonText}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button onClick={openModal}>{openButtonText}</button>
      <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close</button>
        <div>{children}</div>
      </ReactModal>
    </>
  );
};

export default Subscribemodal;