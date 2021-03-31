import React from "react";
import { ButtonToggle } from "reactstrap";

function AddButton(props) {
  return (
    <div>
      <ButtonToggle style={{ backgroundColor: "#210202" }} color="primary" onClick={ props.handleBtnClick }>
        {" "}{props.text}{" "}
      </ButtonToggle>{' '}
    </div>
  );
}

export default AddButton;
