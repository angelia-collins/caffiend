import React from "react";
import {Form, FormGroup, Input} from "reactstrap";

const RoastInput = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input
          placeholder="Coffee Brand"
          type="select"
          name="select"
          id="exampleSelect"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default RoastInput;
