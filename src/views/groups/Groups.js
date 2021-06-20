import React, { lazy, useState } from "react";
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
  CCardHeader
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

import usersData from "../users/TestsData";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Groups = () => {
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
  const [test, setTest] = useState([
    {
      testName: "Name 1",
      order: "1",
    },
    {
      testName: "Name 2",
      order: "2",
    },
    {
      testName: "Name 3",
      order: "3",
    },
    {
      testName: "Name 4",
      order: "4",
    }
  ]);
  const [testSteps, setTestSteps] = useState([
    {
      steps: "open | https://www.tonerprice.com/ | ",
      override: "-",
    },
    {
      steps: "click | link=Log in | ",
      override: "-",
    },
    {
      steps: "type | id=email | jayantar@test.net",
      override: "type | id=email | abcdde@test.net",
    },
    {
      steps: "click | id=pass | ",
      override: "-",
    },
    {
      steps: "type | id=pass | 123456",
      override: "type | id=pass | abcdefg",
    },
    {
      steps: "click | //button[@id='send2']/span/span | ",
      override: "-",
    },
    {
      steps: "click | //p/strong | ",
      override: "-",
    },
    {
      steps: "click | //p/strong | ",
      override: "-",
    },
    {
      steps: "verifyText | //p/strong | Hello, Jayantar Roy!",
      override: "-",
    },
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
                  <CNavLink style={{fontWeight: "bolder"}}>Groups</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink style={{fontWeight: "bolder"}}>Test</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink style={{fontWeight: "bolder"}}>Tests Steps</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Group Name</th>
                        <th>Tests</th>
                        <th>Schedule</th>
                        {/* <th>Date Modified</th> */}
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {array.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td>
                              <a href="/emailLists">{item.emailListName}</a>
                            </td>
                            <td><a href="/groups">Tests</a></td>
                            <td>
                              <AccessTimeIcon />
                            </td>
                            {/* <td>{item.dateModified}</td> */}
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
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Order</th>
                        <th>Actions</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {test.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td>
                              <a href="/emailLists">{item.testName}</a>
                            </td>
                            <td>{item.order}</td>
                            <td>
                              <DeleteOutlineIcon /> <EditIcon />
                            </td>
                            <td>
                              <ArrowUpwardIcon color="red" /> <ArrowDownwardIcon />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CTabPane>
                <CTabPane>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Steps</th>
                        <th></th>
                        <th>Overridden</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testSteps.map((item, key) => {
                        return (
                          <tr key={key}>
                            {/* {console.log(item.emailListName)} */}
                            <td>
                              <a href="/groups">{item.steps}</a>
                            </td>
                            <td>Override</td>
                            <td>
                            {item.override}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default Groups;
