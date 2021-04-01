import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Label
   } from 'reactstrap';
  
  const AmountPurchasedInput = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
    return (
        <div>
          <Label style={{fontSize:"16px"}}> amount: </Label>
          <InputGroup>
            <Input placeholder= "enter wieght purchased" />
          </InputGroup>
          </div>
          );
}


export default AmountPurchasedInput;