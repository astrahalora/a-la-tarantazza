import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateItemsCost, calculateDiscountAmount, calculateShippingCost, calculateTotalCost } from "../../js/calculating";
import { fetchProducts } from "../../redux/productsSlice";
import { postContent } from "../../js/postContent";
import { patchContent } from "../../js/patchContent";
import { productsUrl } from "../../js/endpoints";
import { clearCart } from "../../redux/cartSlice";
import { ordersUrl } from "../../js/endpoints";
import "./OrderDetails.css";
import OrderForm from "./OrderForm/OrderForm";
import Voucher from "./Voucher/Voucher";
import Summary from "./Summary/Summary";

const expectedVoucher = "CELEBRATE20";

export default function OrderDetails() {
    const productsInCart = useSelector(state => state.cart.products);
    const products = useSelector(state => state.productList.products);
    const [voucher, setVoucher] = useState(() => {
        const storedVoucher = localStorage.getItem("voucher");
        return storedVoucher ? JSON.parse(storedVoucher) : "";
    });
    const totalProductsCost = calculateItemsCost(productsInCart);
    const shippingCost = calculateShippingCost(productsInCart, totalProductsCost);
    const discounts = calculateDiscountAmount(totalProductsCost, voucher);
    const totalCost = calculateTotalCost(totalProductsCost, shippingCost, discounts);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(productsInCart.length > 0) {
            localStorage.setItem("voucher", JSON.stringify(voucher));
        } else {
            setVoucher("");
            localStorage.setItem("voucher", JSON.stringify(""));
        }
    }, [voucher]);

    const matchToProductInStock = (productInCart) => {
        return products.filter(product => product._id === productInCart._id)[0];
    }

    const handleSubmitForm = (e, nameInput, addressInput, emailInput) => {
        e.preventDefault();

        const order = {
            client: {
                name: nameInput.current.value,
                email: emailInput.current.value,
                address: addressInput.current.value
            },
            products: productsInCart,
            totalCost: totalCost
        }

        postContent(order, ordersUrl)
        .then(() => {
            // Use map to create an array of promises
            const patchPromises = productsInCart.map((product) => {
                return patchContent(productsUrl, product._id, {
                    amount: matchToProductInStock(product).amount - product.quantity
                });
            });
    
            // Wait for all patch promises to resolve
            return Promise.all(patchPromises);
        })
        .then(() => {
            dispatch(clearCart());
            setVoucher("");
            localStorage.setItem("voucher", JSON.stringify(""));
            
            // Fetch products and wait for it to complete before navigating
            return dispatch(fetchProducts());
        })
        .then(() => {
            navigate("/order-complete");
        })
        .catch((error) => {
            // Handle errors here
            console.error('Error:', error);
        });
       
    }

    const handleAddVoucher = (input) => {
        const chosenVoucher = input.current.value;
        if(productsInCart.length > 0 && chosenVoucher === expectedVoucher) {
            setVoucher(chosenVoucher);
        }
        input.current.value = "";
    }

    return (
        <div className="order-details">
            <Summary 
                productsTotal={totalProductsCost}
                shipping={shippingCost}
                discount={discounts}
                total={totalCost} />
            <Voucher addVoucher={handleAddVoucher} voucher={voucher}/>
            <OrderForm handleSubmit={handleSubmitForm} />
        </div>
    )
}