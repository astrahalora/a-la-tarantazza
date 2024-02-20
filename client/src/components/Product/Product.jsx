import cart from "../../img/shopping_cart.png";
import unavailableCart from "../../img/shopping_cart_unavailable.png";
import "./Product.css";

export default function Product({ product, onClick }) {
    return (
        <div className="product">
            <div>
                <h3>{product[0].name}</h3>
                <button type="button" className="base-btn details"
                    onClick={onClick}>
                    See Details
                </button>
                <div className="product-info">
                    <p className="price">
                        {product[0].amount > 0 ? `$` + product[0].price : "Unavailable"}
                    </p>
                    {product[0].amount > 0 ? (
                        <img src={cart} alt="Cart" className="buy-cart" />
                    ) : (
                        <img src={unavailableCart} alt="Cart" className="unavailable-cart" />
                    )}
                </div>
            </div>
            <img src={product[0].imageUrl} alt={product[0].name} />
        </div>
    )
}