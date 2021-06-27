import React, { lazy, useState, useEffect } from "react";
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
import { TextField, Container, Button, Checkbox } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as RoleActionCreator from "../../redux/actionsCreator/roleActionCreator";

const Roles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RoleActionCreator.getRole())
  }, [dispatch])

  const data = useSelector(state => state.roleReducer.response);
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
                      {data && data.map((item, key) => {
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
                        {/* <div className="row">
                          <div className="col-md-6">
                            <h5>Organization:</h5>
                            <label>Can add</label>
                            <Checkbox
                              checked={false}
                              // onChange={handleChange}
                              name="checkedB"
                              color="primary"
                            />
                          </div>
                          <div className="col-md-6">
                            <h5>Site:</h5>
                            <label>Can add</label>
                            <Checkbox
                              checked={false}
                              // onChange={handleChange}
                              name="checkedB"
                              color="primary"
                            />
                          </div> 
                        </div>*/}
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
