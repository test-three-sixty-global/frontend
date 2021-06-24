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
  CButton
} from "@coreui/react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Button, Container } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import * as SiteActionCreator from "../../redux/actionsCreator/siteActionCreator";

const Site = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SiteActionCreator.getSite())
  }, [dispatch])

  const data = useSelector(state => state.siteReducer.response);
  const [array, setArray] = useState([
    {
      siteId: 8,
      siteName: "SIte Three",
      siteUrl: "",
      createdBy: 1,
      modifiedBy: 1,
      dateCreated: "2021-06-12T20:51:40.000+00:00",
      dateModified: "2021-06-12T20:51:40.000+00:00",
      deleted: false,
      organizationId: 1,
      siteTimeZone: "America/Los_Angeles",
      description: ""
    },
    {
      siteId: 7,
      siteName: "New Sie 74sssw",
      siteUrl: "",
      createdBy: 1,
      modifiedBy: 1,
      dateCreated: "2021-05-30T07:18:52.000+00:00",
      dateModified: "2021-05-30T07:18:52.000+00:00",
      deleted: false,
      organizationId: 1,
      siteTimeZone: "Pacific/Pago_Pago",
      description: ""
    },
    {
      siteId: 6,
      siteName: "New Sie 74w",
      siteUrl: "",
      createdBy: 1,
      modifiedBy: 1,
      dateCreated: "2021-05-30T07:16:20.000+00:00",
      dateModified: "2021-05-30T07:16:20.000+00:00",
      deleted: false,
      organizationId: 1,
      siteTimeZone: "time",
      description: ""
    },
    {
      siteId: 5,
      siteName: "Habib Bank",
      siteUrl: "",
      createdBy: 1,
      modifiedBy: 1,
      dateCreated: "2021-05-28T03:14:31.000+00:00",
      dateModified: "2021-05-28T03:14:31.000+00:00",
      deleted: false,
      organizationId: 1,
      siteTimeZone: "time",
      description: ""
    },
    {
      siteId: 2,
      siteName: "New Sie",
      siteUrl: "",
      createdBy: 1,
      modifiedBy: 1,
      dateCreated: "2021-05-27T17:04:37.000+00:00",
      dateModified: "2021-05-27T17:04:37.000+00:00",
      deleted: false,
      organizationId: 1,
      siteTimeZone: "time",
      description: ""
    },
    {
      siteId: 1,
      siteName: "Test Site",
      siteUrl: null,
      createdBy: null,
      modifiedBy: null,
      dateCreated: "2021-05-23T00:17:19.000+00:00",
      dateModified: "2021-05-23T00:17:24.000+00:00",
      deleted: false,
      organizationId: 1,
      siteTimeZone: null,
      description: null
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
                  <CNavLink>Site</CNavLink>
                </CNavItem>
                <CNavItem>
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
                      {data && data.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td>
                              <a href="/site">{item.siteName}</a>
                            </td>
                            {/* <td>{item.emailList}</td> */}
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
                          label="Site Name"
                          name="emailname"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Site URL"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Description"
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
