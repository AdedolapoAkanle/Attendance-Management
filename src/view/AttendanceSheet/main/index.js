import React from "react";
import { Form } from "react-bootstrap";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import { ScrollableTable } from "../operations/ScrollableTable";

export const AttendanceSheet = () => {
  return (
    <main className="attendance">
      <section className="attendance__section container-fluid">
        <div className="container">
          <PageTitle header="Children Log" />
          <div className="attendance__container" style={{ marginTop: "5rem" }}>
            <Form
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "87%",
                marginLeft: "14rem",
                marginBottom: "3rem",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Search name"
                  className=""
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  className=""
                />
              </Form.Group>
            </Form>
            <ScrollableTable />
          </div>
        </div>
      </section>
    </main>
  );
};
