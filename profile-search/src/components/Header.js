// import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

// export default function Header() {
//     return (
//         <div>
//  <Navbar bg="" expand="lg">
//   <Navbar.Brand href="#home">Nitay</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#">Find Jobs</Nav.Link>
//       <Nav.Link href="#">Company Reviews</Nav.Link>
//       <Nav.Link href="#">Find salaries</Nav.Link>
     
//     </Nav>
    
//   </Navbar.Collapse>
// </Navbar>
//         </div>
//     )
// }




import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
// import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Rewa</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
               
            </nav>
        )
    }
}

export default Navbar
