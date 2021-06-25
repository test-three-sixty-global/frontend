import React, { lazy, useState, useEffect } from "react";
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
  CInput
} from "@coreui/react";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Container, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as OrganizationActionCreator from "../../redux/actionsCreator/organizationActionCreator";

const Organization = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrganizationActionCreator.getOrganization())
  }, [dispatch])

  const data = useSelector(state => state.organizationReducer.response);
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
                      {data && data.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td><a href="/organization">{item.organizationName}</a></td>
                            <td>{item.dateCreated}</td>
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
                        <input type="file" style={{marginTop: "10px", marginBottom: "10px"}}
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
