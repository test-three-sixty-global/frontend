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
var inter;
var groupTestCaseTimer;

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
  const [openTest, setOpenTest] = useState(false);
  const [openTestSteps, setOpenTestSteps] = useState(false);
  const [openViewResult, setOpenViewResult] = useState(false);
  const [currentGroupName, setCurrentGroupName] = useState("");
  const [currentTestName, setCurrentTestName] = useState("");
  const [modalImage, setModalImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [checkForTimer, setCheckForTimer] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [groupTestCasess, setGroupTestCases] = useState(null);
  const [file, setFile] = useState(null)
  const [currentTestId, setCurrentTestId] = useState("")

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
     if(activeTab === 3) dispatch(GroupActionCreator.getGroupInitialData());
     if(activeTab === 4) {
       dispatch(GroupActionCreator.getGroupInitialData());
     } 
    // activeTab === 3 ||
    //   (activeTab === 4 && dispatch(GroupActionCreator.getGroupInitialData()));
    // var inter
    if (activeTab === 0) {
      inter = setInterval(() => {
        dispatch(GroupActionCreator.postGroupList(data));
      }, 5000);
    } else {
      clearInterval(inter);
    }
    if (activeTab === 1) {
      groupTestCaseTimer = setInterval(() => {
        dispatch(GroupActionCreator.getGroupTestCases(selectedGroupId));
      }, 5000);
    } else {
      clearInterval(groupTestCaseTimer);
      setSelectedGroupId("");
    }
    // activeTab === 0 && dispatch(GroupActionCreator.postGroupList(data))

    // activeTab !== 0 &&
  }, [activeTab]);

  let response = useSelector((state) => state.groupReducer.response);
  let responsePost = useSelector((state) => state.groupReducer.responsePost);
  const loading = useSelector((state) => state.groupReducer.loading);
  const groupTestCases = useSelector(
    (state) => state.groupReducer.GroupTestCases
  );
  const cloneTest = useSelector((state) => state.groupReducer.cloneTest);
  const groupTestSteps = useSelector(
    (state) => state.groupReducer.groupTestSteps
  );

  const postGroupStatus = useSelector(
    (state) => state.groupReducer.postGroupStatus
  );

  useEffect(() => {
    if (groupTestCases?.length) {
      setGroupTestCases(groupTestCases);
    }
  }, [groupTestCases]);

  useEffect(() => {
    setCheckForTimer(responsePost);
  }, [responsePost]);

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

  const updateScreenshot = (value, id, type) => {
    let data = {
      data: { screenShotOption: value },
      id: id,
    };

    if (type === "GROUP") {
      dispatch(GroupActionCreator.updateGroupScreenshot(data));
    }
    if (type === "TEST") {
      dispatch(GroupActionCreator.updateTestcaseScreenshot(data));
    }
  };
  const updateExec = (value, id, type) => {
    let data = {
      data: { executionType: value },
      id: id,
    };

    if (type === "GROUP") {
      dispatch(GroupActionCreator.updateGroupExec(data));
    }
    if (type === "TEST") {
      dispatch(GroupActionCreator.updateTestExec(data));
    }
  };
  const updateFrequency = (value, id, type) => {
    if (value) {
      setFrequency();
      let data = {
        data: { frequency: value },
        id: id,
      };
      if (type === "GROUP") {
        dispatch(GroupActionCreator.updateGroupFrequency(data));
      }
      if (type === "TEST") {
        dispatch(GroupActionCreator.updateTestExecFreq(data));
      }
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

  const onFileChange = (e) => {
    console.log("File==>",e.target.files)
    setFile(e.target.files)

    const formData = new FormData(); 
    var blob = new Blob([JSON.stringify(e.target.files)], {type : 'application/json'});
    formData.append( 
      "file", 
      blob, 
      "auton8_Test.xlsx" 
      );
      let data = {
        id: currentTestId,
        file: formData
      }
    dispatch(GroupActionCreator.uploadTest(data));
  }

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
                  className={openTest ? "" : "d-none"}
                  onClick={(e) => setActiveTab(1)}
                >
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 1}
                  >
                    Test
                  </CNavLink>
                </CNavItem>
                <CNavItem
                  onClick={(e) => setActiveTab(2)}
                  className={openTestSteps ? "" : "d-none"}
                >
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 2}
                  >
                    Test Steps
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
                <CNavItem
                  onClick={(e) => setActiveTab(5)}
                  className={openViewResult ? "" : "d-none"}
                >
                  <CNavLink
                    style={{ fontWeight: "bolder" }}
                    active={activeTab === 5}
                  >
                    Results
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                {/* Group */}
                <CTabPane
                  visible={activeTab === 0}
                  aria-selected={activeTab === 0}
                  aria-selected={activeTab !== 1}
                  className={activeTab === 0 ? " active fade show" : "d-none"}
                >
                  {activeTab === 0 && (
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Group Name</th>
                          <th>Tests</th>
                          <th>Last execution date</th>
                          <th>State</th>
                          <th>Status</th>
                          <th>Schedule</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkForTimer &&
                          checkForTimer.map((item, key) => {
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
                                    setSelectedGroupId(item.siteGroupId);
                                    setActiveTab(1);
                                    setOpenTest(true);
                                    setCurrentGroupName(item.siteGroupName);
                                  }}
                                >
                                  View
                                </td>
                                <td>{item.dateModified}</td>
                                <td>
                                  {/* <span style={{ color: "green" }}>
                                    Pass = 2
                                  </span>
                                  ,
                                  <span style={{ color: "red" }}>fail = 2</span> */}
                                  <span style={{ color: "green" }}>{item.lastRunResults?.split(",")[0]}</span>
                                  <span style={{ color: "red" }}>{item.lastRunResults?.split(",")[1]}</span>
                                </td>
                                <td>
                                  <span>{item.lastRunStatus}</span>
                                </td>
                                <td onClick={() => setCrone(true)}>
                                  <AccessTimeIcon
                                    style={{ cursor: "pointer" }}
                                  />
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
                                            item.siteGroupId,
                                            "GROUP"
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
                                            item.siteGroupId,
                                            "GROUP"
                                          )
                                        }
                                      >
                                        <option value="0">Exec mode</option>
                                        <option value="sequential">
                                          Sequential
                                        </option>
                                        <option value="concurrent">
                                          Concurrent
                                        </option>
                                      </CSelect>
                                    </div>
                                    <div className="col-md-2">
                                      <input
                                        style={{ width: "50%" }}
                                        type="number"
                                        value={frequency}
                                        onChange={(e) =>
                                          updateFrequency(
                                            e.target.value,
                                            item.siteGroupId,
                                            key,
                                            "GROUP"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      {item.lastRunStatus === "Completed" ||
                                      !item.lastRunStatus ? (
                                        <PlayArrowIcon
                                          onClick={() =>
                                            dispatch(
                                              GroupActionCreator.projectGroupImediatelyPlay(
                                                item.siteGroupId
                                              )
                                            )
                                          }
                                          style={{
                                            color: "#00DB79",
                                            cursor: "pointer",
                                            fontSize: "large"
                                          }}
                                        />
                                      ) : (
                                        <div className="d-inline">
                                          <Spinner height={10} width={10} />
                                        </div>
                                      )}
                                      &nbsp;&nbsp;
                                      <EditIcon
                                        style={{ cursor: "pointer", fontSize: "large"}}
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
                                        style={{
                                          color: "red",
                                          cursor: "pointer",
                                          fontSize: "large"
                                        }}
                                      />{" "}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                               {loading && !responsePost && (
                        <tr>
                          <td colSpan="5">
                            {" "}
                            <Spinner height="100" width="100" />
                          </td>
                        </tr>
                      )}
                      </tbody>
                      {checkForTimer && <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                    </ul>}
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
                    <div>
                      <h3
                        className="ml-3"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          color: "#0083b8",
                        }}
                      >
                        {currentGroupName}:
                      </h3>
                    </div>
                    <div
                      className="ml-auto mr-3"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        color="black"
                        style={{ background: "black", color: "white" }}
                        onClick={() => {
                          setActiveTab(0);
                          setOpenTest(false);
                          setCurrentGroupName("");
                        }}
                      >
                        Close
                      </Button>
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
                        <th></th>
                        <th></th>
                        <th>Executed by</th>
                        <th>Last Ran</th>
                        <th>State</th>
                        <th>Result</th>
                        <th>Schedule</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeTab === 1 && groupTestCasess?.length
                        ? groupTestCasess.map((item, key) => {
                            return (
                              <tr key={key}>
                                <td>{item.testName}</td>
                                <td
                                  style={{
                                    color: "#1088BB",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    fontSize: "10px"
                                  }}
                                  onClick={() => {
                                    dispatch(
                                      GroupActionCreator.getGroupTestSteps(
                                        item.testCaseId
                                      )
                                    );
                                    setActiveTab(2);
                                    setOpenTestSteps(true);
                                    setCurrentTestName(item.testName);
                                  }}
                                >
                                  View Steps
                                </td>
                                <td
                                  style={{
                                    color: "#1088BB",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    fontSize: "10px"
                                  }}
                                  onClick={() => {
                                    dispatch(
                                      GroupActionCreator.getGroupTestSteps(
                                        item.testCaseId
                                      )
                                    );
                                    setActiveTab(5);
                                    // setOpenTestSteps(true);
                                    setOpenViewResult(true)
                                    setCurrentTestName(item.testName);
                                  }}
                                >
                                  View Result
                                </td>
                                <td>{item.emailListName}</td>
                                <td style={{fontSize: "11px"}}>{item.dateModified}</td>
                                <td>
                                  {/* <span style={{ color: "green" }}>
                                    Pass = 2
                                  </span>
                                  ,
                                  <span style={{ color: "red" }}>fail = 2</span> */}
                                  <span>{item.lastRunResults}</span>
                                </td>
                                <td>
                                  <span>{item.lastRunStatus}</span>
                                </td>
                                <td onClick={() => setCrone(true)}>
                                  <AccessTimeIcon style={{ color: "black" }}/>
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
                                            item.testCaseId,
                                            "TEST"
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
                                            item.testCaseId,
                                            "TEST"
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
                                      <input
                                        style={{ width: "50%" }}
                                        type="number"
                                        value={frequency}
                                        onChange={(e) =>
                                          updateFrequency(
                                            e.target.value,
                                            item.siteGroupId,
                                            key,
                                            "TEST"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="col-md-4">
                                      {item.lastRunStatus === "Completed" ||
                                      !item.lastRunStatus ? (
                                        <PlayArrowIcon
                                          onClick={() =>

                                            { let data = {
                                              siteGroupId : item.siteGroupId,
                                              testCaseId: item.testCaseId
                                            }
                                              dispatch(
                                              GroupActionCreator.testcaseImediatelyPlay(
                                                data
                                              )
                                            )}
                                          }
                                          style={{
                                            color: "#00DB79",
                                            cursor: "pointer",
                                            fontSize: "large"
                                          }}
                                        />
                                      ) : (
                                        <div className="d-inline">
                                          <Spinner height={10} width={10} />
                                        </div>
                                      )}
                                      &nbsp;&nbsp;
                                      <EditIcon style={{fontSize: "large"}} /> &nbsp;
                                      <FileCopyIcon
                                      style={{fontSize: "large", cursor: "pointer",}}
                                        onClick={() => {
                                          setOpenDialog(true);
                                          setTestId(item.siteGroupTestId);
                                        }}
                                      />
                                      <DeleteOutlineIcon
                                        style={{ color: "red", fontSize: "large", cursor: "pointer", }}
                                        onClick={() => {
                                          dispatch(
                                            GroupActionCreator.deleteTest(
                                              item.testCaseId
                                            )
                                          );
                                        }}
                                      />
                                      <DownloadIcon
                                        style={{ cursor: "pointer", fontSize: "large", cursor: "pointer", }}
                                        onClick={() => {
                                          dispatch(
                                            GroupActionCreator.downloadTest(
                                              item.testCaseId
                                            )
                                          );
                                        }}
                                      />
                                      <input type='file' id="file-input" onChange={ onFileChange} style={{display: "none"}}/> 
                                      <label for="file-input" >
                                        <UploadIcon style={{fontSize: "large", cursor: "pointer",}} onClick={() =>setCurrentTestId(item.siteGroupTestId)} />
                                      </label> 
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
                      {loading && !groupTestCasess && !groupTestCases && (
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
                <CTabPane
                  visible={activeTab === 2}
                  className={activeTab === 2 ? " active fade show" : "d-none"}
                >
                  <div className="row">
                    <div>
                      <h3
                        className="ml-3"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          color: "#0083b8",
                        }}
                      >
                        {currentTestName}:
                      </h3>
                    </div>
                    <div
                      className="ml-auto mr-3"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        color="black"
                        style={{ background: "black", color: "white" }}
                        onClick={() => {
                          setActiveTab(1);
                          setOpenViewResult(false);
                          setCurrentTestName("");
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Command</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupTestSteps?.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{item.command}</td>
                            <td>
                              <EditIcon style={{fontSize: "large"}}/> 
                              <DeleteOutlineIcon 
                                style={{color: "red", fontSize: "large", cursor: "pointer" }} 
                                onClick={() => {
                                  dispatch(
                                    GroupActionCreator.deleteTestCase(
                                      item.testCaseStepId
                                    )
                                  );
                                }} />
                            </td>
                          </tr>
                        );
                      })}
                           {loading && !groupTestSteps && (
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
                {/* Start */}
                <CTabPane
                  visible={activeTab === 5}
                  className={activeTab === 5 ? "active fade show" : "d-none"}
                >
                  <div className="row">
                    <div>
                      <h3
                        className="ml-3"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                          color: "#0083b8",
                        }}
                      >
                        {currentTestName}:
                      </h3>
                    </div>
                    <div
                      className="ml-auto mr-3"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        color="black"
                        style={{ background: "black", color: "white" }}
                        onClick={() => {
                          setActiveTab(1);
                          setOpenTestSteps(false);
                          setCurrentTestName("");
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Command</th>
                        <th>Value</th>
                        <th>Target</th>
                        <th>Case images</th>
                        <th>Executed At</th>
                        <th>Status</th>
                        <th>Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupTestSteps?.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <a href="/groups">{item.command?.split("|")[0]}</a>
                            </td>
                            <td>{item.command?.split("|")[1]}</td>
                            <td>{item.target}</td>
                            <td
                              className={"col-md-2"}
                              onClick={() => {
                                setImageToShow(item.image);
                                setModalImage(true);
                              }}
                            >
                              <img
                                src={`data:image/jpeg;base64,${item.image}`}
                                className="test-img"
                              />
                            </td>
                            <td>{item.override}</td>
                            <td>Pass</td>
                            <td></td>
                            <td>-</td>
                          </tr>
                        );
                      })}
                           {loading && !groupTestSteps && (
                        <tr>
                          <td colSpan="5">
                            {" "}
                            <Spinner height="100" width="100" />
                          </td>
                        </tr>
                      )}
                    </tbody>
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link">1</a></li>
                      <li class="page-item"><a class="page-link">2</a></li>
                      <li class="page-item"><a class="page-link">3</a></li>
                    </ul>
                  </table>
                </CTabPane>
                {/* End */}
                <CTabPane visible={true}>
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
                                <option value="0">Please select project</option>
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
        <Dialog
          open={modalImage}
          onClose={() => setModalImage(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <img
              src={`data:image/jpeg;base64,${imageToShow}`}
              className="img-fluid"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setModalImage(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </CCol>
    </>
  );
};

export default Groups;
