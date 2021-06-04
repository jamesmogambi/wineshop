import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ItemsPage from "../components/ItemsPage";
import CheckoutPage from "../components/CheckoutPage";
import NotFoundPage from "../components/NotFoundPage";
import PublicRoute from "./PublicRoute";
export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={ItemsPage} exact={true} />
        <PublicRoute path="/checkout" component={CheckoutPage} />
        {/* <PublicRoute
          path="/issues/:repoName/:repoOwner"
          component={IssuesPage}
        />
        <PublicRoute path="/issueDetails/:id" component={IssueDetailsPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
