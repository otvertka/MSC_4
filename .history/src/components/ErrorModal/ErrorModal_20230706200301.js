import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>
          <title>{props.title}</title>
        </h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button> Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
