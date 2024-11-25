import React from "react";
import {Login, SignUp, Dashboard} from "./admin/pages";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import isAdmin from "./utils/isAdminLoggedin";
import {AdminContextProvieder} from "./context/AdminContext"

function AdminApp() {
  const ProtectedRoute = ({children}) => {
    if (!isAdmin()) {
      return <Navigate to="/admin/login" replace />;
    }
    return children;
  };

  const PublicRoute = ({children}) => {
    if (isAdmin()) {
      return <Navigate to="/admin" replace />;
    }
    return children;
  };

  return (
    <div>
      <AdminContextProvieder>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
          <Route
            path="/admin/login"
            element={<PublicRoute><Login /></PublicRoute>}
          />
          <Route
            path="/admin/signup"
            element={<PublicRoute><SignUp /></PublicRoute>}/>
        </Routes>
      </BrowserRouter>
      </AdminContextProvieder>
    </div>
  );
}

export default AdminApp;
