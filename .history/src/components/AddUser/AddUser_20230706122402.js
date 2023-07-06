import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card.js";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUserName(event.target.value);
    console.log(enteredUserName);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setIsValid(false);
      return;
    }
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
