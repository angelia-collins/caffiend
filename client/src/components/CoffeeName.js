import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Label
   } from 'reactstrap';
  
  const CoffeeName = (props) => {
    const [name, setName] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const handleChange = event => {
      console.log(event);
      //setName(event);
      //setName(event);
    }

    return (
        <div>
          <InputGroup>
            { (props.from==="inventory") && (
              <Input placeholder="Coffee Brand" onChange={ (e) => props.handleName(e.target.value) }/>)
            }
            { (props.from==="intake") && (
              <FormGroup>
                <Input type="select" name="select" id="selectBrand" onChange={ (e) => props.handleName(e.target.value) }>
                  <option>Select Coffee Brand...</option>
                  {
                    props.coffees.map(c =>
                      <option key={c} value={c} onClick={ e => handleChange(e) }>{c}</option>
                    )
                  }
                </Input>
              </FormGroup>
              )
            }
          </InputGroup>
          </div>
          );
}

export default CoffeeName;
