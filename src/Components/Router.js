import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router } from "react-router-dom";

const AppRouter = ({ isLoggedIn }) => (
  <Router></Router>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;