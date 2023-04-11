import React from "react";
import { Form } from "react-bootstrap";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import ScrollableTable from "../operations/ScrollableTable";
import "../../../Styles/view/AttendanceSheet.css";
import { connect } from "react-redux";
import { childAction } from "../../../redux/actions/type";

const ChildLog = ({ state, updateState }) => {
  const { arr, query } = state;

  console.log(arr);

  return (
    <main className="attendance">
      <section className="attendance__section container-fluid">
        <div className="container">
          <PageTitle header="Children Log" />
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
                  placeholder="Search name"
                  className="attendance__form-field"
                  onChange={(e) =>
                    updateState({ ...state, query: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  className="attendance__form-field"
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

const mapStateToProps = ({ child }) => ({
  state: child.childState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildLog);
