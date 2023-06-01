import React, { useState } from "react";
import NewTable from "../../../components/globalComponents/Table";
import ChildInfoTable from "../../Registration/components/Child/ChildInfoTable";
import { useParams } from "react-router";

const Dashboard = () => {
  // const { childId } = useParams();
  // const [child, setChild] = useState(null);

  return (
    <div>
      <ChildInfoTable />
    </div>
  );
};

export default Dashboard;
