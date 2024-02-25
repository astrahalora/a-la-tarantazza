import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../redux/cartSlice";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function Cart() {
    const productsInCart = useSelector(state => state.cart.products);

    return (
        <div className="cart-frame">
            <h2>My Order</h2>
            <div className="order-elements">
                <div className="products-in-cart">
                    {productsInCart.length > 0 ? productsInCart.map(product => (
                        <CartProduct key={product._id} product={[product]} />
                    )) : (
                        <h3>No products in Cart</h3>
                    )}
                </div>
                <OrderDetails />
            </div>
        </div>
    )
}