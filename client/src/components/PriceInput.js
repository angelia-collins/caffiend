import React from "react";
import { InputGroup, Input, Label } from "reactstrap";

const PriceInput = (props) => {
  return (
    <div>
      <Label style={{ fontSize: "16px" }}> price: </Label>
      <InputGroup>
        <Input placeholder="enter purchase price" />
      </InputGroup>
    </div>
  );
};

export default PriceInput;
