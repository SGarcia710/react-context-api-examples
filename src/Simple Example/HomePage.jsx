import React, { useContext } from "react";
import AppContext from "./AppContext";

const HomePage = () => {
  // La manera de consumir el estado de ContextAPI es diferente cuando se trata de Componentes Clase o Componentes Función. Para componentes Función es hace con el Hook useContext
  const user = useContext(AppContext);

  console.log(user); // { name: 'Sebastián', loggedIn: true }

  return <div>{user.name}</div>;
};

export default HomePage;
