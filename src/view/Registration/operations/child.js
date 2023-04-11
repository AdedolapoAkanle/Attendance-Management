import { capitalizeFirstLetter } from "../../../HelperFunction/commonFunction";
import { Api } from "../../../api";

export const submitChild = async (data) => {
  console.log(data);
  let child;
  try {
    const api = new Api();
    const res = await api.post("child", data);
    console.log(res);

    if (res.success) {
      alert("registration successful");
    } else {
      console.log("errr");
      throw new Error(res);
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
    console.log(res);

    list = res.data.map((el, index) => {
      return {
        id: el.id,
        count: index + 1,
        firstName: capitalizeFirstLetter(el.first_name),
        lastName: capitalizeFirstLetter(el.last_name),
        gender: capitalizeFirstLetter(el.gender),
        dob: new Intl.DateTimeFormat("en-GB").format(new Date(el.d_o_b)),
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
    console.log(res);
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
  } catch (err) {
    console.log("error:", err);
  }
};

export const submitSingleEditChild = async (data) => {
  let child;

  try {
    const { id, title, firstName, lastName, phone } = data;
    const api = new Api();
    const res = await api.update(`child/${id}`, {
      title,
      firstName,
      lastName,
      phone,
    });
    child = await getChild();

    console.log(res, "okay");
  } catch (err) {
    console.log("error:", err);
  }

  return child;
};
