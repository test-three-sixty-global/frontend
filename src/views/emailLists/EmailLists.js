import React, { useState } from "react";
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
  CButton
} from "@coreui/react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Button, Container } from "@material-ui/core";

const EmailLists = () => {
  const [array, setArray] = useState([
    {
      emailListId: 2,
      emailListName: "Test Postman ",
      emailList: "a@a.com;b@b.com;c@c.com",
      dateCreated: "2021-05-26T14:30:10.000+00:00",
      dateModified: "2021-05-26T15:01:38.000+00:00",
      createdBy: 1,
      modifiedBy: 1,
      organizationId: 1
    },
    {
      emailListId: 3,
      emailListName: "Test Postman 2",
      emailList: "a@a.com;b@b.com",
      dateCreated: "2021-05-26T14:45:33.000+00:00",
      dateModified: "2021-05-26T14:46:27.000+00:00",
      createdBy: 1,
      modifiedBy: 1,
      organizationId: 1
    }
  ]);
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
                      {array.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td><a href="/emailLists">{item.emailListName}</a></td>
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
                      <form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="Email Name"
                          name="emailname"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Email List"
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
