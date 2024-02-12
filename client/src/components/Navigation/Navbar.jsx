import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import tazzaLogo from "../../img/tazza_logo.png";
import menu from "../../img/menu.png";
import close from "../../img/close.png";
import { useWindowDimensions } from "../../js/useWindowDimensions";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    // const { width } = useWindowDimensions();

    // const wideNav = ``;
    // const hamburgerNav = ``;
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => setIsOpen(prev => !prev);

    return (
        <>
            {/* {width > 600 ? wideNav : hamburgerNav} */}
            {/* <nav>
                <ul>
                    <img src={tazzaLogo} alt="A La Tarantazza Logo"/>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Careers</li> */}
                    {/* if something Admin */}
                    {/* if something Client */}
                    {/* if not something Sign Up*/}
                    {/* if not something Log In*/}
                    {/* <li>Cart</li>
                </ul> */}
            {/* </nav> */}
            <nav className="navbar">
                <NavLink to="/" className="navbar-logo"> 
                    <img src={tazzaLogo} alt="A La Tarantazza Logo"/>
                </NavLink>
                <div className="menu-icon" onClick={handleOpenMenu}>
                    <img src={isOpen ? menu : close} alt="Open or Close" />

                </div>
                <NavLink to="/" className="nav-link">About</NavLink>

            </nav>
            <Outlet />
        </>
    )
}