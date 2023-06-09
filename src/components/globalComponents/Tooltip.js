import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const MainTooltip = ({ tooltipText, body }) => {
  return (
    <OverlayTrigger
      placement="bottom-start"
      overlay={
        <Tooltip id="tooltip-disabled" style={{ fontSize: "10px", padding: 0 }}>
          {tooltipText}
        </Tooltip>
      }
    >
      <span className="d-inline-block">{body}</span>
    </OverlayTrigger>
  );
};

export default MainTooltip;
