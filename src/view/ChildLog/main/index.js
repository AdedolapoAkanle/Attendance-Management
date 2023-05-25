import React from "react";
import { Form } from "react-bootstrap";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import ChildLogTable from "../components/ChildLogTable";
import "../../../Styles/view/AttendanceSheet.css";
import { connect } from "react-redux";
import { childLogAction } from "../../../redux/actions/type";
import { formatDate } from "../../../HelperFunction/commonFunction";
import Loader from "../../../components/globalComponents/Spinner";

const ChildLog = ({ state, updateState }) => {
  const { staticArr, logDate, isLoading } = state;

  const handleDate = (e, field) => {
    // updateState({ ...state, isLoading: true });
    const value = formatDate(e.target.valueAsDate);
    updateState({ ...state, [field]: value, isLoading: true });
  };

  const handleFilter = (e) => {
    const query = e.target.value;
    if (!query) return;
    const filter = staticArr.filter((el) => {
      return el.parentId.startsWith(query);
    });
    console.log({ filter, query }, "iurouo");

    updateState({ ...state, arr: filter, query });
  };

  return (
    <main className="attendance">
      <section className="attendance__section container-fluid">
        <div className="container">
          <PageTitle header="Child Log" />
          <div className="attendance__container" style={{ marginTop: "5rem" }}>
            <Form
              className="attendance__form"
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
                  placeholder="Search phone"
                  className="attendance__form-field"
                  onChange={(e) => handleFilter(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="date"
                  defaultValue={logDate}
                  className="attendance__form-field"
                  onChange={
                    isLoading ? <Loader /> : (e) => handleDate(e, "logDate")
                  }
                />
              </Form.Group>
            </Form>
            <ChildLogTable />
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = ({ childLog }) => ({
  state: childLog.childLogState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childLogAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildLog);
