import { Form } from "react-router-dom";
import "./OrderForm.css";

export default function OrderForm() {
    return (
        <Form className="order-form">
            <h2>Form</h2>
            <div className="order-btn-div">
                <button
                    type="button"
                    className="base-btn">
                    Order Now
                </button>
            </div>
        </Form>
    )
}