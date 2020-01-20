import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  // States
  const [modalState, setModalState] = useState(false);
  const [myName, setMyName] = useState("");

  // Aditional handlers for states
  const toggleModal = () => {
    setModalState(!modalState);
  };

  // Global Store
  const store = {
    modalState,
    toggleModal,
    myName: [myName, setMyName]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
