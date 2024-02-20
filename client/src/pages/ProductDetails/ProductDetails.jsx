import { useSelector } from "react-redux";
import "./ProductDetails.css";

export default function ProductDetails() {
    const detailsState = useSelector(state => state.product.details);

    return (
        <div className="product-details-frame">
            {detailsState.length > 0 ? (
                <div className="product-details">
                    <div>
                        <h2>{detailsState[0].name}</h2>
                        <img src={detailsState[0].imageUrl} alt={detailsState[0].name} />
                    </div>
                    <div className="interaction-btns">
                        <div className="add-or-remove-btns">
                            <button type="button" className="decrement-btn">-</button>
                            <p>0</p>
                            <button type="button" className="increment-btn">+</button>
                        </div>
                        <button type="button" className="favorite-btn">
                            Add to Favorites
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}