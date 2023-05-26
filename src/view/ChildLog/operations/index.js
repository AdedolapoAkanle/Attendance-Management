import {
  capitalizeFirstLetter,
  formatDate,
} from "../../../HelperFunction/commonFunction";
import { Api } from "../../../api";
import Button from "../components/Buttons/Button";
import Check from "../components/Buttons/Check";

export const getChildLog = async (date) => {
  let list = [];

  try {
    const api = new Api();
    const res = await api.get(`child-log/${date}?`);
    console.log(res, "log!");

    list = res.data.map((el, index) => {
      return {
        id: el.child_id,
        count: index + 1,
        firstName: capitalizeFirstLetter(el.first_name),
        lastName: capitalizeFirstLetter(el.last_name),
        address: el.address,
        gender: el.gender,
        parentId: el.parent_id,
        tag: el.tag,
      };
    });
    console.log(list);
  } catch (err) {
    console.log("error:", err);
  }

  return list;
};

export const submitChildLog = async (data, date) => {
  console.log(data, date);
  let childLog;
  try {
    const api = new Api();
    const res = await api.post("child-log", data);

    if (res.success) {
      alert(res.message);
    } else {
      console.log("errr");
      throw new Error(res.message);
    }

    childLog = await getChildLog(date);
  } catch (err) {
    if (err.message) {
      alert(err.message);
    }

    console.log("error:", err);
  }

  return childLog;
};

export const submitSingleChildLog = async (data) => {
  let child;

  try {
    const { id, parentId, tag, logDate } = data;
    console.log(formatDate(logDate), "logggg");
    const api = new Api();
    const res = await api.post(`child-log`, {
      childId: id,
      parentId,
      logDate: formatDate(logDate),
      tag,
    });

    child = await getChildLog(logDate);
    alert(res.message);

    return child;
  } catch (err) {
    console.log("error:", err);
  }
};

export const UndoChildLog = async (data) => {
  let child;

  try {
    const { id, logDate } = data;
    const api = new Api();
    const res = await api.update(`child-log/${id}`, {
      childId: id,
      logDate,
    });

    console.log(res, "ryuioopimjhnh");
    child = await getChildLog(logDate);
    alert(res.message);

    return child;
  } catch (err) {
    console.log("error:", err);
  }
};

export const tagValidation = (tag) => {
  if (tag === "") {
    return alert("tag field cannot be empty");
  }
};

export const columns = [
  {
    dataField: "count",
    text: "#",
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      width: "5%",
      borderTop: "1px solid rgba(255,255,255,0.12)",
    },
    style: {
      color: "",
      border: "none",
    },
  },

  {
    dataField: "firstName",
    text: "First Name",
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
    },
  },

  {
    dataField: "lastName",
    text: "Last Name",
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
    },
  },

  {
    dataField: "address",
    text: "Address",
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
    },
  },

  {
    dataField: "parentId",
    text: "Parent's Number",
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
    },
  },

  {
    dataField: "tag",
    text: "Tag",
    sort: true,
    formatter: (cell) => (cell ? cell : "-"),
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
    },
  },

  {
    dataField: "tag",
    text: "Actions",
    sortable: true,
    formatter: (cell, row) =>
      cell === "" ? <Button row={row} /> : <Check row={row} />,
    headerStyle: {
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
    },
  },
];
