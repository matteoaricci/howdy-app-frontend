import React from "react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Login />
      <Logout />
    </div>
  );
};

export default Dashboard;
