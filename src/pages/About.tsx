import React from "react";
import { PageLayout } from "../components";
import { Link } from "react-router-dom";

const About: React.FC = () => (
  <PageLayout>
    <h1>About</h1>
    <br />
    <Link to="/">go to Dashboard</Link>
  </PageLayout>
);

export default About;
