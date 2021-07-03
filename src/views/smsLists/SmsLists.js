import React, { lazy, useState, useEffect } from "react";
import { smsValidationSchema } from "../../validationSchemas/smsValidation";
import * as smsActionsCreator from "../../redux/actionsCreator/smsActionsCreator";
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
import CIcon from "@coreui/icons-react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Container, TextField, Button } from "@material-ui/core";
import { SmsForm } from "../base/forms/smsForm/smsForm";
import { useDispatch, useSelector } from "react-redux";
import * as SmsActionsCreator from "../../redux/actionsCreator/smsActionsCreator";
import { Spinner } from "../widgets/ui/loader";
import _ from "lodash";

const SmsLists = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    smsListName: "",
    smsList: "",
  });
  const [editedRow, setEditedRow] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  let response = useSelector((state) => state.smsReducer.response);
  const loading = useSelector((state) => state.smsReducer.loading);

  useEffect(() => {
    console.log(activeTab);
    activeTab === 0 && dispatch(SmsActionsCreator.getSms());
  }, [dispatch, activeTab]);

  const initialValues = {
    smsListName: "",
    smsList: "",
  };

  const updateSmsData = (data) => {
    console.log(data);
    let tempResponse = _.cloneDeep(response);
    tempResponse[editedRow.key] = data;
    data.id = editedRow.item.smsAlertListId;
    data.dateCreated = editedRow.item.dateCreated;
    data.dateModified = editedRow.item.dateModified;
    tempResponse[editedRow.key] = data;
    console.log(data);
    dispatch(
      smsActionsCreator.updateSms({ smsList: tempResponse, data: data })
    );
    setEditedRow({});
  };

  const createSms = (e) => {
    e.preventDefault();
    dispatch(smsActionsCreator.postSms(formValues));
  };

  const deleteSms = (item, key) => {
    let tempResponse = _.cloneDeep(response);
    tempResponse.splice(key, 1);
    dispatch(
      smsActionsCreator.deleteSms({ smsList: tempResponse, item: item })
    );
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setFormValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <>
      {console.log(activeTab)}
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem onClick={(e) => setActiveTab(0)}>
                  <CNavLink>SMS Lists</CNavLink>
                </CNavItem>
                <CNavItem onClick={(e) => setActiveTab(1)}>
                  <CNavLink>Create SMS</CNavLink>
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
                        <th>SMS List Name</th>
                        <th>SMS Lists</th>
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
                                  <a href="/smsLists">{item.smsListName}</a>
                                </td>
                                <td>{item.smsList}</td>
                                <td>{item.dateCreated}</td>
                                <td>{item.dateModified}</td>
                                <td>
                                  <DeleteOutlineIcon
                                    onClick={() => deleteSms(item, key)}
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
                                validationSchema={smsValidationSchema}
                                onSubmit={(values) => {
                                  console.log(values);
                                  updateSmsData(values);
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
                                  <SmsForm
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
                      !editedRow.key && (
                        <tr>
                          <td colSpan="5">
                            <Spinner height={80} width={80} />
                          </td>
                        </tr>
                      )
                    )}
                  </table>
                </CTabPane>
                <CTabPane>
                  <Container component="main" maxWidth="xs">
                    <div>
                      <form onSubmit={(data) => createSms(data)}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="SMS Name"
                          name="smsName"
                          autoFocus
                          value={formValues.smsListName}
                          onChange={set("smsListName")}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="SMS List"
                          name="smsList"
                          autoFocus
                          value={formValues.smsList}
                          onChange={set("smsList")}
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

export default SmsLists;
