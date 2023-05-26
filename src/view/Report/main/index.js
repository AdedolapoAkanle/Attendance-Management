import React from "react";
import { Form } from "react-bootstrap";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import { connect } from "react-redux";
import { reportAction } from "../../../redux/actions/type";
import Loader from "../../../components/globalComponents/Spinner";
import { formatDate } from "../../../HelperFunction/commonFunction";
import ReportTable from "../components/ReportTable";
import { FaFemale, FaMale, FaUserCheck, FaUserMinus } from "react-icons/fa";
import "../../../Styles/view/report.css";

const Report = ({ state, updateState }) => {
  const { logDate, isLoading } = state;

  const handleDate = (e, field) => {
    const value = formatDate(e.target.valueAsDate);
    updateState({ ...state, [field]: value, isLoading: true });
  };

  return (
    <main className="report">
      <section className="container-fluid report__section">
        <div className="container">
          <PageTitle header={"Report"} par={"Children attendance summary"} />

          <div className="report__summary">
            <ul>
              <li>
                <div className="report__list">
                  <span>males</span>
                  <div className="report__icons blue">
                    <FaMale className="rep__icon " />
                  </div>
                </div>
              </li>
              <li>
                <div className="report__list">
                  <span>female</span>
                  <div className="report__icons pink">
                    <FaFemale className="rep__icon " />
                  </div>
                </div>
              </li>
              <li>
                <div className="report__list">
                  <span>tagged</span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="report__icons green">
                      <FaUserCheck className="rep__icon " />
                    </div>
                    <span
                      style={{
                        marginLeft: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      100
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="report__list">
                  <span>untagged</span>
                  <div className="report__icons red">
                    <FaUserMinus className="rep__icon " />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="report__title">
            {" "}
            <h4>Monthly Report</h4>
            <span>
              Report for the month of{" "}
              <Form.Group aria-label="" className="report__months">
                <Form.Control
                  type="date"
                  defaultValue={logDate}
                  className="attendance__form-field"
                  onChange={
                    isLoading ? <Loader /> : (e) => handleDate(e, "logDate")
                  }
                />
              </Form.Group>
            </span>
          </div>
          <ReportTable />
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state: state.report.reportState };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(reportAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
