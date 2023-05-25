import Spinner from "react-bootstrap/Spinner";
import "../../Styles/Components/GlobalComponents/Spinner.css";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" bsPrefix="spinner" />
    </div>
  );
};

export default Loader;
