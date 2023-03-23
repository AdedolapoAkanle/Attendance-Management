import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import "../../../Styles/view/report.css";

const Report = () => {
  return (
    <main className="report">
      <section className="container-fluid report__section">
        <div className="container">
          <PageTitle header={"Report"} par={"Children attendance summary"} />

          <div className="report__title">
            {" "}
            <h4>Monthly Report</h4>
            <span>
              Report for the month of{" "}
              <Form.Select aria-label="" className="report__months">
                <option hidden>Select Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
              </Form.Select>
            </span>
          </div>

          <Table
            striped
            style={{ width: "70%", margin: "auto", marginLeft: "20rem" }}
          >
            <thead>
              <tr>
                <th>Weeks</th>
                <th>Female</th>
                <th>Male</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>30</td>
                <td>60</td>
                <td>90</td>
              </tr>
              <tr>
                <td>2</td>
                <td>35</td>
                <td>45</td>
                <td>80</td>
              </tr>
              <tr>
                <td>3</td>
                <td>46</td>
                <td>54</td>
                <td>100</td>
              </tr>
              <tr>
                <td>4</td>
                <td>15</td>
                <td>42</td>
                <td>57</td>
              </tr>
              <tr>
                <td>5</td>
                <td>68</td>
                <td>19</td>
                <td>87</td>
              </tr>
            </tbody>
          </Table>

          <div className="report__title">
            {" "}
            <h4>Annual Report</h4>
            <span>
              Report for the year{" "}
              <Form.Select aria-label="" className="report__months">
                <option hidden>Select Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </Form.Select>
            </span>
          </div>

          <Table
            striped
            style={{ width: "70%", margin: "auto", marginLeft: "20rem" }}
          >
            <thead>
              <tr>
                <th>Months</th>
                <th>Female</th>
                <th>Male</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January</td>
                <td>194</td>
                <td>220</td>
                <td>414</td>
              </tr>
              <tr>
                <td>February</td>
                <td>162</td>
                <td>200</td>
                <td>362</td>
              </tr>
              <tr>
                <td>March</td>
                <td>170</td>
                <td>200</td>
                <td>370</td>
              </tr>
              <tr>
                <td>April</td>
                <td>211</td>
                <td>89</td>
                <td>300</td>
              </tr>
              <tr>
                <td>May</td>
                <td>202</td>
                <td>92</td>
                <td>294 n</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default Report;
