import { useSelector } from "react-redux";
import cart from "../../img/shopping_cart.png";
import unavailableCart from "../../img/shopping_cart_unavailable.png";
import "./Product.css";

export default function Product({ product, showDetails, addToCart }) {
    const productsInCart = useSelector(state => state.cart.products);

    const productAmountGreaterThanProductQuantity = () => {
        const cartProduct = productsInCart.filter(item => item.name === product[0].name);
        if(cartProduct[0]) {
            return product[0].amount > cartProduct[0].quantity;
        }
        return true;
    }

    return (
        <div className="product">
            <div>
                <h3>{product[0].name}</h3>
                <button type="button" className="base-btn details"
                    onClick={showDetails}>
                    See Details
                </button>
                <div className="product-info">
                    <p className="price">
                        {product[0].amount > 0 ? `$` + product[0].price.toFixed(2) : "Unavailable"}
                    </p>
                    {product[0].amount > 0 && productAmountGreaterThanProductQuantity() ? (
                        <img src={cart} alt="Cart" className="buy-cart" onClick={addToCart} />
                    ) : (
                        <img src={unavailableCart} alt="Cart" className="unavailable-cart" />
                    )}
                </div>
            </div>
            <img src={product[0].imageUrl} alt={product[0].name} />
        </div>
    )
}