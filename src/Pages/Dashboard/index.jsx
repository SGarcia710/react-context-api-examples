import React, { useContext } from "react";
import { StoreContext } from "../../Store";

import Button from "../../Components/Button";

const Dashboard = () => {
  const {
    myName: [data]
  } = useContext(StoreContext);

  return (
    <div>
      dashboard, {data}
      <Button />
    </div>
  );
};

export default Dashboard;
