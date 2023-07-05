import React from "react";
import classes from "E:MSC\05-starting-project_Adding_UserssrccomponentsCardCard.modules.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); // обернёт содержимое между своими тегами
};

export default Card;
