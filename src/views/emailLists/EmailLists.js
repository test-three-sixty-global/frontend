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
} from "@coreui/react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import {
  TextField,
  Button,
  Container,
  TextareaAutosize,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as EmailActionCreator from "../../redux/actionsCreator/emailActionCreator";
import { Spinner } from "../widgets/ui/loader";

const EmailLists = () => {
  const [emailName, setEmailName] = useState("");
  const [emailList, setEmailList] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const response = useSelector((state) => state.emailReducer.response);
  const loading = useSelector((state) => state.emailReducer.loading);

  const dispatch = useDispatch();

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

  const submitEmailList = (e) => {
    e.preventDefault();
    const data = { emailListName: emailName, emailList: emailList };
    dispatch(EmailActionCreator.postEmail(data));
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
                            return (
                              <tr key={key}>
                                <td>
                                  <a href="/emailLists">{item.emailListName}</a>
                                </td>
                                <td>{item.emailList}</td>
                                <td>{item.dateCreated}</td>
                                <td>{item.dateModified}</td>
                                <td>
                                  <DeleteOutlineIcon /> <EditIcon />
                                </td>
                              </tr>
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
                      <form onSubmit={submitEmailList}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Email Name"
                          name="emailname"
                          autoFocus
                          onChange={(e) => setEmailName(e.target.value)}
                        />
                        <TextareaAutosize
                          rowsMax={4}
                          rowsMin={4}
                          variant="outlined"
                          style={{ width: "100%", height: "90px" }}
                          placeholder="Input Emails ; seperated"
                          onChange={(e) => setEmailList(e.target.value)}
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
