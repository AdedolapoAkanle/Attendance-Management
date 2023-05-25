import { connect } from "react-redux";
import { childLogAction } from "../../../../redux/actions/type";
import { FaRedo } from "react-icons/fa";
import MainTooltip from "../../../../components/globalComponents/Tooltip";
import { GiCheckMark } from "react-icons/gi";
import { UndoChildLog } from "../../operations";
import Loader from "../../../../components/globalComponents/Spinner";

const Check = ({ state, updateState, row }) => {
  const { logDate, isLoading } = state;

  const submitEditChildLog = async () => {
    updateState({ ...state, isLoading: true });
    const data = {
      id: row.id,
      logDate,
    };

    console.log(data);
    const child = await UndoChildLog(data);

    updateState({ ...state, arr: child, isLoading: false });
    console.log(child);
    console.log(state, "state");
  };

  return (
    <div className="check">
      <GiCheckMark className="check-icon" />
      <MainTooltip
        tooltipText="undo"
        body={
          isLoading ? (
            <Loader />
          ) : (
            <FaRedo className="undo-icon" onClick={submitEditChildLog} />
          )
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.childLog);
  return { state: state.childLog.childLogState };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childLogAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Check);
