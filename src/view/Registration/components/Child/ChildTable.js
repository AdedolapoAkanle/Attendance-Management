import React from "react";
import MainTooltip from "../../../../components/globalComponents/Tooltip";
import { FaPen, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { childAction } from "../../../../redux/actions/type";
import {
  deleteSingleChild,
  getChild,
  getSingleChild,
} from "../../operations/child";
import { useEffect } from "react";
import { formatDate } from "../../../../HelperFunction/commonFunction";
import Loader from "../../../../components/globalComponents/Spinner";
import NewTable from "../../../../components/globalComponents/Table";
import { useNavigate } from "react-router";

const ChildTable = ({ state, updateState }) => {
  const { arr, isLoading } = state;

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const child = await getChild();
    updateState({ ...state, arr: child, isLoading: false });
  };

  const handleEdit = async (id) => {
    const child = await getSingleChild(id);
    updateState({
      ...state,
      selectedId: id,
      showEditChildModal: true,
      firstName: child.first_name,
      lastName: child.last_name,
      gender: child.gender,
      address: child.address,
      parentId: child.parent_id,
      dob: formatDate(child.d_o_b),
    });
  };

  const handleDelete = async (id) => {
    await deleteSingleChild(id);
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
      },
    },

    {
      dataField: "actions",
      text: "Actions",
      sortable: true,
      formatter: (row) => (
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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <NewTable
          path="dashboard"
          data={arr}
          columns={columns}
          style={{ width: "100%", margin: "auto", marginTop: "3rem" }}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChildTable);
