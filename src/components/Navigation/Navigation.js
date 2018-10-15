import React from 'react';
import {Link} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem } from 'reactstrap';
import { FaSignInAlt, FaChalkboardTeacher, FaTachometerAlt, FaCog, FaSignOutAlt } from '../../../node_modules/react-icons/fa';

function logout(event) {
  event.preventDefault(); // prevent page transition
  fetch('http://localhost:3000/logout', { method: 'POST' }).then(() =>
    window.location.reload() // stay at the same url
  )
}


const Navigation = ({ isSignedIn, name, photo }) => {
  if (!isSignedIn) {
    return (
      <div>
        <Navbar className="Navbar" color="white" light expand="md">
          <Link to="/">
            <Navbar>
              <img src="images/logo.jpg" height="55" width="185" alt="uniVresity" />
            </Navbar>
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
                <Navbar className="Navbar" color="white" light expand="md">
                  <Link to="/">
                  <img src="images/logo.jpg" height="55" width="185" alt="uniVresity" />
                  </Link>
                  <Nav className="ml-auto" navbar>
                  <Link to="/createstream">
                  <Button outline color="danger" style={{height:'40px', marginTop:'25px'}}><p><FaChalkboardTeacher/> Create A New Stream</p></Button>
                  </Link>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ marginTop: '15px'}} nav caret>
                <img alt="user profile" className='circle' src={`http://localhost:3000/photos/${photo}`} 
                height="42" width="42"/>  {`${name}`}
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
                  <Link to="/logout" style={{color:'black', textDecoration:'none'}}><p onClick={logout}><FaSignOutAlt/> Sign out</p></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
        </Navbar>
        
    );
  }
}



  export default Navigation;