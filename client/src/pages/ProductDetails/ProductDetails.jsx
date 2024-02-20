import { useSelector } from "react-redux";
import heartEmpty from "../../img/heart_empty.png";
import heartFull from "../../img/heart_full.png";
import "./ProductDetails.css";

export default function ProductDetails() {
    const detailsState = useSelector(state => state.product.details);

    return (
        <div className="product-details-frame">
            <img src={heartEmpty} alt="Empty Heart" className="liked" />
            <>
            {detailsState.length > 0 ? (
                <div className="product-details">
                    <div className="details-1">
                        <h2>{detailsState[0].name}</h2>
                        <img src={detailsState[0].imageUrl} alt={detailsState[0].name} className="detail-img"/>
                    </div>
                    <div className="details-2">
                        <div className="ingredients">
                            <h3>Ingredients:</h3>
                            <p>{detailsState[0].ingredients.map((ingredient, index) => (
                                <span key={index}>{ingredient}, </span>
                            ))}</p>
                        </div>
                        <div className="allergens">
                            <h3>Allergens:</h3>
                            <p>
                                {detailsState[0].alergens.length > 0 ? (
                                    detailsState[0].alergens.map((allergen, index) => (
                                        <span key={index}>{allergen}, </span>
                                    ))
                                ) : (
                                    "None"
                                )}
                            </p>
                        </div>
                        <div className="interaction-btns">
                            <div className="add-or-remove-btns">
                                <button type="button" className="decrement-btn">-</button>
                                <p>0</p>
                                <button type="button" className="increment-btn">+</button>
                            </div>
                            <button type="button" className="favorite-btn base-btn">
                                Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
            </>
        </div>
    )
}