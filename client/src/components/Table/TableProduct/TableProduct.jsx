import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { patchContent } from "../../../js/patchContent";
import { deleteOneItem } from "../../../js/deleteOneItem";
import { fetchProducts } from "../../../redux/productsSlice";
import { productsUrl } from "../../../js/endpoints";
import "./TableProduct.css";

export default function TableProduct({ product }) {
    const productObj = product[0];
    const [updating, setUpdating] = useState(false);
    const nameRef = useRef(), priceRef = useRef(), amountRef = useRef();
    const dispatch = useDispatch();

    const handleSave = () => {
        setUpdating(false);
        patchContent(productsUrl, productObj._id, {
            name: nameRef.current.value,
            price: priceRef.current.value,
            amount: amountRef.current.value
        })
        .then(() => dispatch(fetchProducts()));
    }

    const handleDelete = () => deleteOneItem(productsUrl, productObj._id).then(() => dispatch(fetchProducts()));

    return (
        <tr className="table-product">
            <td className="table-detail">
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
                            onClick={() => setUpdating(true)}>
                            Update
                        </button>
                    </td>
                </>
            )}
            <td className="table-detail-2">
                <button
                    type="button"
                    className="base-btn table-prod-delete"
                    onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    )
}