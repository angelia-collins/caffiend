import React from "react";
import { InputGroup, Input } from "reactstrap";

const CoffeeName = (props) => {
  return (
    <div>
      <InputGroup> {}
        {/* <Input placeholder="coffee brand"/> */}
        <Input type="select">
          <option>coffee brand</option>
        </Input>
      </InputGroup>
    </div>
  );
};

export default CoffeeName;
