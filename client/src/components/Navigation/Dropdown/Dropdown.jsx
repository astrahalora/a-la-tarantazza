import { useState } from "react";
import { NavLink } from "react-router-dom";
import Pizza from "../../../pages/Menu/Pizza/Pizza";
import Desserts from "../../../pages/Menu/Desserts/Desserts";
import Salads from "../../../pages/Menu/Salads/Salads";
import Drinks from "../../../pages/Menu/Drinks/Drinks";
import "./Dropdown.css";

export default function Dropdown () {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenMenu = () => setIsOpen(prev => !prev);

    return (
        <div>
            <h3>Dropdown</h3>
            <ul onClick={handleOpenMenu}
            className={isOpen ? "dropdown-menu clicked" : "dropdown-menu"}>
                <li>
                    <NavLink to="/pizza" onClick={() => setIsOpen(false)}>Pizza</NavLink>
                </li>
                <li>
                    <NavLink to="/desserts" onClick={() => setIsOpen(false)}>Desserts</NavLink>
                </li>
                <li>
                    <NavLink to="/salads" onClick={() => setIsOpen(false)}>Salads</NavLink>
                </li>
                <li>
                    <NavLink to="/drinks" onClick={() => setIsOpen(false)}>Drinks</NavLink>
                </li>
            </ul>
        </div>
    )
}