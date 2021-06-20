import React, { lazy, useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CInput,
  CListGroupItem,
  CListGroup,
  CTabs,
  CNavItem,
  CNav,
  CTabContent,
  CTabPane,
  CNavLink
} from "@coreui/react";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Container, Button } from "@material-ui/core";

const Roles = () => {
  const [array, setArray] = useState([
    {
      roleId: 6,
      roleName: "Admin",
      dateCreated: "2021-06-03T10:55:30.000+00:00",
      dateModified: "2021-06-03T10:55:30.000+00:00",
      organizationName: "this is org",
      rolePermissions: [],
      roleSites: []
    },
    {
      roleId: 7,
      roleName: "Admin 2",
      dateCreated: "2021-06-03T11:21:26.000+00:00",
      dateModified: "2021-06-03T11:21:26.000+00:00",
      organizationName: "this is org",
      rolePermissions: [],
      roleSites: []
    },
    {
      roleId: 8,
      roleName: "Admin 3",
      dateCreated: "2021-06-03T12:13:23.000+00:00",
      dateModified: "2021-06-03T12:13:23.000+00:00",
      organizationName: "this is org",
      rolePermissions: [],
      roleSites: []
    }
  ]);
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
                  <CNavLink>Roles</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Create Roles</CNavLink>
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
                        <th>Role Name</th>
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
                            <td>{item.roleName}</td>
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
                          label="Role Name"
                          name="emailname"
                          autoFocus
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
