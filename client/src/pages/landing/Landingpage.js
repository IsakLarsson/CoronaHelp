import React from "react";
import { withRouter } from "react-router-dom";
import Couch from "./couch.svg";
import "./index.scss";

const Landingpage = (props) => {
  const goTo = (loc) => {
    props.history.push(`/${loc}`);
  };

  return (
    <div className="landing-page">
      <h1>LandingPage</h1>
      <object data={Couch} />
      <button onClick={() => goTo("signin")}>Login</button>
    </div>
  );
};

export default withRouter(Landingpage);
