import React from "react";
import classes from "./Card.modules.css";

const Card = (props) => {
  return <div>{props.children}</div>; // обернёт содержимое между своими тегами
};

export default Card;
