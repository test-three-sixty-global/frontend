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
  CLabel,
  CSelect,
} from "@coreui/react";
import { Container, TextField, Button, Modal } from "@material-ui/core";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

import usersData from "../users/TestsData";
import { useDispatch, useSelector } from "react-redux";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import * as TestActionCreator from "../../redux/actionsCreator/testActionCreator";
import * as GroupActionCreator from "../../redux/actionsCreator/groupActionCreator";
import { Spinner } from "../widgets/ui/loader";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { ModalBody, ModalFooter } from "reactstrap";
import { CroneLists } from "../crone/crone";

const Tests = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);

  const [formValues, setFormValues] = useState({
    testName: "",
    emailAddressListId: 0,
    smsAlertListId: 0,
  });
  useEffect(() => {
    console.log(activeTab);
    let data = {
      pageNo: 0,
      pageSize: 20,
      sortBy: "",
      sortDirection: "",
      searchParams: { testName: "" },
    };
    activeTab === 0 && dispatch(TestActionCreator.postTestList(data));
    activeTab === 2 && dispatch(GroupActionCreator.getGroupInitialData());
    // activeTab === 3 ||
    //   (activeTab === 4 && dispatch(GroupActionCreator.getGroupInitialData()));
    // activeTab === 0 && dispatch(GroupActionCreator.postGroupList(data));
  }, [activeTab]);

  let response = useSelector((state) => state.groupReducer.response);
  let responsePost = useSelector((state) => state.testReducer.responsePost);
  let responseCreate = useSelector((state) => state.testReducer.responseCreate);
  const loading = useSelector((state) => state.groupReducer.loading);
  const [crone, setCrone] = useState(false);

  const createTest = (e) => {
    e.preventDefault();
    dispatch(TestActionCreator.postTest(formValues));
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setFormValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const updateExec = (value, id) => {
    console.log(value, id);
    let data = {
      data: { executionType: value },
      id: id,
    };
    dispatch(TestActionCreator.updateTestExec(data));
  };

  const updateScreenshot = (value, id) => {
    console.log(value, id);
    let data = {
      data: { screenShotOption: value },
      id: id,
    };
    dispatch(TestActionCreator.updateTestScreenshot(data));
  };
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
        <Modal open={crone} onClose={() => setCrone(false)}>
          <ModalBody>
            <CroneLists setCrone={setCrone} />
          </ModalBody>
        </Modal>
        <CCard>
          {/* <CCardHeader>
            Index indentifiers
            <DocsLink name="CTabs"/>
          </CCardHeader> */}

          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem onClick={(e) => setActiveTab(0)}>
                  <CNavLink style={{ fontWeight: "bolder" }}>Test</CNavLink>
                </CNavItem>
                <CNavItem onClick={(e) => setActiveTab(1)}>
                  <CNavLink style={{ fontWeight: "bolder" }}>
                    Tests Steps
                  </CNavLink>
                </CNavItem>
                <CNavItem onClick={(e) => setActiveTab(2)}>
                  <CNavLink style={{ fontWeight: "bolder" }}>
                    Create Test
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        {/* <th>Steps</th> */}
                        <th>Executed by</th>
                        <th>Date executed</th>
                        <th>Schedule</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.log(responsePost)}
                      {responsePost &&
                        responsePost.map((item, key) => {
                          return (
                            <tr key={key}>
                              {/* {console.log(item.emailListName)} */}
                              <td>
                                <a href="/tests">{item.testName}</a>
                              </td>
                              <td>{item.emailListName}</td>
                              {/* <td>{item.emailListName}</td> */}
                              <td>{item.dateModified}</td>
                              <td onClick={() => setCrone(true)}>
                                <AccessTimeIcon />
                              </td>

                              <td style={{ width: "55%" }}>
                                <div className="row">
                                  <div className="col-md-3">
                                    <CSelect
                                      custom
                                      size="sm"
                                      name="selectScrshot"
                                      id="SelectLm"
                                      onChange={(e) =>
                                        updateScreenshot(
                                          e.target.value,
                                          item.testCaseId
                                        )
                                      }
                                    >
                                      <option value="0">Scr Shot</option>
                                      <option value="fail">Fail</option>
                                      <option value="eachstep">
                                        Each step
                                      </option>
                                      <option value="never">Never</option>
                                    </CSelect>
                                  </div>
                                  <div className="col-md-3">
                                    <CSelect
                                      custom
                                      size="sm"
                                      name="selectScrshot"
                                      id="SelectLm"
                                      onChange={(e) =>
                                        updateExec(
                                          e.target.value,
                                          item.testCaseId
                                        )
                                      }
                                    >
                                      <option value="0">Exec mode</option>
                                      <option value="none">None</option>
                                      <option value="sequential">
                                        Sequential
                                      </option>
                                      <option value="concurrent">
                                        Concurrent
                                      </option>
                                    </CSelect>
                                  </div>
                                  <div className="col-md-2">
                                    <PlayArrowIcon style={{ color: "green" }} />{" "}
                                    &nbsp;&nbsp;
                                    <EditIcon /> &nbsp;
                                    <DeleteOutlineIcon
                                      style={{ color: "red" }}
                                    />
                                  </div>
                                </div>
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
                      </tr>
                    </thead>
                    <tbody>
                      {testSteps.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <a href="/tests">{item.steps}</a>
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
                      {/* {console.log("response",response)} */}
                      {!loading ? (
                        response && (
                          <form onSubmit={(data) => createTest(data)}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              // id="email"
                              label="Test Name"
                              name="testName"
                              autoFocus
                              value={formValues.testName}
                              onChange={set("testName")}
                            />
                            <div className="form-padding">
                              <CSelect
                                custom
                                size="md"
                                name="selectEmail"
                                id="SelectLm"
                                onChange={set("emailAddressListId")}
                              >
                                <option value="0">Please select email</option>
                                {response.emailList.map((item) => {
                                  return (
                                    <option value={item.emailListId}>
                                      {item.emailListName}
                                    </option>
                                  );
                                })}
                              </CSelect>
                            </div>
                            <div className="form-padding">
                              <CSelect
                                custom
                                size="md"
                                name="selectSms"
                                id="SelectLm"
                                onChange={set("smsAlertListId")}
                              >
                                <option value="0">Please select sms</option>
                                {response.smsList.map((item) => {
                                  return (
                                    <option value={item.smsAlertListId}>
                                      {item.smsListName}
                                    </option>
                                  );
                                })}
                              </CSelect>
                            </div>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                            >
                              Submit
                            </Button>
                          </form>
                        )
                      ) : (
                        <tr>
                          <td colSpan="5">
                            <Spinner height={80} width={80} />
                          </td>
                        </tr>
                      )}
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

export default Tests;
