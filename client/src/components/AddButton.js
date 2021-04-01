import React from "react";
import { Button } from "reactstrap";


const AddButton = (props) => {



  return (
    <Button style={{ backgroundColor: "#210202" }}>
      {props.text}
    </Button>
  );
};

export default AddButton;
