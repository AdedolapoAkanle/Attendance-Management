import React, { useEffect } from "react";
import NewTable from "../../../../components/globalComponents/Table";
import Loader from "../../../../components/globalComponents/Spinner";
import { childAction } from "../../../../redux/actions/type";
import { connect } from "react-redux";
import CustomModal from "../../../../components/globalComponents/CustomModal";
import EditChildForm from "./EditChildForm";
import { getChild } from "../../operations/child";

const ChildInfoTable = ({ state, updateState }) => {
  const { arr, isLoading, showEditChildModal } = state;

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const child = await getChild();
    updateState({ ...state, arr: child, isLoading: false });
  };

  // const handleClick = {

  // }
  const columns = [
    {
      dataField: "count",
      text: "#",
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
        width: "5%",
      },
      style: {
        color: "",
        border: "none",
      },
    },

    {
      dataField: "firstName",
      text: "First Name",
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
        // width: "5%",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "lastName",
      text: "Last Name",
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
        // width: "5%",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "parentId",
      text: "Parent's Number",
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
        // width: "5%",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "gender",
      text: "Gender",
      sort: true,
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "dob",
      text: "Dob",
      sort: true,
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "age",
      text: "Age",
      sort: true,
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "date",
      text: "Registered Date",
      sort: true,
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },

    {
      dataField: "address",
      text: "Address",
      sort: true,
      headerStyle: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderRight: "hidden",
        borderLeft: "hidden",
        fontSize: "14px",
      },
      style: {
        color: "",
        border: "none",
        cursor: "pointer",
      },
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NewTable
            data={arr}
            columns={columns}
            style={{
              width: "77%",
              margin: "auto",
              paddingTop: "3rem",
              marginLeft: "17rem",
            }}
            handleClick={
              console.log("clicked")
              // <CustomModal
              //   header={"Edit Child"}
              //   body={<EditChildForm />}
              //   showModal={showEditChildModal}
              // />
            }
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ child }) => ({
  state: child.childState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildInfoTable);
