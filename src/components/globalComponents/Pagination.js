import Pagination from "react-bootstrap/Pagination";

const TablePagination = () => {
  return (
    <div aria-label="Page navigation example" style={{ marginTop: "2rem" }}>
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a
            className="page-link"
            href="#"
            tabIndex="-1"
            style={{ marginTop: "2rem" }}
          >
            Previous
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TablePagination;
