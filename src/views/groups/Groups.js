import React, { useState, useEffect } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CSelect,
  CAlert,
} from "@coreui/react";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import {
  Container,
  TextField,
  Button,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../widgets/ui/loader";
import * as GroupActionCreator from "../../redux/actionsCreator/groupActionCreator";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CroneLists } from "../crone/crone";
import { ModalBody } from "reactstrap";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DownloadIcon from "@material-ui/icons/GetApp";
import UploadIcon from "@material-ui/icons/Publish";

const Groups = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = React.useState(5);
  const [style, setStyle] = useState("none");
  const [item, setItem] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [frequency, setFrequency] = useState(1);
  const [crone, setCrone] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [testName, setTestName] = useState("");
  const [cloneGroup, setCloneGroup] = useState("");
  const [testId, setTestId] = useState("");

  const [formValues, setFormValues] = useState({
    siteGroupName: "",
    emailAddressListId: 0,
    smsAlertListId: 0,
    siteId: 0,
  });

  useEffect(() => {
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
    activeTab === 3 && dispatch(GroupActionCreator.getGroupInitialData());
    activeTab === 4 && dispatch(GroupActionCreator.getGroupInitialData());
    // activeTab === 3 ||
    //   (activeTab === 4 && dispatch(GroupActionCreator.getGroupInitialData()));
    activeTab === 0 && dispatch(GroupActionCreator.postGroupList(data));
  }, [activeTab]);

  let response = useSelector((state) => state.groupReducer.response);
  let responsePost = useSelector((state) => state.groupReducer.responsePost);
  const loading = useSelector((state) => state.groupReducer.loading);
  let testResponse = useSelector((state) => state.testReducer.responsePost);
  const getAllGroups = useSelector((state) => state.groupReducer.getAllGroups);
  const groupTestCases = useSelector(
    (state) => state.groupReducer.GroupTestCases
  );
  const cloneTest = useSelector((state) => state.groupReducer.cloneTest);
  const postGroupStatus = useSelector(
    (state) => state.groupReducer.postGroupStatus
  );

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
    let data = {
      data: { screenShotOption: value },
      id: id,
    };
    dispatch(GroupActionCreator.updateGroupScreenshot(data));
  };
  const updateExec = (value, id) => {
    let data = {
      data: { executionType: value },
      id: id,
    };
    dispatch(GroupActionCreator.updateGroupExec(data));
  };
  const updateFrequency = (value, id) => {
    if (value) {
      setFrequency();
      let data = {
        data: { frequency: value },
        id: id,
      };
      dispatch(GroupActionCreator.updateGroupFrequency(data));
    }
  };

  useEffect(() => {
    openDialog && dispatch(GroupActionCreator.getAllGroups());
  }, [openDialog]);

  useEffect(() => {
    cloneTest?.status && setOpenDialog(false);
  }, [cloneTest]);

  const cloneTestCase = () => {
    const data = {
      siteGroupId: cloneGroup,
      testName: testName,
      testCaseId: testId,
    };
    dispatch(GroupActionCreator.cloneTest(data));
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
                <CNavItem
                  className={activeTab === 1 ? "" : "d-none"}
                  onClick={(e) => setActiveTab(1)}
                >
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
                <CTabPane
                  visible={activeTab === 0}
                  aria-selected={activeTab === 0}
                  aria-selected={activeTab !== 1}
                >
                  {activeTab === 0 && (
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
                                <td
                                  style={{
                                    color: "#1088BB",
                                    cursor: "pointer",
                                  }}
                                >
                                  {item.siteGroupName}
                                </td>
                                <td
                                  style={{
                                    color: "#1088BB",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    dispatch(
                                      GroupActionCreator.getGroupTestCases(
                                        item.siteGroupId
                                      )
                                    );
                                    setActiveTab(1);
                                  }}
                                >
                                  View
                                </td>
                                <td>{item.dateModified}</td>
                                <td>
                                  <span style={{ color: "green" }}>
                                    Pass = 2
                                  </span>
                                  ,
                                  <span style={{ color: "red" }}>fail = 2</span>
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
                                      <PlayArrowIcon
                                        onClick={() =>
                                          dispatch(
                                            GroupActionCreator.projectGroupImediatelyPlay(
                                              item.siteGroupId
                                            )
                                          )
                                        }
                                        style={{ color: "green" }}
                                      />
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
                  )}
                </CTabPane>
                {/* Group Listing End */}
                {/* Test Tab */}
                <CTabPane
                  visible={activeTab == 1}
                  className={activeTab === 1 ? " active fade show" : "d-none"}
                >
                  <div className="row">
                    {/* Dialog */}
                    <Dialog
                      open={openDialog}
                      onClose={() => setOpenDialog(false)}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Clone test case
                      </DialogTitle>
                      <DialogContent>
                        <div className="col-md-12">
                          {responsePost && (
                            <form style={{ minHeight: "30vh" }}>
                              <CSelect
                                custom
                                size="md"
                                name="selectScrshot"
                                id="SelectLm"
                                onChange={(e) => setCloneGroup(e.target.value)}
                              >
                                <option value="0">Select group</option>
                                {responsePost &&
                                  responsePost.length &&
                                  responsePost.map((item) => {
                                    return (
                                      <option
                                        value={item.siteGroupId}
                                        key={item.siteGroupId}
                                      >
                                        {item.siteGroupName}
                                      </option>
                                    );
                                  })}
                              </CSelect>
                              <TextField
                                autoFocus
                                margin="dense"
                                id="testName"
                                label="Test name"
                                // type="email"
                                variant="outlined"
                                fullWidth
                                style={{ marginTop: "15px" }}
                                autoComplete={false}
                                value={testName}
                                onChange={(e) => setTestName(e.target.value)}
                              />
                            </form>
                          )}
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => setOpenDialog(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => cloneTestCase()}
                        >
                          Clone
                        </Button>
                      </DialogActions>
                    </Dialog>
                    {/* Dialog END */}

                    <div
                      className="ml-auto mr-3"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => setActiveTab(0)}
                      >
                        Close
                      </Button>
                      {/* <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => setOpenDialog(true)}
                      >
                        Test
                      </Button> */}
                    </div>
                  </div>
                  {cloneTest?.status === "OK" && (
                    <CAlert
                      color="success"
                      style={{ marginTop: "15px" }}
                      show={visible}
                      closeButton
                    >
                      Test Clone successfuly
                    </CAlert>
                  )}
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Executed by</th>
                        <th>Date executed</th>
                        <th>Schedule</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.log("groupTestCases", groupTestCases)}
                      {activeTab === 1 && groupTestCases?.length
                        ? groupTestCases.map((item, key) => {
                            return (
                              <tr key={key}>
                                <td>
                                  <a href="/tests">{item.testName}</a>
                                </td>
                                <td>{item.emailListName}</td>
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
                                    <div className="col-md-4">
                                      <PlayArrowIcon
                                        style={{ color: "green" }}
                                        onClick={() =>
                                          dispatch(
                                            GroupActionCreator.testcaseImediatelyPlay(
                                              item.siteGroupTestId
                                            )
                                          )
                                        }
                                      />
                                      &nbsp;&nbsp;
                                      <EditIcon /> &nbsp;
                                      <FileCopyIcon
                                        onClick={() => {
                                          setOpenDialog(true);
                                          setTestId(item.siteGroupTestId);
                                        }}
                                      />
                                      <DeleteOutlineIcon
                                        style={{ color: "red" }}
                                      />
                                      <DownloadIcon />
                                      <UploadIcon />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        : !loading && (
                            <tr>
                              <td colSpan="5">
                                <h5 className="text-center mt-5 pt-5">
                                  No test cases found for this group
                                </h5>
                              </td>
                            </tr>
                          )}
                      {loading && (
                        <tr>
                          <td colSpan="5">
                            {" "}
                            <Spinner height="100" width="100" />
                          </td>
                        </tr>
                      )}
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
                <CTabPane>
                  <Container component="main" maxWidth="xs">
                    <div>
                      {postGroupStatus === "OK" && (
                        <CAlert
                          color="success"
                          style={{ marginTop: "15px" }}
                          show={visible}
                          closeButton
                        >
                          Success
                        </CAlert>
                      )}
                      {!loading ? (
                        response && (
                          <form onSubmit={(data) => createGroup(data)}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              label="Group Name"
                              name="groupName"
                              autoFocus
                              value={
                                postGroupStatus === "OK"
                                  ? ""
                                  : formValues.siteGroupName
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
                <CTabPane
                  visible={true}
                  className={activeTab !== 4 ? "fade" : "active show"}
                >
                  <Container component="main" maxWidth="xs">
                    <h1>HY</h1>

                    <div>
                      {!loading ? (
                        response && (
                          <form onSubmit={(data) => editGroup(data)}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
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
                                <option
                                  value={item.emailAddressListId}
                                  key={item.emailAddressListId}
                                >
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
                                id="SelectLm1"
                                onChange={set("smsAlertListId")}
                              >
                                <option value={item.smsAlertListId}>
                                  {item.smsListName}
                                </option>
                                {response.smsList.map((item) => {
                                  return (
                                    <option
                                      value={item.smsAlertListId}
                                      key={item.smsAlertListId}
                                    >
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
                                id="SelectLm2"
                                onChange={set("siteId")}
                              >
                                <option value={item.siteId}>
                                  {item.siteName}
                                </option>
                                {response.siteList.map((item) => {
                                  return (
                                    <option
                                      value={item.siteId}
                                      key={item.siteId}
                                    >
                                      {item.siteName}
                                    </option>
                                  );
                                })}
                              </CSelect>
                            </div>
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              className="d-inline mx-1"
                            >
                              Submit
                            </Button>
                            <Button
                              type="submit"
                              variant="contained"
                              className="d-inline mx-1"
                              color="secondary"
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
