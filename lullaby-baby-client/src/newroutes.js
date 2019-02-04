import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncLogin = asyncComponent(() => import("./containers/Login"));
const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
const AsyncSignup = asyncComponent(() => import("./containers/Signup"));
const AsyncNewNote = asyncComponent(() => import("./containers/NewNote"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));
const AsyncSettings = asyncComponent(() => import("./containers/Settings"));
const AsyncResetPassword = asyncComponent(() => import("./containers/ResetPassword"));
const AsyncChangePassword = asyncComponent(() => import("./containers/ChangePassword"));
const AsyncChangeEmail = asyncComponent(() => import("./containers/ChangeEmail"));



export default ({ childProps }) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={AsyncSignup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={AsyncNewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings"
      exact
      component={AsyncSettings}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/email"
      exact
      component={AsyncChangeEmail}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/password"
      exact
      component={AsyncChangePassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/reset"
      exact
      component={AsyncResetPassword}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
;