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
        <div className="dropdown-container">
            <ul onClick={handleOpenMenu}
                className={isOpen ? "dropdown-menu clicked" : "dropdown-menu"}>
                <li>
                    <NavLink to="/pizza" 
                             onClick={() => setIsOpen(false)} 
                             className="dropdown-link">
                    Pizza
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/desserts" onClick={() => setIsOpen(false)} className="dropdown-link">Desserts</NavLink>
                </li>
                <li>
                    <NavLink to="/salads" onClick={() => setIsOpen(false)} className="dropdown-link">Salads</NavLink>
                </li>
                <li>
                    <NavLink to="/drinks" onClick={() => setIsOpen(false)} className="dropdown-link">Drinks</NavLink>
                </li>
            </ul>
        </div>
    )
}