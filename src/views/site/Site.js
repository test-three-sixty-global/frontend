import React, { useState, useEffect } from "react";
import { siteValidationSchema } from "../../validationSchemas/siteValidationSchema";
import { Formik } from "formik";
import { SiteForm } from "../base/forms/siteForm/siteForm";
import _ from "lodash";

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
  CButton,
} from "@coreui/react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Button, Container } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as SiteActionCreator from "../../redux/actionsCreator/siteActionCreator";

const Site = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    console.log(activeTab);
    activeTab === 0 && dispatch(SiteActionCreator.getSite())
  }, [dispatch, activeTab])


  let response = useSelector((state) => state.siteReducer.response);
  const [formValues, setFormValues] = useState({
    siteName: "",
    siteUrl: "",
    description: "",
    siteTimeZone: "africa"
  });
  const [editedRow, setEditedRow] = useState({});
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

  const updateSiteData = (data) => {
    console.log(data);
    let tempResponse = _.cloneDeep(response);
    let tempEditesRow = _.cloneDeep(editedRow);
    console.log(tempEditesRow);
    tempEditesRow.item.siteName = data.siteName;
    tempEditesRow.item.siteUrl = data.siteUrl;
    tempEditesRow.item.dateModified = data.dateModified;
    tempEditesRow.item.dateCreated = data.dateCreated;
    tempEditesRow.item.siteTimeZone = data.siteTimeZone;
    tempResponse[tempEditesRow.key] = tempEditesRow.item;
    console.log(data);
    dispatch(
      SiteActionCreator.updateSite({
        siteList: tempResponse,
        data: tempEditesRow.item
      })
    );
  };
  const deleteSite = (item, key) => {
    let tempResponse = _.cloneDeep(response);
    tempResponse.splice(key, 1);
    dispatch(
      SiteActionCreator.deleteSite({ siteList: tempResponse, item: item })
    );
  };
  const set = name => {
    return ({ target: { value } }) => {
      setFormValues(oldValues => ({ ...oldValues, [name]: value }));
    };
  };
  const createSite = e => {
    e.preventDefault();
    dispatch(SiteActionCreator.postSite(formValues));
  };
  const updateSmsData = data => {
    console.log(data);
    let tempResponse = _.cloneDeep(response);
    let tempEditesRow = _.cloneDeep(editedRow);
    console.log(tempEditesRow);
    tempEditesRow.item.siteName = data.siteName;
    tempEditesRow.item.siteUrl = data.siteUrl;
    tempEditesRow.item.dateModified = data.dateModified;
    tempEditesRow.item.dateCreated = data.dateCreated;
    tempEditesRow.item.siteTimeZone = data.siteTimeZone;
    tempResponse[tempEditesRow.key] = tempEditesRow.item;
    console.log(data);
    dispatch(
      SiteActionCreator.updateSite({
        siteList: tempResponse,
        data: tempEditesRow.item
      })
    );
  };
  return (
    <>
    {console.log(activeTab)}
      {/* <h2 style={{ paddingLeft: "15px" }}>Email Lists</h2> */}
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          {/* <CCardHeader>
            Index indentifiers
            <DocsLink name="CTabs"/>
          </CCardHeader> */}
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem onClick={e => setActiveTab(0)}>
                  <CNavLink>Site</CNavLink>
                </CNavItem>
                <CNavItem onClick={e => setActiveTab(1)}>
                  <CNavLink>Create Site</CNavLink>
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
                        <th>Site Name</th>
                        {/* <th>Email Lists</th> */}
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response && activeTab === 0 && response.map((item, key) => {
                        return editedRow.key !== key ? (

                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td>
                              <a href="/site">{item.siteName}</a>
                            </td>
                            {/* <td>{item.emailList}</td> */}
                            <td>{item.dateCreated}</td>
                            <td>{item.dateModified}</td>
                            <td>
                              <DeleteOutlineIcon  onClick={() => deleteSite(item, key)} />
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
                            validationSchema={siteValidationSchema}
                            onSubmit={(values) => {
                              console.log(values);
                              updateSiteData(values);
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
                              <SiteForm
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
                      <form onSubmit={data => createSite(data)}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="Site Name"
                          name="siteName"
                          autoFocus
                          value={formValues.siteName}
                          onChange={set("siteName")}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Site URL"
                          name="siteUrl"
                          value={formValues.siteUrl}
                          onChange={set("siteUrl")}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Description"
                          name="description"
                          value={formValues.description}
                          onChange={set("description")}
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

export default Site;
