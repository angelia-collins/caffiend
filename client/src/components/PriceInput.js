import React from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const PriceInput = () => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="purchased amount" />
        <InputGroupAddon addonType="append">
          <Button color="secondary">USD</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default PriceInput;
  