import React from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { FaEye, FaPen, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import FormModal from "../../../components/globalComponents/Modal";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import TablePagination from "../../../components/globalComponents/Pagination";
import MainTooltip from "../../../components/globalComponents/Tooltip";
import { childAction, parentAction } from "../../../redux/actions/type";
import {
  deleteSingleParent,
  getParent,
  getSingleParent,
  submitParent,
  submitSingleEditParent,
} from "../operations/parent";
import "../../../Styles/view/register.css";
import CustomModal from "../../../components/globalComponents/CustomModal";
import CreateParentForm from "../components/Parent/CreateParentForm";
import EditParentForm from "../components/Parent/EditParentForm";
import CreateChildForm from "../components/Child/components/CreateChildForm";
import { submitChild } from "../operations/child";

const Register = ({ state, updateState, stateChild, updateChildState }) => {
  const {
    arr,
    showParentModal,
    showEditParentModal,
    title,
    firstName,
    lastName,
    phone,
    selectedParentID,
  } = state;

  const {
    firstName: childFirstName,
    lastName: childLastName,
    parentId,
    gender,
    dob,
    showChildModal,
    showEditChildModal,
  } = stateChild;

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const parent = await getParent();
    updateState({ ...state, arr: parent });
  };

  // Parent Handlers
  const handleEdit = async (id) => {
    const parent = await getSingleParent(id);
    updateState({
      ...state,
      selectedParentID: id,
      showEditParentModal: true,
      title: parent.title,
      firstName: parent.first_name,
      lastName: parent.last_name,
      phone: parent.phone,
    });
  };

  const handleDelete = async (id) => {
    await deleteSingleParent(id);
    await handleFetch();
  };

  const handleHideParentModal = (type) => {
    if (type === "create") {
      return updateState({ ...state, showParentModal: false });
    }

    updateState({ ...state, showEditParentModal: false });
  };

  const handleRegisterParent = async () => {
    await submitParent({ title, firstName, lastName, phone });
    await handleFetch();
  };

  const submitEditParent = async () => {
    const data = {
      id: selectedParentID,
      title,
      firstName,
      lastName,
      phone,
    };
    const parent = await submitSingleEditParent(data);
    updateState({ ...state, arr: parent, showEditParentModal: false });
  };

  // Child Handlers

  const handleRegisterChild = async () => {
    await submitChild({
      firstName: childFirstName,
      lastName: childLastName,
      parentId,
      gender,
      dob,
    });
  };

  const handleHideChildModal = (type) => {
    if (type === "create") {
      return updateChildState({ ...stateChild, showChildModal: false });
    }

    updateChildState({ ...stateChild, showEditChildModal: false });
  };

  return (
    <main className="register">
      <section className="container-fluid register__section">
        <div className="container">
          <PageTitle
            header={"Registration"}
            par={"Register parent and children"}
          />
          <div style={{}}>
            <div className="register__btns">
              <Button
                variant="primary"
                type="submit"
                className="register__btn"
                onClick={() => updateState({ ...state, showParentModal: true })}
              >
                Parent
              </Button>

              <Button
                variant="primary"
                type="submit"
                className="register__btn"
                onClick={() =>
                  updateChildState({ ...stateChild, showChildModal: true })
                }
              >
                {/* <FormModal add={false} header={"Register Child"} text="Child" /> */}
                Child
              </Button>
            </div>
          </div>

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
                  <th>Title</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((el, index) => (
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.phone}</td>
                    <td>
                      {" "}
                      <div className="table-icons">
                        <MainTooltip
                          tooltipText={"Edit"}
                          body={
                            <FaPen
                              style={{ margintBottom: 0 }}
                              className="tab-icon pen"
                              onClick={() => handleEdit(el.id)}
                            />
                          }
                        />

                        <MainTooltip
                          tooltipText={"Delete"}
                          body={
                            <FaTimes
                              className="tab-icon"
                              onClick={() => handleDelete(el.id)}
                            />
                          }
                        />

                        <MainTooltip
                          tooltipText={"View"}
                          body={<FaEye className="tab-icon eye" />}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* <TablePagination /> */}

            {/* Parent Modal */}
            <CustomModal
              header={"Register Parent"}
              body={<CreateParentForm />}
              showModal={showParentModal}
              onHide={() => handleHideParentModal("create")}
              onSubmit={handleRegisterParent}
            />

            <CustomModal
              header={"Edit Parent"}
              body={<EditParentForm />}
              showModal={showEditParentModal}
              onHide={() => handleHideParentModal("edit")}
              onSubmit={submitEditParent}
            />

            {/* Child Modal */}
            <CustomModal
              header={"Register Child"}
              body={<CreateChildForm />}
              showModal={showChildModal}
              onHide={() => handleHideChildModal("create")}
              onSubmit={handleRegisterChild}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.parent.parentState,
    stateChild: state.child.childState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
  updateChildState: (params) => dispatch(childAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
