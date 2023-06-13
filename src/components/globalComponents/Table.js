import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";
import "../../Styles/Components/GlobalComponents/Table.css";

const options = {
  paginationSize: 10,
  pageStartIndex: 1,
  hideSizePerPage: true,
  hidePageListOnlyOnePage: true,
  paginationStyle: {
    backgroundColor: "blue",
    color: "red",
    border: "none",
  },
};

const NewTable = ({ data, columns, style, path }) => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(row);
      setSelectedRow(row.id);
      navigate(`/${path}/${row.id}`);
    },
    // onMouseEnter: (e, row, rowIndex) => {
    //   console.log(`enter on row with index: ${rowIndex}`);
    // },
  };
  return (
    <div style={style}>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={data.length > 10 ? paginationFactory(options) : null}
        rowEvents={tableRowEvents}
        rowClasses={(row) => (row.id === selectedRow ? "selected" : "")}
        hover
        condensed
      />
    </div>
  );
};

export default NewTable;
