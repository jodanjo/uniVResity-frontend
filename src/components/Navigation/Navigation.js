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
  NavbarToggler, 
  Collapse,
  NavbarBrand,
  DropdownItem } from 'reactstrap';
import { FaSignInAlt, FaChalkboardTeacher, FaTachometerAlt, FaCog, FaSignOutAlt } from '../../../node_modules/react-icons/fa';

function logout(event) {
  event.preventDefault(); // prevent page transition
  fetch('https://fierce-fortress-43881.herokuapp.com/logout', { method: 'POST' }).then(() =>
    window.location.reload() // stay at the same url
  )
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

const  { isSignedIn, name, photo } = this.props;
  if (!isSignedIn) {
    return (
      <div>
        <Navbar className="Navbar" color="white" light expand="md">
        <Link to="/">
            <NavbarBrand>
              <img src="images/logo.JPG" height="55" width="185" alt="uniVresity" />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar>
                  <NavItem>
              <Link to="/register">
                <Button outline color ="secondary" style={{height:'40px', marginRight: '5px', marginBottom:'5px'}}><p>Register</p></Button>
              </Link>
              </NavItem>
              <NavItem>
              <Link to="/login">
              <Button color="danger" style={{height:'40px'}}><p><FaSignInAlt/> Sign in</p></Button>
              </Link>
              </NavItem>
              </Nav>
              </Collapse>
            </Navbar>
      </div>
      );
      } else {
              return (
                <Navbar className="Navbar" color="white" light expand="md">
                <NavbarBrand>
                  <Link to="/">
                  <img src="images/logo.jpg" height="55" width="185" alt="uniVresity" />
                  </Link>
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggle} className="mr-2"/>
                  <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                  <Link to="/createstream">
                  <Button outline color="danger" style={{height:'40px', marginTop:'25px'}}><p><FaChalkboardTeacher/> Create A New Stream</p></Button>
                  </Link>
                  </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ marginTop: '15px'}} nav caret>
                <img alt="user profile" className='circle' src={`https://fierce-fortress-43881.herokuapp.com/photos/${photo}`} 
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
              </Collapse>
        </Navbar>
        
    );
  }
}
}