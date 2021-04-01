import React from "react";
import { InputGroup, Input, Label } from "reactstrap";
// TOOD import data as an api reciving data from SQL

const CoffeeName = (props) => {
  return (
    <div>
      <Label style={{fontSize:"16px"}}> coffee brand: </Label>
      <InputGroup> {}
        <Input type="select" placeholder="coffee brand">
          {/* {data.map((info) => {
            <option>{...info}</option>
          })} */}
          <option select>select coffee brand</option>
          <option>other</option>
        </Input>
      </InputGroup>
    </div>
  );
};

export default CoffeeName;
