import React from "react";
import { PageLayout } from "../components";
import { Link } from "react-router-dom";

const PageOne: React.FC = () => (
  <PageLayout>
    <h1>Page One</h1>
    <br />
    <Link to="/page-two">go to Page Two</Link>
  </PageLayout>
);

export default PageOne;
