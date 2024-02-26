import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart, removeAllFromCart } from "../../redux/cartSlice";
import { getQuantityInCart } from "../../js/getQuantityInCart";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function Cart() {
    const productsInCart = useSelector(state => state.cart.products);
    const products = useSelector(state => state.productList.products);
    const dispatch = useDispatch();

    // need the amount of product from products for the add function
    const matchToProductInStock = (productInCart) => {
        return products.filter(product => product._id === productInCart._id)[0];
    }

    return (
        <div className="cart-frame">
            <h2>My Order</h2>
            <div className="order-elements">
                <div className="products-in-cart">
                    {productsInCart.length > 0 ? productsInCart.map((product, i) => (
                        <CartProduct key={i}
                            product={[product]}
                            addProduct={() => dispatch(addProductToCart(matchToProductInStock(product)))}
                            removeProduct={() => dispatch(removeProductFromCart(product))}
                            removeAll={() => dispatch(removeAllFromCart(product))}
                            quantity={getQuantityInCart(productsInCart, product)}/>
                    )) : (
                        <h3>No products in Cart</h3>
                    )}
                </div>
                <OrderDetails />
            </div>
        </div>
    )
}