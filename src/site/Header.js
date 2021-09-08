import React, { useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";



const OurMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
 
   let flipView = () => props.setCreateEdit(!props.createEdit)

   
    return(
        <header>
        <Navbar className="header">
            <h4>Team 2 - Dungeons & Dragons Monster App</h4>
            <NavbarBrand>
                <Button className="navButton" onClick={flipView} >Create/Edit A Monster</Button>
                <Button className="navButton" onClick={props.clickLogout}>Logout</Button>
            
            </NavbarBrand>
        </Navbar>
        </header>
    );
};

export default OurMenu;




// ^ Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
// import { withRouter } from 'react-router-dom';

// import MonsterIndex from "../monsters/MonsterIndex"

  // createEdit={createEdit} setCreateEdit={setCreateEdit}

 /* <Button className="navButton">View/Edit Monsters</Button> */
                /* <Button className="navButton">Login/Register</Button> */


                /* Commented out code for our dropdown menu with links to each functional component.

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
            </Dropdown> */