import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
      formatter: (cell, row) => {
        return <span>{row.firstName}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.lastName}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.parentID}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.gender}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.dob}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.age}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.date}</span>;
      },
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
      formatter: (cell, row) => {
        return <span>{row.address}</span>;
      },
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
            // data={arr}
            columns={columns}
            style={{
              width: "77%",
              margin: "auto",
              paddingTop: "3rem",
              marginLeft: "17rem",
            }}
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
