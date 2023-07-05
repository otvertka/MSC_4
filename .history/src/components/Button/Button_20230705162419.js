import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button type="submit" className={classes.button}>
      Add User
    </button>
  );
};

export default Button;
