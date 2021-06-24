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
import CIcon from "@coreui/icons-react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Container, TextField, Button } from "@material-ui/core";


import { useDispatch, useSelector } from "react-redux";
import * as SmsActionsCreator from "../../redux/actionsCreator/smsActionsCreator";

const SmsLists = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SmsActionsCreator.getSms())
  }, [dispatch])

  const data = useSelector(state => state.smsReducer.response);

  const [array, setArray] = useState([
    {
      smsAlertListId: 2,
      smsListName: "SMs list Name 2",
      smsList: "0300937338, 03343551968",
      dateCreated: "2021-05-26T21:20:08.000+00:00",
      dateModified: "2021-05-26T21:29:12.000+00:00",
      createdBy: 1,
      modifiedBy: 1,
      organizationId: null
    },
    {
      smsAlertListId: 1,
      smsListName: "SMs list Name",
      smsList: "03009373338",
      dateCreated: "2021-05-23T01:48:26.000+00:00",
      dateModified: "2021-05-23T01:48:34.000+00:00",
      createdBy: null,
      modifiedBy: null,
      organizationId: 1
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
                  <CNavLink>SMS Lists</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Create SMS</CNavLink>
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
                        <th>SMS List Name</th>
                        <th>SMS Lists</th>
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { data && data.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td><a href="/smsLists">{item.smsListName}</a></td>
                            <td>{item.smsList}</td>
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
                          label="SMS Name"
                          name="emailname"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="SMS List"
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

export default SmsLists;
