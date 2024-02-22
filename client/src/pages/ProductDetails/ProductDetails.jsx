import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../redux/cartSlice";
import { addProductToFavorites, removeProductFromFavorites } from "../../redux/favoriteSlice";
import { favoritesUrl } from "../../js/endpoints";
import { postContent } from "../../js/postContent";
import { deleteOneItem } from "../../js/deleteOneItem";
import heartEmpty from "../../img/heart_empty.png";
import heartFull from "../../img/heart_full.png";
import cart from "../../img/shopping_cart.png";
import unavailableCart from "../../img/shopping_cart_unavailable.png";
import "./ProductDetails.css";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";

export default function ProductDetails() {
    const detailsState = useSelector(state => state.product.details);
    const favoritesState = useSelector(state => state.favoriteList);
    const productsInCart = useSelector(state => state.cart.products);
    const [favorites, setFavorites] = useState([]);

    const productName = detailsState[0].name;
    const inStock = detailsState[0].amount;
    const dispatch = useDispatch();

    useEffect(() => {
        setFavorites(favoritesState.favorites);
    }, [favoritesState.favorites]);

    if(favoritesState.loading) return <Loading />;
    if(favoritesState.error) return <ErrorPage />;

    const quantityInCart = () => {
        const foundProduct = productsInCart.find(product => product._id === detailsState[0]._id);
    
        if (foundProduct && foundProduct.quantity !== undefined) return foundProduct.quantity;
        return null;
    }

    const isInFavorites = () => {
        const foundFavorite = favorites.find(product => product._id === detailsState[0]._id);

        if(foundFavorite) return true;
        return false;
    }
    
    return (
        <div className="product-details-frame">
            <img src={isInFavorites() ? heartFull : heartEmpty} alt="Empty Heart" className="liked" />
            <>
            {detailsState.length > 0 ? (
                <div className="product-details">
                    <div className="details-1">
                        <h2>{productName}</h2>
                        <img src={detailsState[0].imageUrl} alt={productName} className="detail-img"/>
                    </div>
                    <div className="details-2">
                        <div className="in-stock">
                            <h3>In Stock: {inStock}</h3>
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
                                <button 
                                    type="button" 
                                    className="decrement-btn"
                                    onClick={() => dispatch(removeProductFromCart(detailsState[0]))}
                                    disabled={inStock === 0}>
                                    -
                                </button>
                                <p>{quantityInCart() ? quantityInCart() : "0"}</p>
                                <button 
                                    type="button" 
                                    className="increment-btn" 
                                    onClick={() => dispatch(addProductToCart(detailsState[0]))}
                                    disabled={inStock === 0}>
                                    +
                                </button>
                                <img src={inStock === 0 ? unavailableCart : cart} alt="Cart" className="cart-rep"/>
                            </div>
                            {isInFavorites() ? (
                                <button type="button" className="base-btn"
                                    onClick={() => {
                                        dispatch(removeProductFromFavorites(detailsState[0]));
                                        deleteOneItem(favoritesUrl, detailsState[0]._id);
                                    }}>
                                    Remove From Favorites
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="base-btn"
                                    onClick={() => {
                                        dispatch(addProductToFavorites(detailsState[0]));
                                        postContent(detailsState[0], favoritesUrl);
                                    }}
                                >
                                    Add to Favorites
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
            </>
        </div>
    )
}