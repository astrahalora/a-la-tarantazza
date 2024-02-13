import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import tazzaLogo from "../../img/tazza_logo_4.png";
import menu from "../../img/menu.png";
import close from "../../img/close.png";
import arrowDown from "../../img/arrow_down.png";
import { useWindowDimensions } from "../../js/useWindowDimensions";
import "./Navbar.css";
import Dropdown from "./Dropdown/Dropdown";

export default function Navbar() {
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleOpenMenu = () => setIsOpen(prev => !prev);
    const closeMobileMenu = () => setIsOpen(false);
    const onMouseEnter = () => width < 960 ? setDropdown(false) : setDropdown(true);
    const onMouseLeave = () => setDropdown(false);

    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className="navbar-logo">
                    <img src={tazzaLogo} alt="A La Tarantazza Logo" />
                </NavLink>
                <div className="menu-icon" onClick={handleOpenMenu}>
                    <img src={isOpen ? close : menu} alt="Open or Close" id="hamburger-menu" />
                </div>
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>About</NavLink>
                    </li>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <NavLink to="/menu" className="nav-links" onClick={closeMobileMenu}>
                            Menu <img src={arrowDown} alt="Arrow Down" id="menu-arrow" />
                        </NavLink>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin" className="nav-links" onClick={closeMobileMenu}>
                            Admin
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/client" className="nav-links" onClick={closeMobileMenu}>
                            Client
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-links" onClick={closeMobileMenu}>Cart</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}