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

    // Sort products by quantity, with products having quantity 0 appearing first
    const sortedProductsInCart = [...productsInCart].sort((a, b) => {
        const quantityA = getQuantityInCart(productsInCart, a);
        const quantityB = getQuantityInCart(productsInCart, b);
        // Products with quantity 0 should appear first
        if (quantityA === 0 && quantityB !== 0) return -1;
        if (quantityA !== 0 && quantityB === 0) return 1;
        // For products with non-zero quantities, maintain their original order
        return 0;
    });

    const matchToProductInStock = (productInCart) => {
        return products.filter(product => product._id === productInCart._id)[0];
    }

    return (
        <div className="cart-frame">
            <h2>My Order</h2>
            <div className="order-elements">
                <div className="products-in-cart">
                    {sortedProductsInCart.length > 0 ? sortedProductsInCart.map((product, i) => (
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
