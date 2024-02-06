import { Outlet, NavLink, useNavigate } from "react-router-dom";
import tazzaLogo from "../../img/tarantazza_logo.png";
import { useWindowDimensions } from "../../js/useWindowDimensions";

export default function Navigation() {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();

    const wideNav = ``;
    const hamburgerNav = ``;

    return (
        <>
            {/* {width > 600 ? wideNav : hamburgerNav} */}
            <nav>
                <ul>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Careers</li>
                    {/* if something Admin */}
                    {/* if something Client */}
                    <li>Cart</li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}