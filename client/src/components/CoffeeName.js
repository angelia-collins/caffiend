import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';
  
  const CoffeeName = (props) => {
    // const [name, setName] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
    // const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    return (
        <div>
          <InputGroup>
            <Input placeholder="Coffee Brand" onChange={ (e) => props.handleName(e.target.value) } />
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Kicking Horse</DropdownItem>
                {
                  props.coffees.map(c =>
                    <DropdownItem>{c}</DropdownItem>
                  )
                }
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          </div>
          );
}

export default CoffeeName;
