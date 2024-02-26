import "./Summary.css";

export default function Summary() {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <p><strong>Products Cost:</strong> </p>
            <p><strong>Shipping Cost:</strong> </p>
            <p><strong>Discounts:</strong></p>
            <p><strong>Total:</strong> </p>
        </div>
    )
}