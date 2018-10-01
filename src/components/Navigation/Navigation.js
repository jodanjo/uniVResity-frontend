import React from 'react';
import {Link} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem } from 'reactstrap';
import { FaUserCircle, FaSignInAlt, FaChalkboardTeacher, FaTachometerAlt, FaCog, FaSignOutAlt } from '../../../node_modules/react-icons/fa';


const Navigation = ({onRouteChange, isSignedIn, name}) => {
  if (!isSignedIn) {
    return (
      <div>
        <Navbar className="Navbar" color="light" light expand="md">
          <Link to="/">
            <Navbar className="NavbarBrand" >uniVResity</Navbar>
          </Link>
            <Nav className="ml-auto" navbar>    
                  <NavItem>
              <Link to="/register">
                <Button style={{height:'40px', marginTop:'5px'}}><p>Register</p></Button>
              </Link>
              </NavItem>
              <Link to="/login">
              <Button color="danger" style={{height:'40px', marginTop:'5px'}}><p><FaSignInAlt/> Sign in</p></Button>
              </Link>
              </Nav>
            </Navbar>
      </div>
      );
      } else {
              return (
                <Navbar className="Navbar" color="light" light expand="md">
                  <Link to="/">
                    <Navbar className="NavbarBrand" >uniVResity</Navbar>
                  </Link>
                  <Nav className="ml-auto" navbar>
                  <Link to="/createstream">
                  <Button outline color="danger" style={{height:'40px', marginTop:'5px'}}><p><FaChalkboardTeacher/> Create A New Stream</p></Button>
                  </Link>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ marginTop: '15px'}} nav caret>
                  <FaUserCircle size={18} color={'dodgerblue'}/>{`${name}`}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/dashboard"><p><FaTachometerAlt/> Dashboard</p> </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="settings"><p><FaCog/> Settings</p> </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="signout"><p><FaSignOutAlt/> Sign out</p></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
        </Navbar>
        
    );
  }
}



  export default Navigation;