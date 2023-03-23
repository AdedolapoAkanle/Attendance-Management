import React from "react";
import { Button, Table } from "react-bootstrap";
import { FaPen, FaPlus, FaTimes } from "react-icons/fa";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import "../../../Styles/view/register.css";

const Register = () => {
  return (
    <main className="register">
      <section className="container-fluid register__section">
        <div className="container">
          {/* <Form>
            <Form.Select aria-label="Default select example">
              <option hidden>Select type</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                className=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                className=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone number"
                className=""
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="">
              Submit
            </Button>
          </Form> */}
          <PageTitle
            header={"Registration"}
            par={"Register parents and children"}
          />
          <div style={{}}>
            <div className="register__btns">
              <Button variant="primary" type="submit" className="register__btn">
                Parent
              </Button>
              <Button variant="primary" type="submit" className="register__btn">
                Child
              </Button>
            </div>
          </div>

          <Button className="register__add">
            <FaPlus className="add" />
          </Button>

          <div
            style={{
              width: "80%",
              margin: "auto",
              marginLeft: "15rem",
              backgroundColor: "#ffff",
              borderRadius: "5px",
              padding: "1.5rem",
            }}
          >
            <Table
              striped
              style={{
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jide</td>
                  <td>Alabi</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <div className="table-icons">
                      {" "}
                      <FaPen className="tab-icon pen" />{" "}
                      <FaTimes className="tab-icon" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Chukwu</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <div className="table-icons">
                      {" "}
                      <FaPen className="tab-icon pen" />{" "}
                      <FaTimes className="tab-icon" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Adetoun</td>
                  <td>Talabi</td>
                  <td>Female</td>
                  <td>
                    {" "}
                    <div className="table-icons">
                      {" "}
                      <FaPen className="tab-icon pen" />{" "}
                      <FaTimes className="tab-icon" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
