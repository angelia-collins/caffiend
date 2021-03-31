import React from "react";
import { ButtonToggle } from "reactstrap";

const AddButton = (props) => {
  return (
    <ButtonToggle style={{ backgroundColor: "#210202" }}>
      {" "}
      {props.text}{" "}
    </ButtonToggle>
  );
};

export default AddButton;
