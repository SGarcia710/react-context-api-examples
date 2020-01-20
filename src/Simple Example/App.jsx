import React from "react";
import HomePage from "./HomePage";
import { AppProvider } from "./AppContext";

const App = () => {
  const user = { name: "Sebastián", loggedIn: true };
  //La manera de proveer el estado de ContextAPI es la misma tanto para React usando clases como React usando Funciones
  return (
    <AppProvider value={user}>
      <HomePage />
    </AppProvider>
  );
};

export default App;
