import MainTooltip from "../../../../components/globalComponents/Tooltip";
import { FaPen, FaRegEye, FaTimes } from "react-icons/fa";

import React from "react";
import { parentAction } from "../../../../redux/actions/type";
import { connect } from "react-redux";
import {
  deleteSingleParent,
  getParent,
  getSingleParent,
} from "../../operations/parent";
import { useEffect } from "react";
import Loader from "../../../../components/globalComponents/Spinner";
import NewTable from "../../../../components/globalComponents/Table";

const ParentTable = ({ state, updateState }) => {
  const { arr, isLoading } = state;

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const parent = await getParent();
    updateState({ ...state, arr: parent, isLoading: false });
  };

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
      dataField: "title",
      text: "Title",
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
      },
    },

    {
      dataField: "phone",
      text: "Phone",
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
      },
    },

    {
      dataField: "actions",

      text: "Actions",
      sortable: true,
      formatter: (cell, row) => (
        <>
          <MainTooltip
            tooltipText={"Edit"}
            body={
              <FaPen
                className="tab-icon pen"
                onClick={() => handleEdit(row.id)}
              />
            }
          />
          <MainTooltip
            tooltipText={"Delete"}
            body={
              <FaTimes
                className="tab-icon"
                onClick={() => handleDelete(row.id)}
              />
            }
          />
        </>
      ),
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
      },
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NewTable
          data={arr}
          columns={columns}
          style={{ width: "90%", margin: "auto", marginTop: "3rem" }}
        />
      )}{" "}
    </>
  );
};

const mapStateToProps = ({ parent }) => ({
  state: parent.parentState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentTable);
