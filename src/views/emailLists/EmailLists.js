import React, { useState, useEffect } from "react";
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
  CTextarea
} from "@coreui/react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Button, Container, TextareaAutosize } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as EmailActionCreator from "../../redux/actionsCreator/emailActionCreator";

const EmailLists = () => {

  const [emailName, setEmailName] = useState("");
  const [emailList, setEmailList] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EmailActionCreator.getEmail());
  }, [dispatch]);

  const submitEmailList = (e) => {

    e.preventDefault();
    const data = { emailListName: emailName, emailList: emailList };
    dispatch(EmailActionCreator.postEmail(data));
  }

  const data = useSelector(state => state.emailReducer.response);

  return (
    <>
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
                <CNavItem>
                  <CNavLink>Email Lists</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Create Email</CNavLink>
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
                        <th>Email List Name</th>
                        <th>Email Lists</th>
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, key) => {
                          return (
                            <tr key={key}>
                              {/* {console.log(item.emailListName)} */}
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
                  </table>
                </CTabPane>
                <CTabPane>
                  {/* {`3. ${lorem}`} */}
                  <Container component="main" maxWidth="xs">
                    <div>
                      <form onSubmit={submitEmailList}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="Email Name"
                          name="emailname"
                          autoFocus
                          onChange={e => setEmailName(e.target.value)}
                        />
                        {/* <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Email List"
                        /> */}
                        <TextareaAutosize
                          rowsMax={4}
                          rowsMin={4}
                          variant="outlined"
                          style={{width: "100%", height: "90px"}}
                          // aria-label="maximum height"
                          placeholder="Input Emails ; seperated"
                          onChange={e => setEmailList(e.target.value)}
      //                     defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      // ut labore et dolore magna aliqua."
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

export default EmailLists;
