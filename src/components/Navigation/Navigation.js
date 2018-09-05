import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Searchbar from '../Searchbar/Searchbar';
import { FaUserAlt } from '../../../node_modules/react-icons/fa';




const Navigation = ({onRouteChange, isSignedIn}) => {
  if (!isSignedIn) {
    return (
      <div>
        <Navbar className="Navbar" color="light" light expand="md">
          <NavbarBrand className="NavbarBrand" href="">uniVResity</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <Searchbar searchChange={this.onSearchChange}/>     
              <NavItem>
                <NavLink>
                <p style={{cursor:'pointer'}} onClick={() => onRouteChange('login')}>Sign in</p>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <p style={{cursor:'pointer'}} onClick={() => onRouteChange('register')}>Register</p>
                  </NavLink>
              </NavItem>
              </Nav>
            </Navbar>
      </div>
      );
      } else {
              return (
                <Navbar className="Navbar" color="light" light expand="md">
                <NavbarBrand className="NavbarBrand" href="">uniVResity</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                  <Searchbar searchChange={this.onSearchChange}/> 
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FaUserAlt/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <p onClick={() => onRouteChange('signout')}>Sign out</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
        </Navbar>
        
    );
  }
}



  export default Navigation;
