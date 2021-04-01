import React from "react";
import { Button } from "reactstrap";


function AddButton(props) {
  return (
    <div>
      <Button style={{ backgroundColor: "#210202" }} color="primary" onClick={ props.handleBtnClick }>
        {" "}{props.text}{" "}
      </Button>{' '}
    </div>
  );
}

export default AddButton;
