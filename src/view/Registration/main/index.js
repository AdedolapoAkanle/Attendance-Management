import React from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { FaEye, FaPen, FaPlus, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { Api } from "../../../api/parentApi";
import EditModalSecondary from "../../../components/globalComponents/EditModalSecondary";
import FormModal from "../../../components/globalComponents/Modal";
import FormModalSecondary from "../../../components/globalComponents/ModalSecondary";
import { PageTitle } from "../../../components/globalComponents/PageTitle";
import TablePagination from "../../../components/globalComponents/Pagination";
import MainTooltip from "../../../components/globalComponents/Tooltip";
import { parentAction } from "../../../redux/actions/type";
import "../../../Styles/view/register.css";

const Register = ({ state, updateState }) => {
  const { arr, title, firstName, lastName, phone } = state;

  useEffect(() => {
    handleFetch();
  }, []);

  const handleSubmit = async () => {
    const data = {
      title,
      firstName,
      lastName,
      phone,
    };

    // console.log(data);
    const api = new Api();
    const res = await api.post("parent", data);

    if (
      data.title == "" &&
      data.firstName == "" &&
      data.lastName == "" &&
      data.phone == ""
    ) {
      alert(res.message);
    } else {
      alert("registration successful");
    }
  };

  const handleFetch = async () => {
    const list = [];

    try {
      const api = new Api();
      const res = await api.get("parent");

      console.log("res", res);

      for (const i of res.data) {
        list.push({
          id: i.id,
          title: i.title,
          firstName: i.first_name,
          lastName: i.last_name,
          phone: i.phone,
        });
      }

      updateState({ ...state, arr: list });
    } catch (err) {
      console.log("error:", err);
    }
  };

  // const handleUpdate = async () => {
  //   const data = {
  //     title,
  //     firstName,
  //     lastName,
  //     phone,
  //   };

  //   // console.log(i);
  //   const api = new Api();
  //   const res = await api.edit("parent/:id", data);
  //   console.log(res)
  // };

  const handleDelete = async (id) => {
    const data = {
      id,
    };
    // console.log(i);
    const api = new Api();
    const res = await api.delete("parent/:id", data);
    alert(res.message);
    // handleFetch();
  };

  return (
    <main className="register">
      <section className="container-fluid register__section">
        <div className="container">
          <PageTitle
            header={"Registration"}
            par={"Register parent and children"}
          />
          <div style={{}}>
            <div className="register__btns">
              <Button variant="primary" type="submit" className="register__btn">
                <FormModalSecondary
                  add={false}
                  header={"Register Parent"}
                  text="Parent"
                  action={handleSubmit}
                />
              </Button>
              <Button variant="primary" type="submit" className="register__btn">
                <FormModal add={false} header={"Register Child"} text="Child" />
              </Button>
            </div>
          </div>

          <div
            style={{
              width: "90%",
              margin: "auto",
              marginLeft: "12rem",
              // backgroundColor: "#ffff",
              borderRadius: "5px",
              // padding: "1.5rem",
            }}
          >
            <Table
              striped
              style={{
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((el) => (
                  <tr key={el.id}>
                    <td>#</td>
                    <td>{el.title}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.phone}</td>
                    <td>
                      {" "}
                      <div className="table-icons">
                        <MainTooltip
                          tooltipText={"Edit"}
                          body={
                            <FormModalSecondary
                              header={"Register Parent"}
                              style={{
                                backgroundColor: "inherit",
                                border: "inherit",
                                padding: 0,
                              }}
                              text={<FaPen className="tab-icon pen" />}
                            />
                          }
                        />

                        <MainTooltip
                          tooltipText={"Delete"}
                          body={
                            <FaTimes
                              className="tab-icon"
                              onClick={() => handleDelete(el.id)}
                            />
                          }
                        />

                        <MainTooltip
                          tooltipText={"View"}
                          body={<FaEye className="tab-icon eye" />}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <TablePagination />
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = ({ parent }) => ({
  state: parent.parentState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
