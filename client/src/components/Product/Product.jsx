import cart from "../../img/shopping_cart.png";
import "./Product.css";

export default function Product( { product } ) {
    return (
        <div className="product">
            <div>
                <h3>{product[0].name}</h3>
                <button type="button" className="base-btn details">See Details</button>
                <div className="product-info">
                    <p>${product[0].amount > 0 ? product[0].price : "Unavailable"}</p>
                    <img src={cart} alt="Cart" className="buy-cart"/>
                </div>
            </div>
            <img src={product[0].imageUrl} alt={product[0].name} />
        </div>
    )
}