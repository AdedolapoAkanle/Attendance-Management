import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

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

const handleClick = (row) => {
  if (true) {
    console.log(`Clicked row ${row.id}`);
  }
};

const NewTable = ({ data, columns, style }) => {
  return (
    <div style={style}>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={data.length > 10 ? paginationFactory(options) : null}
        rowEvents={{
          onClick: (e, row, rowIndex) => {
            handleClick(row);
          },
        }}
        // striped
        hover
        condensed
      />
    </div>
  );
};

export default NewTable;
