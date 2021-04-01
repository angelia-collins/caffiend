import React, { useState} from "react";
import { Input } from "reactstrap";

const SelectMonth = () => {
    const [backdrop, setBackdrop] = useState(true);

    const changeBackdrop = (e) => {
        let value = e.target.value;
        if (value !== "static") {
          value = JSON.parse(value);
        }
        setBackdrop(value);
      };
  return (
    <Input
      type="select"
      name="backdrop"
      id="backdrop"
      onChange={changeBackdrop}
    >
      <option value="january">January</option>
      <option value="feburary">February</option>
      <option value="march">March</option>
      <option value="april">April</option>
      <option value="may">May</option>
      <option value="june">June</option>
      <option value="july">July</option>
      <option value="august">Agust</option>
      <option value="september">September</option>
      <option value="october">October</option>
      <option value="november">November</option>
      <option value="december">December</option>
    </Input>
  );
};

export default SelectMonth;
