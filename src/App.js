import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      path="/"
      name="Home"
      render={(props) =>
        authed === true ? (
          <TheLayout {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

const App = () => {
  const authed = useSelector((state) => state.authReducer.authed);
  return (
    // <CroneLists />
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <PrivateRoute
            authed={localStorage.getItem("token") ? true : authed}
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
