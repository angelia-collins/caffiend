import React from "react";
import { InputGroup, Input, InputGroupAddon, Button, Label } from "reactstrap";

const PriceInput = () => {
  return (
    <div>
      <Label style={{ fontSize: "16px" }}> price: </Label>
      <InputGroup>
        <Input placeholder="enter purchsae price" />
        <InputGroupAddon addonType="append">
          <Button
            style={{
              backgroundColor: "#f2e8da",
              color: "#210202",
              width: "100px",
            }}
          >
            USD
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default PriceInput;
