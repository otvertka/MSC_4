import React from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
