import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = ({ isAuthenticated, user, isAdmin }) => {
  if (isAuthenticated === false) {
    return false;
  }
  if (isAdmin === true && user.role !== "admin") {
    return false;
  }

  return true;
};

const ProtectedRoute = ({ isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const auth = useAuth({ isAuthenticated, user, isAdmin });
  return (
    <Fragment>
      {loading === false && (auth ? <Outlet /> : <Navigate to="/login" />)}
    </Fragment>
  );
};

// return isAuthenticated === false ? (
//   isAdmin === true && user.role !== "admin" ? (
//     <Navigate to="/login" />
//   ) : (
//     <Outlet />
//   )
// ) : (
//   <Outlet />
// );

/*

const ProtectedRoute = ({ isAdmin, element: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Navigate to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};
*/
export default ProtectedRoute;

/*
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
    }
*/
