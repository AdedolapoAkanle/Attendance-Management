import DataTable from "react-data-table-component";
import "../../../Styles/Components/ScrollableTable.css";
import { GiCheckMark } from "react-icons/gi";
import { useEffect } from "react";
import { connect } from "react-redux";
import { childAction } from "../../../redux/actions/type";
import { getChild } from "../../Registration/operations/child";

const Button = () => (
  <div className="check">
    <GiCheckMark className="check-icon" />
  </div>
);
const Button2 = ({ name }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    {" "}
    <input
      className="table__field"
      type="text"
      placeholder="tag"
      style={{ width: "40%" }}
    />
    <button className="table__btn" onClick={() => alert(`Clicked`)}>
      save
    </button>
  </div>
);

const columns = [
  { name: "#", selector: (row) => row.count, sortable: true },
  { name: "First Name", selector: (row) => row.firstName, sortable: true },
  { name: "Last Name", selector: (row) => row.lastName, sortable: true },
  { name: "Dob", selector: (row) => row.dob, sortable: true },
  { name: "Gender", selector: (row) => row.gender, sortable: true },
  {
    name: "Actions",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => {
      if (row.status === "0") {
        return <Button />;
      } else if (row.status === "1") {
        return <Button2 />;
      }
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const ScrollableTable = ({ state, updateState }) => {
  const { arr } = state;
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const child = await getChild();
    updateState({ ...state, arr: child });
    console.log(child);
  };

  // const [data] = arr;
  // console.log(data);
  // // console.log(data.firstName);
  // const el = [
  //   {
  //     id: "#",
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     dob: data.dob,
  //     gender: data.gender,
  //     status: 0,
  //   },
  // ];
  // console.log(data.firstName);

  return (
    <div
      style={{
        height: 400,
        overflow: "auto",
        width: "90%",
        marginLeft: "13rem",
        backgroundColor: "none",
      }}
    >
      <DataTable
        columns={columns}
        data={arr}
        // pagination={true}
        highlightOnHover={true}
      />
    </div>
  );
};

const mapStateToProps = ({ child }) => ({
  state: child.childState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScrollableTable);
