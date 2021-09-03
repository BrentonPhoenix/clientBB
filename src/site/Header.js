import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


const OurMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    

    return(
        <Navbar>
            <h4>Team 2 - Dungeons & Dragons Monster App</h4>
            <NavbarBrand>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    App Menu
                </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem header>Monsters</DropdownItem>
                <DropdownItem>Create A Monster</DropdownItem>
                <DropdownItem>View/Edit Your Monsters</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>User</DropdownItem>
                <DropdownItem>Login/Register</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            </NavbarBrand>
        </Navbar>
    );
};

export default OurMenu
