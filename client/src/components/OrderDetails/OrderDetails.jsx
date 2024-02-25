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
                <h3>Order Summary</h3>
                <p><strong>Products Cost:</strong> </p>
                <p><strong>Shipping Cost:</strong> </p>
                <p><strong>Total:</strong> </p>
            </div>
            <Voucher />
            <OrderForm handleSubmit={handleSubmitForm} />
        </div>
    )
}