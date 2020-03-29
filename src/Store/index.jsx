import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  // States
  const [modalState, setModalState] = useState(false);
  const [myName, setMyName] = useState("");
  const [count, setCount] = React.useReducer(countReducer, 0);

  // Aditional handlers for states
  const toggleModal = () => {
    setModalState(!modalState);
  };

  const countReducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        return { count: state.count - 1 };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  };

  // Global Store
  const store = {
    modalState,
    toggleModal,
    myName: [myName, setMyName],
    count: [count, setCount]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
