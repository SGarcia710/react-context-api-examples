import React, { useContext } from "react";
import { StoreContext } from "../../Store";

import "./style.scss";

import Navbar from "../Navbar";
import Modal from "../Modal";

const Layout = ({ children }) => {
  console.log("se renderiza");
  const { modalState } = useContext(StoreContext);

  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      {modalState && <Modal />}
    </>
  );
};

export default Layout;
