import React from "react";
import { Form } from "react-bootstrap";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import { connect } from "react-redux";
import { reportAction } from "../../../redux/actions/type";
import "../../../Styles/view/report.css";
import Loader from "../../../components/globalComponents/Spinner";
import { formatDate } from "../../../HelperFunction/commonFunction";
import ReportTable from "../components/ReportTable";

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
