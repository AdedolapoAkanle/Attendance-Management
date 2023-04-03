import Pagination from "react-bootstrap/Pagination";

const TablePagination = () => {
  return (
    <div aria-label="Page navigation example" style={{ marginTop: "2rem" }}>
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a
            class="page-link"
            href="#"
            tabindex="-1"
            style={{ marginTop: "2rem" }}
          >
            Previous
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TablePagination;
