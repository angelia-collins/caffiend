import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';
  
  const AmountInput = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
    return (
        <div>
          <InputGroup>
            <Input placeholder="Amount Purchased" onChange={ (e) => props.handleAmt(e.target.value) }/>
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>
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


export default AmountInput;