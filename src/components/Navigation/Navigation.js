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
  Button,
  DropdownItem } from 'reactstrap';
import { FaUserCircle, FaSignInAlt, FaChalkboardTeacher, FaDashcube, FaTachometerAlt, FaCog, FaSignOutAlt } from '../../../node_modules/react-icons/fa';


const Navigation = ({onRouteChange, isSignedIn}) => {
  if (!isSignedIn) {
    return (
      <div>
        <Navbar className="Navbar" color="light" light expand="md">
          <NavbarBrand className="NavbarBrand" href="">uniVResity</NavbarBrand>
            <Nav className="ml-auto" navbar>    
              <NavItem>
              <NavLink>
                <p style={{cursor:'pointer', marginTop:'5px'}} onClick={() => onRouteChange('register')}>Register</p>
                  </NavLink>                  
              </NavItem>
              <NavItem>
              <Button color="danger" style={{height:'40px', marginTop:'5px'}}><p style={{cursor:'pointer'}} onClick={() => onRouteChange('login')}><FaSignInAlt/> Sign in</p></Button>
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
                  <NavLink>
                <p style={{cursor:'pointer'}} onClick={() => onRouteChange('/createroom')}><FaChalkboardTeacher/> Create A New Session</p>
                  </NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FaUserCircle size={18} color={'dodgerblue'}/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FaTachometerAlt/> Dashboard
                  </DropdownItem>
                  <DropdownItem>
                    <FaCog/> Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <p onClick={() => onRouteChange('signout')}><FaSignOutAlt/> Sign out</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
        </Navbar>
        
    );
  }
}



  export default Navigation;