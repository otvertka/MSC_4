import React from "react";
import classes from "./AddUser.module.css";

const AddUser = () => {
  return (
    <>
      <form>
        <div className="input">
          <label>Username</label>
          <input type="text" />
          <label>Age (Years)</label>
          <input type="number" />
        </div>
        <button> Add User</button>
      </form>
    </>
  );
};

export default AddUser;
