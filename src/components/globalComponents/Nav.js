import React from "react";
import {
  FaBell,
  FaChild,
  FaClipboardList,
  FaFileAlt,
  FaInbox,
  FaRegChartBar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "../../Styles/Components/Nav.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import MainTooltip from "./Tooltip";

const Nav = () => {
  return (
    <section>
      {" "}
      {/* <div className="top-nav">
        <Link to={"/dashboard"}>
          <img src={logo} alt="" className="nav-logo" />
        </Link>
        <div className="top-icons">
          <div className="top-icon">
            <FaBell className=" bell" />
          </div>
          <div className="top-icon user-icon">
            <Link to={"/"}>
              <MainTooltip
                tooltipText={"logout"}
                body={<FaUser className="user" />}
              />
            </Link>
          </div>
        </div>
      </div> */}
      <nav>
        <ul>
          <li>
            <Link to={"/dashboard"}>
              <img src={logo} alt="" className="nav-logo" />
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/dashboard"}>
              <FaRegChartBar className="nav-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/register"}>
              <FaUsers className="nav-icon" /> Registration
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/child-log"}>
              <FaFileAlt className="nav-icon" />
              Child Log
            </Link>
          </li>
          {/* <li>
            <Link className="nav__link" to={"/child"}>
              <FaChild className="nav-icon" />
              Children
            </Link>
          </li> */}
          <li>
            <Link className="nav__link" to={"/report"}>
              <FaClipboardList className="nav-icon" />
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
