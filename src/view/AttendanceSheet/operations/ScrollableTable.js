import DataTable from "react-data-table-component";
import "../../../Styles/view/ScrollableTable.css";

const data = [
  { id: 1, name: "John Doe", age: 28, gender: "Male", status: 0 },
  { id: 2, name: "Jane Doe", age: 32, gender: "Female", status: 1 },
  { id: 3, name: "Bob Smith", age: 45, gender: "Male" },
  { id: 4, name: "Alice Johnson", age: 27, gender: "Female" },
  { id: 5, name: "Mike Brown", age: 36, gender: "Male" },
  { id: 6, name: "Sarah Lee", age: 31, gender: "Female" },
  { id: 7, name: "Tom Davis", age: 41, gender: "Male" },
  { id: 8, name: "Emily Wilson", age: 29, gender: "Female" },
  { id: 9, name: "Jim Clark", age: 38, gender: "Male" },
  { id: 10, name: "Linda Lee", age: 26, gender: "Female" },
];

const Button = () => (
  <div className="checkbox-container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox"></label>
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
  { name: "ID", selector: "id", sortable: true },
  { name: "Name", selector: "name", sortable: true },
  { name: "Age", selector: "age", sortable: true },
  { name: "Gender", selector: "gender", sortable: true },
  {
    name: "Actions",
    selector: "status",
    sortable: true,
    cell: (row) => {
      if (row.status === 0) {
        return <Button />;
      } else if (row.status === 1) {
        return <Button2 />;
      }
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export const ScrollableTable = () => {
  return (
    <div
      style={{
        height: 400,
        overflow: "auto",
        width: "90%",
        marginLeft: "13rem",
      }}
    >
      <DataTable
        columns={columns}
        data={data}
        pagination={true}
        highlightOnHover={true}
      />
    </div>
  );
};
