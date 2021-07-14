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
import usersData from "../users/TestsData";
import * as testActionsCreator from "../../redux/actionsCreator/testActionCreator";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Container, TextField, Button, Modal } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../widgets/ui/loader";
import * as GroupActionCreator from "../../redux/actionsCreator/groupActionCreator";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { SettingsCellRounded } from "@material-ui/icons";
import { CroneLists } from "../crone/crone";
import { ModalBody } from "reactstrap";

const Groups = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);
  const [style, setStyle] = useState("none");
  const [item, setItem] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [frequency, setFrequency] = useState(1);
  const [crone, setCrone] = useState(false);

  const [formValues, setFormValues] = useState({
    siteGroupName: "",
    emailAddressListId: 0,
    smsAlertListId: 0,
    siteId: 0,
  });

  useEffect(() => {
    console.log(activeTab);
    let data = {
      pageNo: 0,
      pageSize: 20,
      sortBy: "",
      sortDirection: "",
      searchParams: {
        projectName: "",
        testCaseName: "",
        emailList: "",
        smsListName: "",
      },
    };
    activeTab === 3 ||
      (activeTab === 4 && dispatch(GroupActionCreator.getGroupInitialData()));
    activeTab === 0 && dispatch(GroupActionCreator.postGroupList(data));
    if (activeTab === 1) {
      let data = {
        pageNo: 0,
        pageSize: 20,
        sortBy: "",
        sortDirection: "",
        searchParams: { testName: "" },
      };

      dispatch(testActionsCreator.postTestList(data));
      // dispatch(GroupActionCreator.getAllTestCases());
    }
  }, [activeTab]);

  let response = useSelector((state) => state.groupReducer.response);
  let responsePost = useSelector((state) => state.groupReducer.responsePost);
  const loading = useSelector((state) => state.groupReducer.loading);
  let testResponse = useSelector((state) => state.testReducer.responsePost);

  const createGroup = (e) => {
    e.preventDefault();
    dispatch(GroupActionCreator.postGroup(formValues));
  };
  const editGroup = (e) => {
    e.preventDefault();
    let form = {
      siteGroupName: formValues.siteGroupName,
      emailAddressListId: formValues.emailAddressListId,
      smsAlertListId: formValues.smsAlertListId,
      siteId: formValues.siteId,
    };
    let data = {
      formValues: form,
      id: updateId,
    };
    dispatch(GroupActionCreator.updateGroup(data));
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setFormValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const updateScreenshot = (value, id) => {
    console.log(value, id);
    let data = {
      data: { screenShotOption: value },
      id: id,
    };
    dispatch(GroupActionCreator.updateGroupScreenshot(data));
  };
  const updateExec = (value, id) => {
    console.log(value, id);
    let data = {
      data: { executionType: value },
      id: id,
    };
    dispatch(GroupActionCreator.updateGroupExec(data));
  };
  const updateFrequency = (value, id) => {
    console.log(value, id);
    if (value) {
      setFrequency();
      let data = {
        data: { frequency: value },
        id: id,
      };
      dispatch(GroupActionCreator.updateGroupFrequency(data));
    }
  };
  const [array, setArray] = useState([
    {
      emailListId: 2,
      emailListName: "Test Postman ",
      emailList: "a@a.com;b@b.com;c@c.com",
      dateCreated: "2021-05-26T14:30:10.000+00:00",
      dateModified: "2021-05-26T15:01:38.000+00:00",
      createdBy: 1,
      modifiedBy: 1,
      organizationId: 1,
    },
    {
      emailListId: 3,
      emailListName: "Test Postman 2",
      emailList: "a@a.com;b@b.com",
      dateCreated: "2021-05-26T14:45:33.000+00:00",
      dateModified: "2021-05-26T14:46:27.000+00:00",
      createdBy: 1,
      modifiedBy: 1,
      organizationId: 1,
    },
  ]);
  const [test, setTest] = useState([
    {
      testName: "Login",
      order: "1",
      dateCreated: "2021-02-26T14:45:33.000+00:00",
      createdby: "Wasif",
      lastExecuted: "Gul",
      status: "Pass"
    },
    {
      testName: "Login with username",
      order: "2",
      dateCreated: "2021-05-26T14:45:33.000+00:00",
      createdby: "Nauman",
      lastExecuted: "Nauman",
      status: "Pass"
    },
    {
      testName: "Login without password",
      order: "3",
      dateCreated: "2021-01-26T14:22:33.000+00:00",
      createdby: "Gul",
      lastExecuted: "Rehan",
      status: "Fail"
    },
    {
      testName: "Login with wrong username",
      order: "4",
      dateCreated: "2021-04-26T14:45:33.000+00:00",
      createdby: "Rehan",
      lastExecuted: "Rehan",
      status: "Fail"
    },
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

  const getGroupTestSteps = (id) => {
    dispatch(GroupActionCreator.getGroupTestSteps(id));
    setActiveTab(2);
  };

  const getGroupTestCases = (id) => {
    dispatch(GroupActionCreator.getGroupTestCases(id));
    setActiveTab(1);
  };
  return (
    <>
      <CCol xs="12" md="12" className="mb-4">
        <Modal open={crone} onClose={() => setCrone(false)}>
          <ModalBody>
            <CroneLists setCrone={setCrone} />
          </ModalBody>
        </Modal>
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem onClick={(e) => setActiveTab(0)}>
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 0}
                  >
                    Groups
                  </CNavLink>
                </CNavItem>
                <CNavItem onClick={(e) => setActiveTab(1)}>
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 1}
                  >
                    Test
                  </CNavLink>
                </CNavItem>
                <CNavItem onClick={(e) => setActiveTab(2)}>
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 2}
                  >
                    Tests Steps
                  </CNavLink>
                </CNavItem>
                <CNavItem onClick={(e) => setActiveTab(3)}>
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 3}
                  >
                    Create Group
                  </CNavLink>
                </CNavItem>
                <CNavItem
                  onClick={(e) => setActiveTab(4)}
                  style={{ display: style }}
                >
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 4}
                  >
                    Edit Group
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane visible={activeTab === 0}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Group Name</th>
                        <th>Tests</th>
                        <th>Last execution date</th>
                        <th>Status</th>

                        <th>Schedule</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {responsePost &&
                        responsePost.map((item, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <a href="/emailLists">{item.siteGroupName}</a>
                              </td>
                              <td>
                                <a href="/groups">View</a>
                              </td>
                              <td>{item.dateModified}</td>
                              <td> 
                                <span style={{color: "green"}}>Pass = 2</span>, 
                                <span style={{color: "red"}}>fail = 2</span>
                              </td>
                              <td onClick={() => setCrone(true)}>
                                <AccessTimeIcon />
                              </td>
                              <td style={{ width: "55%" }}>
                                <div className="row">
                                  <div className="col-md-2">
                                    <CSelect
                                      custom
                                      size="sm"
                                      name="selectScrshot"
                                      id="SelectLm"
                                      onChange={(e) =>
                                        updateScreenshot(
                                          e.target.value,
                                          item.siteGroupId
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
                                  <div className="col-md-2">
                                    <CSelect
                                      custom
                                      size="sm"
                                      name="selectScrshot"
                                      id="SelectLm"
                                      onChange={(e) =>
                                        updateExec(
                                          e.target.value,
                                          item.siteGroupId
                                        )
                                      }
                                      // onChange={set("emailAddressListId")}
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
                                  <div className="col-md-1">
                                    <input
                                      style={{ width: "100%" }}
                                      type="number"
                                      value={frequency}
                                      onChange={(e) =>
                                        updateFrequency(
                                          e.target.value,
                                          item.siteGroupId,
                                          key
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-2">
                                    <PlayArrowIcon style={{ color: "green" }} />{" "}
                                    &nbsp;&nbsp;
                                    <EditIcon
                                      onClick={() => {
                                        setStyle("block");
                                        setActiveTab(4);
                                        setItem(item);
                                        setUpdateId(item.siteGroupId);
                                        setFormValues(item);
                                      }}
                                    />{" "}
                                    &nbsp;
                                    <DeleteOutlineIcon
                                      style={{ color: "red" }}
                                    />{" "}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </CTabPane>
                {/* <CTabPane visible={activeTab === 1} value={1}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Created date</th>
                        <th>Created by</th>
                        <th>Last executed</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {test.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <a href="/emailLists">{item.testName}</a>
                            </td>

                            <td>{item.dateCreated}</td>
                            <td>{item.createdby}</td>
                            <td>{item.lastExecuted}</td>
                            <td style={{color: item.status === "Pass" ? "green" : "red"}}>{item.status}</td>
                            <td>
                             <PlayArrowIcon style={{color: "green"}} /> <DeleteOutlineIcon /> 
                            </td>
                            <td>
                              <ArrowUpwardIcon /> <ArrowDownwardIcon />
                            </td> 
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CTabPane> */}
                <CTabPane visible={activeTab == 1}>
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
                      {testResponse &&
                        testResponse.map((item, key) => {
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
                <CTabPane visible={activeTab === 2}>
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
                            <td>
                              <a href="/groups">{item.steps}</a>
                            </td>
                            <td>Override</td>
                            <td>{item.override}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CTabPane>
                <CTabPane visible={activeTab === 3}>
                  <Container component="main" maxWidth="xs">
                    <div>
                      {/* {console.log("response",response)} */}
                      {!loading ? (
                        response && (
                          <form onSubmit={(data) => createGroup(data)}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              // id="email"
                              label="Group Name"
                              name="groupName"
                              autoFocus
                              value={formValues.siteGroupName}
                              onChange={set("siteGroupName")}
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
                            <div className="form-padding">
                              <CSelect
                                custom
                                size="md"
                                name="selectSite"
                                id="SelectLm"
                                onChange={set("siteId")}
                              >
                                <option value="0">Please select site</option>
                                {response.siteList.map((item) => {
                                  return (
                                    <option value={item.siteId}>
                                      {item.siteName}
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
                <CTabPane visible={activeTab === 4}>
                  <Container component="main" maxWidth="xs">
                    <div>
                      {/* {console.log("response",response)} */}
                      {!loading ? (
                        response && (
                          <form onSubmit={(data) => editGroup(data)}>
                            {console.log(item)}
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              // id="email"
                              label="Group Name"
                              name="groupName"
                              autoFocus
                              value={
                                formValues.siteGroupName
                                  ? formValues.siteGroupName
                                  : item.siteGroupName
                              }
                              onChange={set("siteGroupName")}
                            />
                            <div className="form-padding">
                              <CSelect
                                custom
                                size="md"
                                name="selectEmail"
                                id="SelectLm"
                                onChange={set("emailAddressListId")}
                              >
                                <option value={item.emailAddressListId}>
                                  {item.emailListName}
                                </option>
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
                                <option value={item.smsAlertListId}>
                                  {item.smsListName}
                                </option>
                                {response.smsList.map((item) => {
                                  return (
                                    <option value={item.smsAlertListId}>
                                      {item.smsListName}
                                    </option>
                                  );
                                })}
                              </CSelect>
                            </div>
                            <div className="form-padding">
                              <CSelect
                                custom
                                size="md"
                                name="selectSite"
                                id="SelectLm"
                                onChange={set("siteId")}
                              >
                                <option value={item.siteId}>
                                  {item.siteName}
                                </option>
                                {response.siteList.map((item) => {
                                  return (
                                    <option value={item.siteId}>
                                      {item.siteName}
                                    </option>
                                  );
                                })}
                              </CSelect>
                            </div>
                            <Button
                              type="submit"
                              // fullWidth
                              variant="contained"
                              color="primary"
                              className="d-inline mx-1"
                              // style={{paddingLeft: "10px", paddingRight: "10px"}}
                            >
                              Submit
                            </Button>
                            <Button
                              type="submit"
                              // fullWidth
                              variant="contained"
                              className="d-inline mx-1"
                              color="secondary"
                              // style={{paddingLeft: "10px", paddingRight: "10px"}}
                              onClick={() => {
                                setItem([]);
                                setActiveTab(0);
                                setStyle("none");
                                setFormValues({
                                  siteGroupName: "",
                                  emailAddressListId: 0,
                                  smsAlertListId: 0,
                                  siteId: 0,
                                });
                              }}
                            >
                              Cancel
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

export default Groups;
