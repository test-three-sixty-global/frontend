import React, { lazy, useEffect, useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

import {
  CCard,
  CCardBody,
  CCol,
  CInput,
  CTabs,
  CNavItem,
  CNav,
  CTabContent,
  CTabPane,
  CNavLink,
} from "@coreui/react";
import * as userActionsCreator from "../../redux/actionsCreator/userActionsCreator";

import { Container, TextField, Button } from "@material-ui/core";
import { userValidationSchema } from "../../validationSchemas/userValidationSchema";
import { Formik } from "formik";
import { UserForm } from "../base/forms/userForm/userForm";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Spinner } from "../widgets/ui/loader";

const Roles = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.userReducer.response);
  const loading = useSelector((state) => state.userReducer.loading);
  const [activeTab, setActiveTab] = useState(0);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    telephone: "",
    dateCreated: "",
    dateModified: "",
    userRoles: "",
  };
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    telephone: "",
  });

  const [editedRow, setEditedRow] = useState({});

  useEffect(() => {
    if (activeTab === 0) {
      const getUser = {
        pageNo: 0,
        pageSize: 20,
        sortBy: "",
        sortDirection: "",
        searchParams: { email: "", lastName: "", firstName: "" },
      };
      dispatch(userActionsCreator.getUser(getUser));
    }
  }, [activeTab]);

  useEffect(() => {
    console.log(editedRow);

    if (editedRow.item && editedRow.item.firstName) {
      initialValues.firstName = editedRow.item.firstName;
      initialValues.lastName = editedRow.item.lastName;
      initialValues.email = editedRow.item.email;
      initialValues.address = editedRow.item.address;
      initialValues.telephone = editedRow.item.telephone;
      initialValues.userRoles = editedRow.item.userRoles;
    }
  }, [editedRow]);

  const updateUserData = (data) => {
    console.log(editedRow);
    console.log(editedRow);
    console.log(data);
    let tempResponse = _.cloneDeep(response);
    let tempEditesRow = _.cloneDeep(editedRow);
    console.log(tempEditesRow);
    tempEditesRow.item.firstName = data.firstName;
    tempEditesRow.item.lastName = data.lastName;
    tempEditesRow.item.telephone = data.telephone;
    tempEditesRow.item.address = data.address;
    tempEditesRow.item.email = data.email;
    tempEditesRow.item.userRoles = [
      {
        userRoleId: "",
        roleId: "",
      },
    ];
    tempResponse[tempEditesRow.key] = tempEditesRow.item;
    dispatch(
      userActionsCreator.updateUser({
        userList: tempResponse,
        data: tempEditesRow.item,
      })
    );

    setEditedRow({});
  };

  const deleteUser = (item, key) => {
    let tempResponse = _.cloneDeep(response);
    tempResponse.splice(key, 1);
    dispatch(
      userActionsCreator.deleteUser({ userList: tempResponse, item: item })
    );
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setFormValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(userActionsCreator.postUser(formValues));
  };

  return (
    <>
      {/* <CCol sm="12" xl="12">
        <CCard>
          <CCardBody>
            <CListGroup>
              <CListGroupItem action>
                <h5>John Doe</h5>
                <div>John@Doe.com</div>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol> */}
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          {/* <CCardHeader>
            Index indentifiers
            <DocsLink name="CTabs"/>
          </CCardHeader> */}
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem onClick={() => setActiveTab(0)}>
                  <CNavLink>Users</CNavLink>
                </CNavItem>
                <CNavItem onClick={() => setActiveTab(1)}>
                  <CNavLink>Create User</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  {/* <CCardHeader> */}

                  <div className="float-right search-box">
                    <CCol sm="12">
                      <CInput
                        size="sm"
                        type="email"
                        id="nf-email"
                        name="nf-email"
                        placeholder="Search"
                        // autoComplete="email"
                      />
                    </CCol>
                  </div>

                  {/* </CCardHeader> */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Address</th>
                        <th>Telephone</th>
                        <th>User Roles</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {!loading ? (
                      <tbody>
                        {response &&
                          response?.length &&
                          response.map((item, key) => {
                            return editedRow.key !== key ? (
                              <tr key={key}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.dateCreated}</td>
                                <td>{item.dateModified}</td>
                                <td>{item.address}</td>
                                <td>{item.telephone}</td>
                                <td>Role</td>
                                <td>
                                  <DeleteOutlineIcon
                                    onClick={() => deleteUser(item, key)}
                                  />{" "}
                                  <EditIcon
                                    onClick={() =>
                                      setEditedRow({ item: item, key: key })
                                    }
                                  />
                                </td>
                              </tr>
                            ) : (
                              <Formik
                                validateOnChange={true}
                                initialValues={initialValues}
                                enableReinitialize
                                validationSchema={userValidationSchema}
                                onSubmit={(values) => {
                                  console.log(values);
                                  updateUserData(values);
                                }}
                              >
                                {({
                                  handleSubmit,
                                  handleChange,
                                  values,
                                  errors,
                                  touched,
                                  // dirty,
                                  isValid,
                                }) => (
                                  <UserForm
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    // dirty={dirty}
                                    isValid={isValid}
                                    handleSubmit={handleSubmit}
                                    handleChange={handleChange}
                                    dateCreated={editedRow.item.dateCreated}
                                    dateModified={editedRow.item.dateModified}
                                    setEditedRow={setEditedRow}
                                  />
                                )}
                              </Formik>
                            );
                          })}
                      </tbody>
                    ) : (
                      !editedRow.key && (
                        <tr>
                          <td colSpan="5">
                            <Spinner />
                          </td>
                        </tr>
                      )
                    )}
                  </table>
                </CTabPane>
                <CTabPane>
                  <Container component="main" maxWidth="xs">
                    <div>
                      <form onSubmit={(e) => createUser(e)}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="First Name"
                          name="emailname"
                          value={formValues.firstName}
                          onChange={set("firstName")}
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Last Name"
                          value={formValues.lastName}
                          onChange={set("lastName")}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Email"
                          value={formValues.email}
                          onChange={set("email")}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Password"
                          type="password"
                          value={formValues.password}
                          onChange={set("password")}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Address"
                          value={formValues.address}
                          onChange={set("address")}
                          // type="password"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Phone number"
                          value={formValues.telephone}
                          onChange={set("telephone")}
                        />
                        {/* <input type="file" style={{marginTop: "10px", marginBottom: "10px"}} />*/}
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          // className={classes.submit}
                        >
                          Submit
                        </Button>
                      </form>
                    </div>
                  </Container>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default Roles;
