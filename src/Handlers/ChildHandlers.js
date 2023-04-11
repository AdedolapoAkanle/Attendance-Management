// import { Api } from "../api";

// export const getChild = async () => {
//   let list = [];

//   try {
//     const api = new Api();
//     const res = await api.get("child");

//     list = res?.data.map((el) => {
//       return {
//         id: el.id,
//         firstName: el.first_name,
//         lastName: el.last_name,
//         gender: el.gender,
//         dob: el.d_o_b,
//       };
//     });
//   } catch (err) {
//     console.log("error:", err);
//   }

//   return list;
// };
