import { useState, useRef } from "react";
import "./TableProduct.css";

export default function TableProduct({ product }) {
    const productObj = product[0];
    const [updating, setUpdating] = useState(false);
    const nameRef = useRef(), priceRef = useRef(), amountRef = useRef();

    const handleUpdate = () => {
        setUpdating(true);
    }

    const handleSave = () => {
        setUpdating(false);
    }

    return (
        <tr className="table-product">
            <td>
                <img src={productObj.imageUrl} alt={productObj.name} className="table-product-img" />
            </td>
            {updating ? (
                <>
                    <td>
                        <input 
                            autoFocus
                            type="text"
                            name="name"
                            defaultValue={productObj.name}
                            ref={nameRef}
                            className="table-input" 
                        />
                    </td>
                    <td>
                        <input 
                            autoFocus
                            type="text"
                            name="price"
                            defaultValue={productObj.price.toFixed(2)}
                            ref={priceRef}
                            className="table-input" 
                        />
                    </td>
                    <td>
                        <input 
                            autoFocus
                            type="text"
                            name="amount"
                            defaultValue={productObj.amount}
                            ref={amountRef}
                            className="table-input"
                        />
                    </td>
                    <td>
                        <button
                            type="button"
                            className="base-btn"
                            onClick={handleSave}>
                            Save
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>
                        {productObj.name}
                    </td>
                    <td>
                        {productObj.price.toFixed(2)}
                    </td>
                    <td>
                        {productObj.amount}
                    </td>
                    <td>
                        <button
                            type="button"
                            className="base-btn"
                            onClick={handleUpdate}>
                            Update
                        </button>
                    </td>
                </>
            )}
            <td>
                <button
                    type="button"
                    className="base-btn table-prod-delete">
                    Delete
                </button>
            </td>
        </tr>
    )
}