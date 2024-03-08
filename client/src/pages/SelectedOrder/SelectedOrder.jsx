import { useSelector } from "react-redux";
import "./SelectedOrder.css";

export default function SelectedOrder() {
    const orderDetails = useSelector(state => state.order.details);

    return (
        <div className="selected-order">
            <h2>Ordered on: </h2>
        </div>
    )
}