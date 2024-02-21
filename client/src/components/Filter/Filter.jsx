import { useRef } from "react";
import "./Filter.css";

export default function Filter({ allergens, filter, search }) {
    const selectElement = useRef();
    const inputElement = useRef();

    return (
        <div className="filter">
            <select 
                name="filter-out-allergen" 
                className="filter-out-allergen"
                onChange={() => filter(inputElement, selectElement)}
                ref={selectElement}
            >
                <option>-- See All --</option>
                {allergens.map((allergen, i) => (
                    <option key={i}>{allergen}</option>
                ))}
            </select>
            <input
                type="search"
                name="search"
                className="search"
                placeholder="Search..."
                ref={inputElement}
                onChange={() => search(inputElement)} 
            />
        </div>
    )
}