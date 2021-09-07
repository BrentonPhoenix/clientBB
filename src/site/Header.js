import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Router, Route, Link, Switch } from 'react-router-dom'
import MonsterIndex from "../monsters/MonsterIndex"


const OurMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    

    return(
        <header>
        <Navbar className="header">
            <h4>Team 2 - Dungeons & Dragons Monster App</h4>
            <NavbarBrand>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    App Menu
                </DropdownToggle>
            <DropdownMenu right positionFixed={true}>
                <DropdownItem header>Monsters</DropdownItem>
                <DropdownItem href="../monsters/MonsterCreate">Create A Monster</DropdownItem>
                <DropdownItem href="../monsters/MonsterEdit">View/Edit Your Monsters</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>User</DropdownItem>
                <DropdownItem href="../auth/Login">Login/Register</DropdownItem>
                {/* <DropdownItem href="../auth/Register">Register</DropdownItem> */}
                <DropdownItem onClick={props.clickLogout}>Logout</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            </NavbarBrand>
        </Navbar>
        </header>
    );
};

export default OurMenu
