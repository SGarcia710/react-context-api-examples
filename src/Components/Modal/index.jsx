import React, { useContext } from "react";
import { StoreContext } from "../../Store";
import "./style.scss";

import Input from "../Input";

const Modal = () => {
  console.log("se renderiza");

  const { toggleModal } = useContext(StoreContext);
  return (
    <div
      className="modal-container"
      onClick={e => {
        if (e.target.className === "modal-container") {
          toggleModal();
        }
      }}
    >
      <div className="modal">
        <h1>modal</h1>
        <Input type="myName" description="Who are you?" />
      </div>
    </div>
  );
};

export default Modal;
