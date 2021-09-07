import React, { useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
// ^ Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
// import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import MonsterIndex from "../monsters/MonsterIndex"


const OurMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => setDropdownOpen(prevState => !prevState);
    
    // const setClassNames = num => {
    //     const classArr = ["m-item"];
    //     if (openMenu) classArr.push(`open-${num}`)
    //     return classArr.join(' ')
    

    // const pushToRoute = route => {
    //     props.history.push(route)
    //     setDropdownOpen(false)
    // }

    return(
        <header>
        <Navbar className="header">
            <h4>Team 2 - Dungeons & Dragons Monster App</h4>
            <NavbarBrand>
                <Button className="navButton">Create A Monster</Button>
                <Button className="navButton">View/Edit Monsters</Button>
                <Button className="navButton">Login/Register</Button>
                <Button className="navButton" onClick={props.clickLogout}>Logout</Button>
            {/* Commented out code for our dropdown menu with links to each functional component.

                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    App Menu
                </DropdownToggle>
            <DropdownMenu right positionFixed={true}>
                <DropdownItem header>Monsters</DropdownItem>
                <DropdownItem onClick={pushToRoute("/create")}>Create A Monster</DropdownItem>
                <DropdownItem onClick={pushToRoute("/edit")}>View/Edit Your Monsters</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>User</DropdownItem>

                <DropdownItem onClick={pushToRoute("/login")}>Login/Register</DropdownItem>

                <DropdownItem onClick={props.clickLogout}>Logout</DropdownItem>
            </DropdownMenu>
            </Dropdown> */}
            </NavbarBrand>
        </Navbar>
        </header>
    );
};

export default OurMenu;