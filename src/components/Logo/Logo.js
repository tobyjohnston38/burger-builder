import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <image src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
