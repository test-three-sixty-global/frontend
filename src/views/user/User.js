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
import { Container, TextField, Button } from "@material-ui/core";

const Roles = () => {
  const [array, setArray] = useState([
    {
      userId: 1,
      lastName: "Zubair",
      firstName: "Hammad",
      email: "hammad.zubair@gmail.com",
      password: null,
      deleted: false,
      dateCreated: null,
      dateModified: "2021-06-14T20:39:58.000+00:00",
      organizationId: 1,
      address: null,
      telephone: null,
      lastLoginTime: null,
      companyUser: null,
      userRoles: []
    },
    {
      userId: 2,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "r.abc@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T12:35:56.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    },
    {
      userId: 3,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "r.abc1@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T12:38:04.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    },
    {
      userId: 4,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "r.abrrc1@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T12:40:52.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    },
    {
      userId: 5,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "rd.abrrc1@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T12:42:17.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    },
    {
      userId: 6,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "rdz.abrrc1@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T12:48:19.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    },
    {
      userId: 7,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "rer.abc@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T13:07:48.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    },
    {
      userId: 8,
      lastName: "Rehan",
      firstName: "Muhammad",
      email: "rer1.abc@gmail.com",
      password: null,
      deleted: false,
      dateCreated: "2021-06-14T13:14:27.000+00:00",
      dateModified: "2021-06-14T16:55:59.000+00:00",
      organizationId: 1,
      address: "No Address",
      telephone: "03343551962",
      lastLoginTime: null,
      companyUser: false,
      userRoles: []
    }
  ]);
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
                <CNavItem>
                  <CNavLink>Users</CNavLink>
                </CNavItem>
                <CNavItem>
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
                    <tbody>
                      {array.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.dateCreated}</td>
                            <td>{item.dateModified}</td>
                            <td>{item.address}</td>
                            <td>{item.telephone}</td>
                            <td>{item.userRoles}</td>
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
                  <Container component="main" maxWidth="xs">
                    <div>
                      <form>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          // id="email"
                          label="First Name"
                          name="emailname"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Last Name"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Email"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Password"
                          type="password"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Address"
                          // type="password"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Phone number"
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
