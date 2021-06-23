import { useSelector } from "react-redux";

export const LoginAction = (email, password) => {
  console.log("fork", email, password);
  //   const apiUrl = useSelector(state => state.apiUrl);
  const body = {
    email: email,
    password: password
  };
  let apiUrl =
    "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1/users";
  let path = "login";
  console.log("Bo", body);

  fetch(`${apiUrl}/${path}`, {
    method: "POST",
    // mode: "no-cors",
    headers: {
      // Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      return res.json();
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      // setErrors(err)
    });
};
