import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const Searchbar = (searchfield, searchChange) => {
    return (
      <div>
          <div className = "bar">
        <InputGroup >
          <Input 
          type= 'search'
          placeholder="Search"
          onChange = {searchChange}
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