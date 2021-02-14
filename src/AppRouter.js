import { Provider } from "react-redux";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Dashboard from './containers/Dashboard';
import PrivateRoute from "./components/PrivateRoute"

// Store Configure With React
import perisistStore from "./store";

import ErrorComponent from './components/ErrorComponent';

//Container
import Login from "../src/containers/Login";

//Constans
import { ROUTES } from "./constants";
import GuestRoute from "./components/GuestRoute";

const { store, persistor } = perisistStore;
class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <GuestRoute exact path={ROUTES.LOGIN} component={Login} />
              <Route
                exact
                path={ROUTES.FORBIDDEN}
                render={(props) => <ErrorComponent
                  {...props}
                  pageTitle="Forbidden"
                  errorTitle="403"
                  errorMessage="You do not have permissions to access this page."
                />}
              />
              <Route
                exact
                path={ROUTES.PAGENOTFOUND}
                render={(props) => <ErrorComponent
                  {...props}
                  pageTitle="Page Not Found"
                  errorTitle="404"
                  errorMessage="Page not found"
                />}
              />
              <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
              <Redirect to={ROUTES.PAGENOTFOUND} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppRouter;
