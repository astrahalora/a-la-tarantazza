import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateItemsCost, calculateDiscountAmount, calculateShippingCost, calculateTotalCost } from "../../js/calculating";
import OrderForm from "./OrderForm/OrderForm";
import Voucher from "./Voucher/Voucher";
import "./OrderDetails.css";
import Summary from "./Summary/Summary";

const expectedVoucher = "CELEBRATE20";

export default function OrderDetails() {
    const productsInCart = useSelector(state => state.cart.products);
    const [voucher, setVoucher] = useState(() => {
        const storedVoucher = localStorage.getItem("voucher");
        return storedVoucher ? JSON.parse(storedVoucher) : "";
    });
    const totalProductsCost = calculateItemsCost(productsInCart);
    const shippingCost = calculateShippingCost(productsInCart, totalProductsCost);
    const discounts = calculateDiscountAmount(totalProductsCost);
    const totalCost = calculateTotalCost(totalProductsCost, shippingCost, discounts);

    useEffect(() => {
        if(productsInCart.length > 0) {
            localStorage.setItem("voucher", JSON.stringify(voucher));
        } else {
            localStorage.setItem("voucher", JSON.stringify(""));
        }
    }, [voucher]);
    

    const calculateTotalOrderCost = () => {


    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
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