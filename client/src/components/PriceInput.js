import React from "react";
import { InputGroup, Input, InputGroupAddon, Button, Label } from "reactstrap";

const PriceInput = () => {
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
