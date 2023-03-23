import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import "../../../Styles/view/child.css";

export const Child = () => {
  const [date, setDate] = useState();
  return (
    <main className="child">
      <section className="container-fluid child__section">
        <div className="container">
          <PageTitle header={"Attendance"} par={"Lorem ipsum"} />
          <Calendar
            onChange={setDate}
            value={date}
            minDetail="month"
            selectRange={true}
          />
          <Form className="child__form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="child__form-label">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                className="child__form-field"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="child__form-label">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                className="child__form-field"
              />
            </Form.Group>

            <div className="child__flex">
              <Form.Group>
                <Form.Label className="child__form-label">Gender</Form.Label>
                <Form.Select aria-label="" className="child__form-field">
                  <option hidden>Select Gender</option>
                  <option value="mr">Male</option>
                  <option value="mrs">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label className="child__form-label">Dob</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Dob"
                  className="child__form-field"
                />
              </Form.Group>
            </div>
          </Form>
        </div>
      </section>
    </main>
  );
};
