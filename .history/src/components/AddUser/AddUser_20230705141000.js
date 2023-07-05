import React from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      {/* <div className={classes.input}> */}
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      {/* </div> */}
      <Button />
    </form>
  );
};

export default AddUser;
