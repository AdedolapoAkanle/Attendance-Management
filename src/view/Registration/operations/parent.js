import React from "react";
import { FaPen, FaRegEye, FaTimes } from "react-icons/fa";
import { capitalizeFirstLetter } from "../../../HelperFunction/commonFunction";
import { Api } from "../../../api";
import MainTooltip from "../../../components/globalComponents/Tooltip";

export const getParent = async () => {
  let list = [];

  try {
    const api = new Api();
    const res = await api.get(`parent`);

    list = res?.data.map((el, index) => {
      return {
        id: el.id,
        count: index + 1,
        title: capitalizeFirstLetter(el.title),
        firstName: capitalizeFirstLetter(el.first_name),
        lastName: capitalizeFirstLetter(el.last_name),
        phone: el.phone,
      };
    });
  } catch (err) {
    console.log("error:", err);
  }

  return list;
};

export const getSingleParent = async (id) => {
  let rlt;

  try {
    const api = new Api();
    const res = await api.get(`parent/${id}`);
    console.log(res);
    rlt = res.data[0];
  } catch (err) {
    console.log("error:", err);
  }

  return rlt;
};

export const deleteSingleParent = async (id) => {
  try {
    const api = new Api();
    const res = await api.delete(`parent/${id}`, { id });
    console.log("delete:", res);
  } catch (err) {
    console.log("error:", err);
  }
};

export const submitParent = async (data) => {
  console.log(data, "dataa");
  let parent;
  try {
    const api = new Api();
    const res = await api.post("parent", data);

    if (
      data.title === "" ||
      data.firstName === "" ||
      data.lastName === "" ||
      data.phone === ""
    ) {
      return alert(res.message);
    } else {
      alert("registration successful");
    }

    parent = await getParent();
  } catch (err) {
    console.log("error:", err);
  }

  return parent;
};

export const submitSingleEditParent = async (data) => {
  let parent;

  try {
    const { id, title, firstName, lastName, phone } = data;
    const api = new Api();
    const res = await api.update(`parent/${id}`, {
      title,
      firstName,
      lastName,
      phone,
    });

    if (
      data.title === "" ||
      data.firstName === "" ||
      data.lastName === "" ||
      data.phone === ""
    ) {
      return alert(res.message);
    } else {
      alert(res.message);
    }
    parent = await getParent();

    console.log(res, "okay");
  } catch (err) {
    console.log("error:", err);
  }

  return parent;
};

export const fetchParentByPhone = async () => {
  let list = [];

  try {
    const res = await getParent();
    console.log(res);

    list = res.map((el) => {
      return {
        phone: el.phone,
      };
    });

    console.log(list);
  } catch (err) {
    console.log("error:", err);
  }

  return list;
};
