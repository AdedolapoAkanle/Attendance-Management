import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// ...

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

var products = [
  {
    id: 1,
    name: "Item name 1",
    price: 100,
  },
  {
    id: 2,
    name: "Item name 2",
    price: 100,
  },
];

const sizePerPageOptionRenderer = ({ text, page, onSizePerPageChange }) => (
  <li key={text} role="presentation" className="dropdown-item">
    <a
      href="#"
      tabIndex="-1"
      role="menuitem"
      data-page={page}
      onMouseDown={(e) => {
        e.preventDefault();
        onSizePerPageChange(page);
      }}
      style={{ color: "red" }}
    >
      {text}
    </a>
  </li>
);

const options = {
  sizePerPageOptionRenderer,
};

const CostumTable = () => {
  <BootstrapTable
    keyField="id"
    data={products}
    columns={columns}
    pagination={paginationFactory(options)}
    classes={{ backgroundColor: "red", border: "1px solid red" }}
  />;
};

export default CostumTable;
