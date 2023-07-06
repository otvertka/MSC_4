import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div cssClass={classes.backdrop} />
      <Card cssClass={classes.modal}>
        <header cssClass={classes.header}>
          <h2>
            <title>{props.title}</title>
          </h2>
        </header>
        <div cssClass={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer cssClass={classes.actions}>
          <Button> Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
