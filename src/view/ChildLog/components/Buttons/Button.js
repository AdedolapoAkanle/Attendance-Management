import { childLogAction } from "../../../../redux/actions/type";
import { connect } from "react-redux";
import { submitSingleChildLog } from "../../operations";
import Loader from "../../../../components/globalComponents/Spinner";
import { useEffect } from "react";
import { FaRedo } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const Button = ({ state, updateState, row }) => {
  const { tag, logDate, isLoading } = state;

  // useEffect(() => {
  //   // handleSubmitChildLog();
  // }, []);

  const handleOnchange = (e, field) => {
    const value = e.target.value;
    updateState({ ...state, [field]: value });
  };

  const handleSubmitChildLog = async () => {
    updateState({ ...state, isLoading: true });

    const child = await submitSingleChildLog({ ...row, tag, logDate });

    updateState({ ...state, arr: child, isLoading: false });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        className="table__field"
        type="text"
        placeholder="tag"
        // style={{ width: "30%" }}
        onChange={(e) => handleOnchange(e, "tag")}
      />

      <GiCheckMark className="check-btn" onClick={handleSubmitChildLog} />
      {/* <button
        className="table__btn"
        onClick={handleSubmitChildLog}
        // disabled={isLoading}
      >
        {isLoading ? ".." : "save"}
      </button> */}
    </div>
  );
};

const mapStateToProps = ({ childLog }) => ({
  state: childLog.childLogState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childLogAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
