import {
  capitalizeFirstLetter,
  formatDate,
} from "../../../HelperFunction/commonFunction";
import { Api } from "../../../api";

export const getChildReport = async (date) => {
  if (!date) {
    return 0;
  }
  let list = [];

  try {
    const api = new Api();
    const res = await api.get(`child-log/${date}?`);
    console.log(res, "res");

    list = res.data
      .filter((el) => el.tag)
      .map((el, index) => {
        return {
          count: index + 1,
          id: el.id,
          logDate: el.logDate,
          gender: capitalizeFirstLetter(el.gender),
          status: el.status,
        };
      });
    console.log(list, "listtt");
  } catch (err) {
    console.log("error:", err);
  }

  return list;
};

export const getChildByGender = async (date) => {
  try {
    const res = await getChildReport(date);

    if (res.length === 0) {
      return [{ maleCount: 0, femaleCount: 0 }];
    }

    const groupedEntries = {};
    res.forEach((entry) => {
      const childId = entry.childId;
      if (!groupedEntries[childId]) {
        groupedEntries[childId] = {
          childId,
          logDate: entry.logDate,
          maleCount: 0,
          femaleCount: 0,
        };
      }
      if (entry.gender === "Male") {
        groupedEntries[childId].maleCount++;
      } else if (entry.gender === "Female") {
        groupedEntries[childId].femaleCount++;
      }
    });

    const genderList = Object.values(groupedEntries);
    return genderList;
  } catch (err) {
    console.log("error:", err);
    return [];
  }
};

export const columns = [
  {
    dataField: "count",
    text: "#",
    headerStyle: {
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      width: "5%",
    },
    style: {
      color: "",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    },
  },

  {
    dataField: "maleCount",
    text: "Male",
    sort: true,
    // formatter: (row, cell) => row.gender[cell],
    headerStyle: {
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    },
  },

  {
    dataField: "femaleCount",
    text: "Female",
    sort: true,
    // formatter: (row, cell) => row.gender[cell],
    headerStyle: {
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    },
  },

  {
    dataField: "total",
    text: "Total",
    sort: true,
    formatter: (cell, row) => row.maleCount + row.femaleCount,
    headerStyle: {
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      borderRight: "hidden",
      borderLeft: "hidden",
      fontSize: "14px",
      // width: "5%",
    },
    style: {
      color: "",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    },
  },
];

// export const getChildReport = async (date) => {
//   let list = [];

//   try {
//     const api = new Api();
//     const res = await api.get(`child-log/${date}?`);
//     console.log(res, "res");

//     list = res.data.map((el, index) => {
//       console.log(list, "listtt");
//       return {
//         count: index + 1,
//         id: el.id,
//         logDate: el.logDate,
//         gender: capitalizeFirstLetter(el.gender),
//         status: el.status,
//       };
//     });
//     console.log(list, "listtt");
//   } catch (err) {
//     console.log("error:", err);
//   }

//   return list;
// };

// export const getChildByGender = async (date) => {
//   console.log(date, "dateee");
//   let list = [];

//   try {
//     const res = await getChildReport(date);
//     console.log(res);

//     list = res.map((el, index) => {
//       return {
//         count: index + 1,
//         logDate: el.logDate,
//         gender: el.gender,
//       };
//     });
//   } catch (err) {
//     console.log("error:", err);
//   }

//   return list;
// };

// export const getChildByGender = async (date) => {
//   let list = [];

//   try {
//     const res = await getChildReport(date);

//     // Calculate male and female counts for each log date
//     const countsByDate = res.reduce((acc, el) => {
//       if (!acc[el.logDate]) {
//         acc[el.logDate] = {
//           logDate: el.logDate,
//           maleCount: 0,
//           femaleCount: 0,
//         };
//       }

//       if (el.gender === "male") {
//         acc[el.logDate].maleCount++;
//       } else {
//         acc[el.logDate].femaleCount++;
//       }

//       return acc;
//     }, {});
//     list = Object.values(countsByDate);
//   } catch (err) {
//     console.log("error:", err);
//   }

//   return list;
// };
