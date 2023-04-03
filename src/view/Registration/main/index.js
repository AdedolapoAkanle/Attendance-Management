import React from "react";
import { Button, Table } from "react-bootstrap";
import { FaPen, FaPlus, FaTimes } from "react-icons/fa";
import FormModal from "../../../components/globalComponents/Modal";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import TablePagination from "../../../components/globalComponents/Pagination";
import MainTooltip from "../../../components/globalComponents/Tooltip";
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
            par={"Register parent and children"}
          />
          <div style={{}}>
            <div className="register__btns">
              <Button variant="primary" type="submit" className="register__btn">
                <FormModal
                  add={false}
                  header={"Register Parent"}
                  text="Parent"
                />
              </Button>
              <Button variant="primary" type="submit" className="register__btn">
                <FormModal add={false} header={"Register Child"} text="Child" />
              </Button>
            </div>
          </div>

          {/* <Button className="register__add">
            <FormModal header={"Register Child"} text={<FaPlus />} />
          </Button> */}

          <div
            style={{
              width: "90%",
              margin: "auto",
              marginLeft: "12rem",
              // backgroundColor: "#ffff",
              borderRadius: "5px",
              // padding: "1.5rem",
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
                  <th>Surname</th>
                  <th>Parent's Name</th>
                  <th>Child's Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{}}>
                  <td>1</td>
                  <td>Alabi</td>
                  <td>Ronke</td>
                  <td>Jide</td>
                  <td>8</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <div className="table-icons">
                      <MainTooltip
                        tooltipText={"Edit"}
                        body={<FaPen className="tab-icon pen" />}
                      />

                      <MainTooltip
                        tooltipText={"Delete"}
                        body={<FaTimes className="tab-icon" />}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Chukwu</td>
                  <td>Abigail</td>
                  <td>Joshua</td>
                  <td>10</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <div className="table-icons">
                      <MainTooltip
                        tooltipText={"Edit"}
                        body={<FaPen className="tab-icon pen" />}
                      />

                      <MainTooltip
                        tooltipText={"Delete"}
                        body={<FaTimes className="tab-icon" />}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Talabi</td>
                  <td>Esther</td>
                  <td>Adetoun</td>
                  <td>6</td>
                  <td>Female</td>
                  <td>
                    <div className="table-icons">
                      <MainTooltip
                        tooltipText={"Edit"}
                        body={<FaPen className="tab-icon pen" />}
                      />

                      <MainTooltip
                        tooltipText={"Delete"}
                        body={<FaTimes className="tab-icon" />}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <TablePagination />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
