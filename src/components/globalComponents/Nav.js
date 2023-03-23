import React from "react";
import {
  FaChild,
  FaClipboardList,
  FaFileAlt,
  FaRegChartBar,
  FaUsers,
} from "react-icons/fa";
import "../../Styles/Components/Nav.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="" className="nav-logo" />
        </li>
        <li>
          <Link className="nav__link" to={""}>
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
  );
};

export default Nav;
