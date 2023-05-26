import React from "react";
import { connect } from "react-redux";
import { reportAction } from "../../../redux/actions/type";
import { useEffect } from "react";
import { columns, getChildByGender } from "../operations";
import Loader from "../../../components/globalComponents/Spinner";
import NewTable from "../../../components/globalComponents/Table";

const ReportTable = ({ state, updateState }) => {
  const { arr, logDate, maleCount, femaleCount, total, isLoading } = state;

  useEffect(() => {
    handleFetch();
  }, [logDate]);

  const handleFetch = async () => {
    const gender = await getChildByGender(logDate);
    const maleCount = gender.filter((item) => item.gender === "Male").length;
    const femaleCount = gender.filter(
      (item) => item.gender === "Female"
    ).length;
    const total = femaleCount + maleCount;

    updateState({
      ...state,
      arr: gender,
      maleCount,
      femaleCount,
      total,
      isLoading: false,
    });
  };

  return (
    <div>
      {/* {isLoading ? (
        <Loader />
      ) : arr.length < 0 ? (
        "No records to display"
      ) : (
        <>
          <NewTable
            keyField="id"
            data={arr.map((item) => ({
              ...item,
              maleCount,
              femaleCount,
              total,
            }))}
            columns={columns}
            style={{ width: "80%", margin: "auto", marginLeft: "17rem" }}
          />
        </>
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state: state.report.reportState };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(reportAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportTable);
