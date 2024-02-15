import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import pizza from "../../img/pizza.webp";
import "./Menu.css";

export default function Menu() {
    // const { productList } = useSelector(state => state.products);
    const navigate = useNavigate();

    return (
        <div className="main-menu">
            {/* <h2>{productList === null ? "Null" : "Products"}</h2> */}
            <div className="pizza-info infos" onClick={() => navigate("/pizza")}>
                <img src={pizza} alt="Pizza"/>
                <h2>Pizza</h2>
            </div>
            <div className="desserts-info infos" onClick={() => navigate("/desserts")}>
                <h2>Desserts</h2>
            </div>
            <div className="salads-info infos" onClick={() => navigate("/salads")}>
                <h2>Salads</h2>
            </div>
            <div className="drinks-info infos" onClick={() => navigate("/drinks")}>
                <h2>Drinks</h2>
            </div>
        </div>
    )
}