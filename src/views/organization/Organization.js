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

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Container, Button } from "@material-ui/core";
import { OrganizationForm } from "../base/forms/organizationForm/organizationForm";
import { useDispatch, useSelector } from "react-redux";
import * as OrganizationActionCreator from "../../redux/actionsCreator/organizationActionCreator";

const Organization = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrganizationActionCreator.getOrganization())
  }, [dispatch])

  const data = useSelector(state => state.organizationReducer.response);
  
  const [editedRow, setEditedRow] = useState({});
  const initialValues = {
    organizationName: "",
    dateCreated: "",
    dateModified: "",
  };
  const [array, setArray] = useState([
    {
      organizationId: 1,
      organizationName: "this is org",
      dateCreated: "2021-06-08T14:34:58.000+00:00",
      imageUrl: null,
      adminUserEmail: null,
      multipartFile: null,
    },
  ]);

  const updateOrganizationData = (data) => {
    console.log(data);
    let tempArray = [...array];
    tempArray[editedRow.key] = data;
    tempArray[editedRow.key].dateCreated = editedRow.item.dateCreated;
    tempArray[editedRow.key].dateModified = editedRow.item.dateModified;
    setArray(tempArray);
    setEditedRow({});
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
                <CNavItem>
                  <CNavLink>Organization</CNavLink>
                </CNavItem>
                <CNavItem>
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
                      {array.map((item, key) => {
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
                              <DeleteOutlineIcon />{" "}
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
                      <form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="Organization Name"
                          name="OrganizationName"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Admin User Email"
                        />
                        <label>Logo: &nbsp;</label>
                        <input
                          type="file"
                          style={{ marginTop: "10px", marginBottom: "10px" }}
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
