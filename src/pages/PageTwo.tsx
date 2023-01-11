import React from "react";
import { PageLayout } from "../components";
import { Link } from "react-router-dom";

const PageTwo: React.FC = () => (
  <PageLayout>
    <h1>Page Two</h1>
    <br />
    <Link to="/">go to Page One</Link>
  </PageLayout>
);

export default PageTwo;
