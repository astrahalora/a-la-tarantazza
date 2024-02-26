import { getQuantityInCart } from "../../js/getQuantityInCart";
import cartBow from "../../img/bow_3.png";
import "./CartProduct.css";

export default function CartProduct({ product, addProduct, removeProduct, removeAll, quantity }) {
    const productObj = product[0];

    return (
        <div className="cart-product">
            <div className="cp-details-1">
                <p>{productObj.name}</p>
                <img src={productObj.imageUrl} alt={productObj.name} className="cp-img" />
            </div>
            <div className="cart-bow-div">
                <img src={cartBow} alt="Cart Product Bow"
                className="cart-bow" />
            </div>
            <div className="cp-details-2">
            <p>${(productObj.price * productObj.quantity).toFixed(2)}</p>
                <div className="cp-actions">
                    <button
                        type="button"
                        onClick={removeProduct}
                    >-</button>
                    <p>
                    {quantity}
                    </p>
                    <button
                        type="button"
                        onClick={addProduct}
                    >+</button>
                </div>
                <div className="remove-btn-div">
                    <button
                        type="button"
                        className="base-btn"
                        onClick={removeAll}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}