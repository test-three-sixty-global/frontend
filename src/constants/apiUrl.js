export const apiUrl = {
  login: () => "/users/login",
  getEmail: () => "/emaillist/paginated",
  postEmail: () => "/emaillist",
  getOrganization: () => "/organizations/user",
  postOrganization: () => "/organizations",
  updateOrganization: (id) => `/organizations/${id}`,
  deleteOrganization: (id) => `/organizations/${id}`,
  uploadOrganizationFile: (id) => `/uploadFile`,
  getSite: () => "/sites/paginated",
  postSite: () => `/sites`,
  updateSite: (id) => `/sites/${id}`,
  deleteSite: (id) => `/sites/${id}`,
  getUser: () => `/users/paginated`,
  postUser: () => `/users`,
  updateUser: (id) => `/users/${id}`,
  deleteUser: (id) => `/users/${id}`,
  getSms: () => "/smsalertlist/paginated",
  postSms: () => "/smsalertlist",
  updateSms: (id) => `/smsalertlist/${id}`,
  deleteSms: (id) => `/smsalertlist/${id}`,
  getRole: () => "/role",
  getGroupInitialData: () => "/groups/initial/data",
  postGroup: () => "/groups",
  postGroupList: () => "/groups/paginated",
  updateGroup: (id) => `/groups/${id}`,
  getsiteInitialData: () => `/sites/initial/data`,
  deleteEmail: (id) => `/emaillist/${id}`,
  updateEmail: (id) => `/emaillist/${id}`,
  updateGroupScreenshot: (id) => `/groups/${id}/screenshot`,
  updateGroupExec: (id) => `/groups/${id}/execution/type`,
  updateGroupFrequency: (id) => `/groups/${id}/execution/frequency`,
  postTestList: () => `/testcases/paginated`,
  postTest: () => `/testcases`,
  updateTestExec: (id) => `/testcases/${id}/execution/type`,
  updateTestScreenshot: (id) => `/testcases/${id}/screenshot`,
  getGroupTestCases: (id) => `/groups/${id}/testcases`,
  getGroupTestStep: (id) => `/testcases/${id}/testcasesteps`,
  getallTestCases: () => `/testcases`,
  projectImediatelyPlay: (id) => `/play/immediate/groups/${id}`,
 //  testcaseImediatelyPlay: (id) => `/play/immediate/testcases/${1}`,
  // testcaseImediatelyPlay: (data) => `/play/test/producer/${id}`,
  testcaseImediatelyPlay: (data) => `/play/test/producer/group/${data.siteGroupId}/testcase/${data.testCaseId}`,
  getAllGroups: () => `/groups`,
  cloneTest: () => `/groups/testcase/clone`,
  updateTestcaseScreenshots: (id) => `/testcases/${id}/screenshot`,
  updateTestcaseExecutionType: (id) => `/testcases/${id}/execution/type`,
  updateTestcaseExecutionFrequency: (id) =>
    `/testcases/${id}/execution/frequency`,
  downloadTest: (id) => `/testcases/145/download`,
};
