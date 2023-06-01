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

const NewTable = ({ data, columns, style, path, handleClick }) => {
  const navigate = useNavigate();
  return (
    <div style={style}>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={data.length > 10 ? paginationFactory(options) : null}
        rowEvents={{
          onClick: (e, row) => {
            navigate(`/${path}/${row.id}?`);
          },
        }}
        // rowClasses={(row) => (row.id === selectedRow ? "selected" : "")}

        hover
        condensed
      />
    </div>
  );
};

export default NewTable;
