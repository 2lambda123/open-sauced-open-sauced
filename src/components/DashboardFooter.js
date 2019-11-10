import React from "react";
import DashboardFooter from "../styles/Footer";
import {sauced} from "../icons";

function Footer() {
  return (
    <DashboardFooter>
      <img alt="sauced logo" src={sauced} />
    </DashboardFooter>
  );
}

export default Footer;
