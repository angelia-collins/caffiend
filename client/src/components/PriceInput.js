import React from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const PriceInput = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Price" onChange={ (e) => props.handlePrice(e.target.value) }/>
        <InputGroupAddon addonType="append">
          <Button style={{backgroundColor: "#f2e8da", color: "#210202", width: "100px"}}>USD</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default PriceInput;
  