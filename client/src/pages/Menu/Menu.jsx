import { useSelector } from "react-redux";
import "./Menu.css";

export default function Menu() {
    const { productList } = useSelector(state => state.products);

    return (
        <div>
            <h2>{productList === null ? "Null" : "Products"}</h2>
        </div>
    )
}