import React from "react";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import {
  childAction,
  parentAction,
  registerAction,
} from "../../../redux/actions/type";
import {
  getParent,
  submitParent,
  submitSingleEditParent,
} from "../operations/parent";
import "../../../Styles/view/register.css";
import CustomModal from "../../../components/globalComponents/CustomModal";
import CreateParentForm from "../components/Parent/CreateParentForm";
import EditParentForm from "../components/Parent/EditParentForm";
import CreateChildForm from "../components/Child/CreateChildForm";
import {
  getChild,
  submitChild,
  submitSingleEditChild,
} from "../operations/child";
import EditChildForm from "../components/Child/EditChildForm";
import ParentTable from "../components/Parent/ParentTable";
import ChildTable from "../components/Child/ChildTable";

const Register = ({
  state,
  updateState,
  stateChild,
  updateChildState,
  stateRegister,
  updateRegisterState,
}) => {
  const {
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
    id: selectedId,
    address,
    parentId,
    gender,
    dob,
    showChildModal,
    showEditChildModal,
  } = stateChild;

  const { activeTab } = stateRegister;

  // Parent Handlers
  const handleHideParentModal = (type) => {
    if (type === "create") {
      return updateState({ ...state, showParentModal: false });
    }

    updateState({ ...state, showEditParentModal: false });
  };

  const handleRegisterParent = async () => {
    await submitParent({ title, firstName, lastName, phone });
    const parent = await getParent();
    updateState({ ...state, arr: parent });
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
      address,
      parentId,
      gender,
      dob,
    });
    const child = await getChild();
    updateChildState({ ...stateChild, arr: child });
  };

  const handleHideChildModal = (type) => {
    if (type === "create") {
      return updateChildState({ ...stateChild, showChildModal: false });
    }

    updateChildState({ ...stateChild, showEditChildModal: false });
  };

  const submitEditChild = async () => {
    const data = {
      id: stateChild.selectedId,
      firstName: childFirstName,
      lastName: childLastName,
      address,
      parentId,
      gender,
      dob,
    };
    console.log(stateChild, "child");
    console.log(data, "label");
    const child = await submitSingleEditChild(data);
    console.log(child, "child state");
    updateChildState({
      ...stateChild,
      arr: child,
      showEditChildModal: false,
    });

    // console.log(child, "child");
    console.log(stateChild, "state child");
  };

  // Button Handler
  const handleButton = () => {
    if (activeTab === "parent") {
      return updateState({ ...state, showParentModal: true });
    }

    return updateChildState({ ...stateChild, showChildModal: true });
  };

  const renderTable = () => {
    if (activeTab === "parent") {
      return <ParentTable />;
    }

    return <ChildTable />;
  };

  return (
    <main className="register">
      <section className="container-fluid register__section">
        <div className="container">
          <PageTitle
            header={"Registration"}
            par={"Register parent and children"}
          />

          <div>
            <div className="register__btns">
              <Button
                type="submit"
                className={
                  activeTab == "parent"
                    ? `register__btn--active`
                    : `register__btn`
                }
                onClick={() =>
                  updateRegisterState({ ...stateRegister, activeTab: "parent" })
                }
              >
                Parent
              </Button>

              <Button
                type="submit"
                className={
                  activeTab == "child"
                    ? `register__btn--active`
                    : `register__btn`
                }
                onClick={() =>
                  updateRegisterState({ ...stateRegister, activeTab: "child" })
                }
              >
                Child
              </Button>
            </div>

            <div className="register__add">
              <Button
                type="submit"
                className="register__btn--add reg__add"
                onClick={handleButton}
              >
                <FaPlus className="add" />
              </Button>
            </div>
          </div>

          <div
            style={{
              width: "90%",
              margin: "auto",
              marginLeft: "12rem",
              borderRadius: "5px",
            }}
          >
            {renderTable()}
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

            <CustomModal
              header={"Edit Child"}
              body={<EditChildForm />}
              showModal={showEditChildModal}
              onHide={() => handleHideChildModal("edit")}
              onSubmit={submitEditChild}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.parent);
  return {
    state: state.parent.parentState,
    stateChild: state.child.childState,
    stateRegister: state.registration.registerState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
  updateChildState: (params) => dispatch(childAction(params)),
  updateRegisterState: (params) => dispatch(registerAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
