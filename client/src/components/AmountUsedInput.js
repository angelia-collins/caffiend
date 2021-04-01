import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Label
   } from 'reactstrap';
  
  const AmountUSedInput = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
    return (
        <div>
          <Label style={{fontSize:"16px"}}> amount: </Label>
          <InputGroup>
            <Input placeholder= "enter serving amount" />
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle style={{backgroundColor: "#f2e8da", color: "#210202", width:"100px"}} caret>
oz              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          </div>
          );
}


export default AmountUSedInput;