import { Outlet, NavLink, useNavigate } from "react-router-dom";
import tazzaLogo from "../../img/tarantazza_logo.png";
import { useWindowDimensions } from "../../js/useWindowDimensions";

export default function Navbar() {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();

    const wideNav = ``;
    const hamburgerNav = ``;

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
                <NavLink to="/" className="nav-link">About</NavLink>
            </nav>
            <Outlet />
        </>
    )
}