import {
  capitalizeFirstLetter,
  formatDate,
} from "../../../HelperFunction/commonFunction";
import { Api } from "../../../api";

export const submitChild = async (data) => {
  console.log(data);
  let child;
  try {
    const api = new Api();
    const res = await api.post("child", data);

    if (res.success) {
      alert("registration successful");
    } else {
      console.log("errr");
      throw new Error(res.message);
    }

    child = await getChild();
  } catch (err) {
    if (err.message) {
      alert(err.message);
    }

    console.log("error:", err);
  }

  return child;
};

export const getChild = async () => {
  let list = [];

  try {
    const api = new Api();
    const res = await api.get("child");

    list = res.data.map((el, index) => {
      return {
        id: el.id,
        count: index + 1,
        firstName: capitalizeFirstLetter(el.first_name),
        lastName: capitalizeFirstLetter(el.last_name),
        gender: capitalizeFirstLetter(el.gender),
        parentId: el.parent_id,
        dob: formatDate(el.d_o_b),
        status: el.status,
      };
    });
  } catch (err) {
    console.log("error:", err);
  }

  return list;
};

export const getSingleChild = async (id) => {
  let rlt;

  try {
    const api = new Api();
    const res = await api.get(`child/${id}`);
    rlt = res.data[0];
  } catch (err) {
    console.log("error:", err);
  }

  return rlt;
};

export const deleteSingleChild = async (id) => {
  try {
    const api = new Api();
    const res = await api.delete(`child/${id}`, { id });
    console.log("delete:", res);

    if (res.success) {
      alert();
    } else {
      console.log("errr");
      throw new Error(res.message);
    }
  } catch (err) {
    console.log("error:", err);
  }
};

export const submitSingleEditChild = async (data) => {
  let child;
  console.log(data, "dataaaa");

  try {
    const { id, firstName, lastName, parentId, gender, dob } = data;
    const api = new Api();
    const res = await api.update(`child/${id}`, {
      firstName,
      lastName,
      parentId,
      gender,
      dob,
    });
    // console.log(res, "ressss");
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.parentId === "" ||
      data.gender === "" ||
      data.dob === ""
    ) {
      return alert(res.message);
    } else {
      alert(res.message);
    }

    child = await getChild();
    console.log(res, "okay");
  } catch (err) {
    console.log("error:", err);
  }
  return child;
};
