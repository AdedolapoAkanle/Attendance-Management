import React from "react";
import DataTable from "react-data-table-component";

const Tables = ({ thead, data, column }) => {
  const columns = [
    {
      name: "#",
      // selector: (row) => row.#,
    },

    {
      name: "Full Name",
      selector: (row) => row.fullName,
    },

    {
      name: "Age",
      selector: (row) => row.age,
    },

    {
      name: "Gender",
      selector: (row) => row.gender,
    },
  ];
  return <div></div>;
};

export default Tables;
