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

const Nav = () => {
  return (
    <section>
      {" "}
      <div className="top-nav">
        <FaBell /> <FaUser />
      </div>
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
            <Link className="nav__link">
              <FaFileAlt className="nav-icon" />
              Attendance Sheet
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/child"}>
              <FaChild className="nav-icon" />
              Children
            </Link>
          </li>
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
