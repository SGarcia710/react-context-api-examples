import React, { useContext } from "react";
import { StoreContext } from "../../Store";

const Dashboard = () => {
  const {
    myName: [data]
  } = useContext(StoreContext);

  return <div>dashboard, {data}</div>;
};

export default Dashboard;
