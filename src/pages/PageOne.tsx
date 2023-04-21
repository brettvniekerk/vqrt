import React from "react";
import { PageLayout } from "../components";
import { Link } from "react-router-dom";
import { Cat } from "../images";
import constants from "../constants";

const PageOne: React.FC = () => (
  <PageLayout>
    <h1>Page One</h1>
    <br />
    <Link to="/page-two">go to Page Two</Link>
    <br />
    <img src={Cat} alt="Cat" />
    <br />
    <p>{constants.env.VITE_TEST_VAR}</p>
  </PageLayout>
);

export default PageOne;
