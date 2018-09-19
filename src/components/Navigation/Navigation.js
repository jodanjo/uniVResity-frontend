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
import { FaUserCircle, FaSignInAlt, FaChalkboardTeacher, FaTachometerAlt, FaCog, FaSignOutAlt } from '../../../node_modules/react-icons/fa';


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
                  <Button outline color="danger" style={{height:'40px', marginTop:'5px'}}><p style={{cursor:'pointer'}} onClick={() => onRouteChange('createstream')}><FaChalkboardTeacher/> Create A New Stream</p></Button>
                  </NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ marginTop: '15px'}} nav caret>
                  <FaUserCircle size={18} color={'dodgerblue'}/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <p onClick={() => onRouteChange('dashboard')}><FaTachometerAlt/> Dashboard</p>
                  </DropdownItem>
                  <DropdownItem>
                    <p onClick={() => onRouteChange('settings')}><FaCog/> Settings</p>
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