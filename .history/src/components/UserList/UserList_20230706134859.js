import React from "react";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
  <ul>
     {props.users.map((user)) => (
      <li>
        {user.name} ({user.age} years old) 
        </li>
     ))}
  </ul>
};

export default UserList;
