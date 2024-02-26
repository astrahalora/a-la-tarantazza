import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

    useEffect(() => {
        if(productsInCart.length > 0) {
            localStorage.setItem("voucher", JSON.stringify(voucher));
        } else {
            localStorage.setItem("voucher", JSON.stringify(""));
        }
    }, [voucher, productsInCart]);

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
            <Summary />
            <Voucher addVoucher={handleAddVoucher} voucher={voucher}/>
            <OrderForm handleSubmit={handleSubmitForm} />
        </div>
    )
}