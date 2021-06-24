// import { createStore } from 'redux'

// const initialState = {
//   // apiUrl: "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1/",
//   sidebarShow: 'responsive',
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
// export default store

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authReducer";
import emailReducer from "../reducer/emailReducer";
import smsReducer from "../reducer/smsReducer";
import organizationReducer from "../reducer/organizationReducer";
import siteReducer from "../reducer/siteReducer";
import roleReducer from "../reducer/roleReducer";

export default configureStore({
  reducer: { authReducer, emailReducer, smsReducer, organizationReducer, siteReducer, roleReducer },
});
