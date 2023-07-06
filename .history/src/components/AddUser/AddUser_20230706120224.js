import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card.js";

const AddUser = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addUserInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={addUserInputChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
