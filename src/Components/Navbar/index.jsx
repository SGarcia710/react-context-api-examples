import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { StoreContext } from "../../Store";

import "./style.scss";

const Navbar = props => {
  // const store = useContext(StoreContext);
  const { toggleModal } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link
        to="/dashboard"
        className={`item ${props.match.path === "/dashboard" ? "active" : ""}`}
      >
        Dashboard
      </Link>

      <Link
        to="/reports"
        className={`item ${props.match.path === "/reports" ? "active" : ""}`}
      >
        Reports
      </Link>

      <a
        className={`item ${props.match.path === "/modal" ? "active" : ""}`}
        // onClick={store.isModalOpen[1]}
        onClick={toggleModal}
      >
        Modal
      </a>
    </div>
  );
};

export default withRouter(Navbar);
