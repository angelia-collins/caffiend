import React from "react";
import { Input, Label } from "reactstrap";
// TOOD import data as an api reciving data from SQL

const SelectUnitInput = () => {
  return (
    <div>
      <Label style={{ fontSize: "16px" }}> currency: </Label>
      <Input type="select" name="select" id="exampleSelect">
        <option selected disabled>usd</option>
      </Input>
    </div>
  );
};

export default SelectUnitInput;

