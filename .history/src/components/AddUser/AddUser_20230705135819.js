import React from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

const AddUser = () => {
  return (
    <>
      <form>
        <div className={classes.input}>
          <label>Username</label>
          <input type="text" />
          <label>Age (Years)</label>
          <input type="number" />
        </div>
        <Button />
      </form>
    </>
  );
};

export default AddUser;
