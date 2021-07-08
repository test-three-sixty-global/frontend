import React, { useState, useEffect } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CInput,
  CAlert
} from "@coreui/react";
import { emailValidationSchema } from "../../validationSchemas/emailValidationSchema";
import _ from "lodash";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Formik } from "formik";
import {
  TextField,
  Button,
  Container,
  TextareaAutosize
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as EmailActionCreator from "../../redux/actionsCreator/emailActionCreator";
import { Spinner } from "../widgets/ui/loader";
import { EmailForm } from "../base/forms/emailForm/emailForm";

const EmailLists = () => {
  const [emailName, setEmailName] = useState("");
  const [emailList, setEmailList] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = React.useState(5)
  const [editedRow, setEditedRow] = useState({});

  const response = useSelector(state => state.emailReducer.response);
  const loading = useSelector(state => state.emailReducer.loading);
  const status = useSelector(state => state.emailReducer.status);

  const dispatch = useDispatch();
  const initialValues = {
    emailListName: "",
    emailList: "",
  };

  useEffect(() => {
    if (activeTab === 0) {
      const getEmail = {
        pageNo: 0,
        pageSize: 20,
        sortBy: "",
        sortDirection: "",
        searchParams: { emailListName: "" },
      };

      dispatch(EmailActionCreator.getEmail(getEmail));
    }
  }, [dispatch, activeTab]);
  useEffect(() => {
      setEmailList("")
      setEmailName("")
  }, [status]);

  const submitEmailList = e => {
    e.preventDefault();
    const data = { emailListName: emailName, emailList: emailList };
    dispatch(EmailActionCreator.postEmail(data));
  };

  useEffect(() => {
    console.log(editedRow);
    if (editedRow.item && editedRow.item.emailListName) {
      initialValues.emailList = editedRow.item.emailList;
      initialValues.emailListName = editedRow.item.emailListName;
    }
  }, [editedRow]);

  const updateEmailData = (data) => {
    console.log(data);
    let tempResponse = _.cloneDeep(response);
    let tempEditesRow = _.cloneDeep(editedRow);
    console.log(tempEditesRow);
    tempEditesRow.item.emailList = data.emailList;
    tempEditesRow.item.emailListName = data.emailListName;
    tempEditesRow.item.dateModified = data.dateModified;
    tempEditesRow.item.dateCreated = data.dateCreated;
    tempResponse[tempEditesRow.key] = tempEditesRow.item;
    console.log(data);
    dispatch(
      EmailActionCreator.updateEmail({
        emailList: tempResponse,
        data: tempEditesRow.item,
      })
    );
  };

  const deleteEmail = (item, key) => {
    let tempResponse = _.cloneDeep(response);
    console.log(item);
    tempResponse.splice(key, 1);
    dispatch(
      EmailActionCreator.deleteEmail({
        emailList: tempResponse,
        id: item.emailListId,
      })
    );
  };
  return (
    <>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem onClick={() => setActiveTab(0)}>
                  <CNavLink>Email Lists</CNavLink>
                </CNavItem>
                <CNavItem onClick={() => setActiveTab(1)}>
                  <CNavLink>Create Email</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <div className="float-right search-box">
                    <CCol sm="12">
                      <CInput
                        size="sm"
                        type="email"
                        id="nf-email"
                        name="nf-email"
                        placeholder="Search"
                      />
                    </CCol>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Email List Name</th>
                        <th>Email Lists</th>
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {!loading ? (
                      <tbody>
                        {response &&
                          response.length &&
                          activeTab === 0 &&
                          response.map((item, key) => {
                            return editedRow.key !== key ? (
                              <tr key={key}>
                                <td>
                                  <a href="/emailLists">{item.emailListName}</a>
                                </td>
                                <td>{item.emailList}</td>
                                <td>{item.dateCreated}</td>
                                <td>{item.dateModified}</td>
                                <td>
                                  <DeleteOutlineIcon
                                    onClick={() => deleteEmail(item, key)}
                                  />
                                  <EditIcon
                                    onClick={() => {
                                      console.log("item", item);
                                      setEditedRow({ item: item, key: key });
                                    }}
                                  />
                                </td>
                              </tr>
                            ) : (
                              <Formik
                                enableReinitialize
                                validateOnChange={true}
                                initialValues={initialValues}
                                validationSchema={emailValidationSchema}
                                onSubmit={(values) => {
                                  console.log(values);
                                  updateEmailData(values);
                                }}
                              >
                                {({
                                  handleSubmit,
                                  handleChange,
                                  values,
                                  errors,
                                  touched,
                                  isValid,
                                }) => (
                                  <EmailForm
                                    values={values}
                                    touched={touched}
                                    errors={errors}
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
                      <tr>
                        <td colSpan="5">
                          <Spinner height={80} width={80} />
                        </td>
                      </tr>
                    )}
                  </table>
                </CTabPane>
                <CTabPane>
                  <Container component="main" maxWidth="xs">
                    <div>
                      {status && status.length &&
                      <CAlert color="success" style={{marginTop: "15px"}} show={visible} closeButton>
                        Success
                      </CAlert>}
                      <form onSubmit={submitEmailList}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Email Name"
                          name="emailname"
                          autoFocus
                          onChange={e => setEmailName(e.target.value)}
                        />
                        <TextareaAutosize
                          rowsMax={4}
                          rowsMin={4}
                          variant="outlined"
                          style={{ width: "100%", height: "90px" }}
                          placeholder="Input Emails ; seperated"
                          onChange={e => setEmailList(e.target.value)}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
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

export default EmailLists;
