import "./OrderDetails.css";

export default function OrderDetails() {
    return (
        <div className="order-details">
                <div className="order-summary">
                    <p>Products Cost: </p>
                    <p>Shipping Cost: </p>
                    <p>Total:</p>
                    <button type="button">Order Now</button>
                </div>
                <div className="voucher">
                    <p>Do you have a voucher?</p>
                    {/* if no voucher applied */}
                    <div className="no-voucher">
                        <input type="text" placeholder="Code..." />
                        <button type="apply-voucher">Add</button>
                    </div>
                </div>
            </div>
    )
}