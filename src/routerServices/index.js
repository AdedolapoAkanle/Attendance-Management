import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "../components/globalComponents/Nav";
import { AttendanceSheet } from "../view/AttendanceSheet/main";
import { Child } from "../view/ChildrenAttendance/main";
import { Dashboard } from "../view/Dashboard/main";
import Login from "../view/Login/main";
import Register from "../view/Registration/main";
import Report from "../view/Report/main";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
      </Routes>

      <Nav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/child" element={<Child />} />
        <Route path="/report" element={<Report />} />
        <Route path="/attendance-sheet" element={<AttendanceSheet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
