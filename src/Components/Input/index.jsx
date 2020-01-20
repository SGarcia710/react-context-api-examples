import React, { useContext } from "react";
import { StoreContext } from "../../Store";

const Input = ({ type, description }) => {
  // Este es un input reutilizable con estado reutilizable
  const {
    [type]: [data, setData]
  } = useContext(StoreContext);

  return (
    <input
      placeholder={description}
      type="text"
      value={data}
      onChange={e => setData(e.target.value)}
    />
  );
};

export default Input;
