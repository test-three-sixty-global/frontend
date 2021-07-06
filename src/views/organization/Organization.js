import React, { lazy, useState, useEffect } from "react";
import { organizationValidationSchema } from "../../validationSchemas/organizationValidationSchema";
import { Formik } from "formik";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CInput,
} from "@coreui/react";
import _ from "lodash";
import axios from "axios";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Container, Button } from "@material-ui/core";
import { OrganizationForm } from "../base/forms/organizationForm/organizationForm";
import { useDispatch, useSelector } from "react-redux";
import * as OrganizationActionCreator from "../../redux/actionsCreator/organizationActionCreator";

const Organization = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.organizationReducer.response);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    activeTab === 0 && dispatch(OrganizationActionCreator.getOrganization());
  }, [dispatch, activeTab]);

  const [editedRow, setEditedRow] = useState({});
  const initialValues = {
    organizationName: "",
    dateCreated: "",
    dateModified: "",
  };
  const [formValues, setFormValues] = useState({
    organizationName: null,
    userEmail: null,
    organizationLogo: [],
  });
  const [file, setFile] = useState([]);

  const updateOrganizationData = (data) => {
    // console.log(data);
    // console.log(editedRow);
    // let tempResponse = _.cloneDeep(response);
    // let tempEditesRow = _.cloneDeep(editedRow);
    let newData = {};
    newData.organizationName = data.organizationName;
    // newData.organizationLogo = "ajgs";
    // newData.organizationId = tempEditesRow.item.organizationId;
    newData.adminUserEmail = "sds@gmail.com";

    // tempEditesRow.item.organizationName = data.organizationName;
    // tempEditesRow.item.organizationLogo = "sdsd";
    // tempEditesRow.item.imageUrl = "sds";
    // tempEditesRow.item.adminUserEmail = "sds@gmail.com";
    // console.log(tempEditesRow);
    // tempResponse[tempEditesRow.key] = newData;

    // dispatch(
    //   OrganizationActionCreator.updateOrganization({
    //     organizationList: tempResponse,
    //     data: newData,
    //   })
    // );
    // setEditedRow({});

    let formData = new FormData();
    formData.append(
      "organization",
      new Blob(
        [
          JSON.stringify({
            organizationName: newData.organizationName,
            adminUserEmail: "gggdss@xssss.xom",
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    const headers = {
      // "Content-Type": "multipart/formdata",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25JZCI6MSwic3ViIjoiaGFtbWFkLnp1YmFpckBnbWFpbC5jb20iLCJleHAiOjE2MjM2NDQ5ODYsInVzZXJJZCI6MSwiaWF0IjoxNjIzNjQ0Njg2fQ.qbfZKSJHKoTteZsdricBtcqGVj8PLxMXWIv6gUmMucs",
    };

    axios
      .put(
        "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1/organizations",
        formData,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };

  const createOrganization = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append(
      "organization",
      new Blob(
        [
          JSON.stringify({
            organizationName: formValues.organizationName,
            adminUserEmail: "gggdss@xssss.xom",
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    const headers = {
      "Content-Type": undefined,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25JZCI6MSwic3ViIjoiaGFtbWFkLnp1YmFpckBnbWFpbC5jb20iLCJleHAiOjE2MjM2NDQ5ODYsInVzZXJJZCI6MSwiaWF0IjoxNjIzNjQ0Njg2fQ.qbfZKSJHKoTteZsdricBtcqGVj8PLxMXWIv6gUmMucs",
    };

    axios
      .post(
        "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1/organizations",
        formData,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});

    // e.preventDefault();
    // formValues.userEmail = formValues.userEmail.replace("\t", "");
    // console.log(formValues);
    // console.log(formData);

    // dispatch(OrganizationActionCreator.postOrganization(formData));
  };
  const set = (name) => {
    return ({ target: { value } }) => {
      setFormValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const deleteOrganization = (item, key) => {
    let tempResponse = _.cloneDeep(response);
    tempResponse.splice(key, 1);
    debugger;
    dispatch(
      OrganizationActionCreator.deleteOrganization({
        organizationList: tempResponse,
        item: item,
      })
    );
  };

  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
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
                  <CNavLink>Organization</CNavLink>
                </CNavItem>
                <CNavItem onClick={() => setActiveTab(1)}>
                  <CNavLink>Create Organization</CNavLink>
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
                        <th>Organization Name</th>
                        <th>Date Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response &&
                        response?.length &&
                        response.map((item, key) => {
                          return editedRow.key !== key ? (
                            <tr key={key}>
                              {/* {console.log(item.emailListName)} */}
                              <td>
                                <a href="/organization">
                                  {item.organizationName}
                                </a>
                              </td>
                              <td>{item.dateCreated}</td>
                              <td>
                                <DeleteOutlineIcon
                                  onClick={() => deleteOrganization(item, key)}
                                />
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
                              validationSchema={organizationValidationSchema}
                              onSubmit={(values) => {
                                console.log(values);
                                updateOrganizationData(values);
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
                                <OrganizationForm
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
                  </table>
                </CTabPane>
                <CTabPane>
                  {/* {`3. ${lorem}`} */}
                  <Container component="main" maxWidth="xs">
                    <div>
                      <form onSubmit={(data) => createOrganization(data)}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="organization Name"
                          name="organizationName"
                          value={formValues.organizationName}
                          onChange={set("organizationName")}
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Admin User Email"
                          name="userEmail"
                          value={formValues.userEmail}
                          onChange={set("userEmail")}
                        />
                        <label>Logo: &nbsp;</label>
                        <input
                          type="file"
                          style={{ marginTop: "10px", marginBottom: "10px" }}
                          onChange={imageHandler}
                        />
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

export default Organization;
