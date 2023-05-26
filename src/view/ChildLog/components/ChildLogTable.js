import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { connect } from "react-redux";
import { childLogAction } from "../../../redux/actions/type";
import { columns, getChildLog } from "../../ChildLog/operations";
import "../../../Styles/Components/ChildLogTable.css";
import "../../../Styles/Components/ChildLogTable.css";
import Loader from "../../../components/globalComponents/Spinner";
import NewTable from "../../../components/globalComponents/Table";

const ChildLogTable = ({ state, updateState }) => {
  const { arr, logDate, isLoading } = state;

  useEffect(() => {
    handleFetch();
  }, [logDate]);

  const handleFetch = async () => {
    const childLog = await getChildLog(logDate);
    updateState({
      ...state,
      arr: childLog,
      staticArr: childLog,
      isLoading: false,
    });
    console.log(childLog, "chijehnj");
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <NewTable
          data={arr}
          columns={columns}
          style={{ width: "90%", marginLeft: "auto", marginLeft: "10rem" }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.childLog);
  return {
    state: state.childLog.childLogState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childLogAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildLogTable);
