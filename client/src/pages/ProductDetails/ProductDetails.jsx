import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../redux/cartSlice";
import heartEmpty from "../../img/heart_empty.png";
import heartFull from "../../img/heart_full.png";
import "./ProductDetails.css";

export default function ProductDetails() {
    const detailsState = useSelector(state => state.product.details);
    const productsInCart = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addProductToCart(product));
    }

    const quantityInCart = () => {
        const foundProduct = productsInCart.find(product => product._id === detailsState[0]._id);
    
        if (foundProduct && foundProduct.quantity !== undefined) {
            return foundProduct.quantity;
        }
    
        return null;
    }
    
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
                        <div className="in-stock">
                            <h3>In Stock: {detailsState[0].amount}</h3>
                        </div>
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
                                <p>{quantityInCart() ? quantityInCart() : "0"}</p>
                                <button 
                                    type="button" 
                                    className="increment-btn" 
                                    onClick={() => addToCart(detailsState[0])}
                                    disabled={detailsState[0].amount === 0}>
                                    +
                                </button>
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