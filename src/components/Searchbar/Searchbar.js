import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const Searchbar = (props) => {
    return (
      <div>
          <div className = "bar">
        <InputGroup >
          <Input 
          placeholder="Search"
          />
          <InputGroupAddon addonType="append">
            <Button color="primary"><FaSearch /></Button>
          </InputGroupAddon>
        </InputGroup>
    </div>
    </div>
    );
  };
  
  export default Searchbar;