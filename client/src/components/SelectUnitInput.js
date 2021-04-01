import React from "react";
import { InputGroup, Input, Label } from "reactstrap";
// TOOD import data as an api reciving data from SQL

const SelectUnitInput = () => {
  return (
    <div>
      <Label style={{ fontSize: "16px" }}> unit: </Label>
      <Input type="select" name="select" id="exampleSelect">
        <option select>choose</option>
        <option>g</option>
        <option>oz</option>
        <option>lb</option>
      </Input>
    </div>
  );
};

export default SelectUnitInput;

{/* <div class="col-auto">
  <label class="visually-hidden" for="autoSizingSelect">
    Preference
  </label>
</div>; */}
