import { useSelector } from "react-redux";
import OrderForm from "./OrderForm/OrderForm";
import Voucher from "./Voucher/Voucher";
import "./OrderDetails.css";

export default function OrderDetails() {
    const productsInCart = useSelector(state => state.cart.products);

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="order-details">
            <div className="order-summary">
                <p>Products Cost: </p>
                <p>Shipping Cost: </p>
                <p>Total:</p>
            </div>
            <Voucher />
            <OrderForm submit={handleSubmitForm} />
        </div>
    )
}