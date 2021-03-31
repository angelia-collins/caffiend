import React from "react";
import { ButtonToggle } from "reactstrap";

function AddButton(props) {
  return (
    <div>
      <ButtonToggle color="primary" onClick={ props.handleBtnClick }>+ Add</ButtonToggle>{' '}
    </div>
  );
}

export default AddButton;