import React from "react";
import { ButtonToggle } from "reactstrap";

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <ButtonToggle color="primary">+ Add</ButtonToggle>{' '}
        </div>
    );
  }
}

export default AddButton;