import "./OrderDetails.css";
import OrderForm from "./OrderForm/OrderForm";

export default function OrderDetails() {
    return (
        <div className="order-details">
            <div className="order-summary">
                <p>Products Cost: </p>
                <p>Shipping Cost: </p>
                <p>Total:</p>
            </div>
            <div className="voucher">
                <p>Do you have a voucher?</p>
                {/* if no voucher applied */}
                <div className="no-voucher">
                    <input type="text" placeholder="Code..." />
                    <button
                        type="apply-voucher"
                        className="base-btn">
                        Add
                    </button>
                </div>
            </div>
            <OrderForm />
        </div>
    )
}