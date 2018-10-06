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


const Navigation = ({ isSignedIn, name}) => {
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
                <Button outline color ="secondary" style={{height:'40px', marginRight: '5px'}}><p>Register</p></Button>
              </Link>
              </NavItem>
              <Link to="/login">
              <Button color="danger" style={{height:'40px'}}><p><FaSignInAlt/> Sign in</p></Button>
              </Link>
              </Nav>
            </Navbar>
      </div>
      );
      } else {
              return (
                <Navbar className="Navbar" color="light" light expand="md">
                  <Link to="/">
                    <Navbar className="NavbarBrand">uniVResity</Navbar>
                  </Link>
                  <Nav className="ml-auto" navbar>
                  <Link to="/createstream">
                  <Button outline color="danger" style={{height:'40px', marginTop:'25px'}}><p><FaChalkboardTeacher/> Create A New Stream</p></Button>
                  </Link>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ marginTop: '15px'}} nav caret>
                  <FaUserCircle size={18} style ={{marginTop:'15px'}} color={'dodgerblue'}/> {`${name}`}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to='/dashboard' style={{color:'black', textDecoration:'none'}}><p><FaTachometerAlt/> Dashboard</p> </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="settings" style={{color:'black', textDecoration:'none'}}><p><FaCog/> Settings</p> </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem >
                    <Link to="/" style={{color:'black', textDecoration:'none'}}><p onClick={isSignedIn = 'false'}><FaSignOutAlt/> Sign out</p></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
        </Navbar>
        
    );
  }
}



  export default Navigation;