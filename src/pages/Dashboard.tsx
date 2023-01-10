import React from "react";
import { PageLayout } from "../components";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => (
  <PageLayout>
    <h1>Dashboard</h1>
    <br />
    <Link to="/about">go to About</Link>
  </PageLayout>
);

export default Dashboard;
