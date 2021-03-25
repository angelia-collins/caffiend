import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';
  
  const CoffeeName = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
    // const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    return (
        <div>
          <InputGroup>
            <Input />
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>
                {/* Previous */}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
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


export default CoffeeName;