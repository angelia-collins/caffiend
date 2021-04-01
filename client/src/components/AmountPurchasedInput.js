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
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle type="select" style={{backgroundColor: "#f2e8da", color: "#210202", width:"100px"}} caret>
oz              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem select>Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          </div>
          );
}


export default AmountPurchasedInput;