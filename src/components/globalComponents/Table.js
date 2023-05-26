import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
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

const NewTable = ({ data, columns, style, handleClick }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  // const handleClick = (row) => {
  //   setSelectedRow(row.id);
  // };

  return (
    <div style={style}>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={data.length > 10 ? paginationFactory(options) : null}
        rowEvents={{
          onClick: (e, row) => {
            handleClick(row);
          },
        }}
        rowClasses={(row) => (row.id === selectedRow ? "selected" : "")}
        // rowEvents={{
        //   onClick: (e, row, rowIndex) => {
        //     handleClick(row);
        //   },
        // }}
        // striped
        hover
        condensed
      />
    </div>
  );
};

export default NewTable;
