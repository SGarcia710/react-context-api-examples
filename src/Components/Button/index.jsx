import React, { useContext } from "react";
import { StoreContext } from "../../Store";

const Button = () => {
  const {
    count: [data, setData]
  } = useContext(StoreContext);

  return <button onChange={e => setData("increment")}>{data}</button>;
};

export default Button;
