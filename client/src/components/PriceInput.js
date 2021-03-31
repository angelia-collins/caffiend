import React from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const PriceInput = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Purchased amount" onChange={ (e) => props.handlePrice(e.target.value) }/>
        <InputGroupAddon addonType="append">
          <Button color="secondary">USD</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default PriceInput;
  