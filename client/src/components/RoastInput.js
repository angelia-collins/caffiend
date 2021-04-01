import React from "react";
import {Form, FormGroup, Input, Label} from "reactstrap";
const axios = require('axios');
// TOOD import data as an api reciving data from SQL

const RoastInput = () => {
const data = axios.get('/coffee', {
  params: {
    roast_type: ""
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});  

  return (
    <Form>
      <Label style={{fontSize:"16px"}}> type of roast: </Label>
      <FormGroup>
        <Input
          type="select"
          name="select"
          id="exampleSelect"
        >
           {/* {data.map((info) => {
            <option>{...info}</option>
          })} */}
          <option select>select roast type</option>
          <option>other</option>
          <option>oree</option>
          <option>otrerearher</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default RoastInput;

