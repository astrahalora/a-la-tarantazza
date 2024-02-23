import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeProductFromFavorites } from "../../redux/favoriteSlice";
import { deleteOneItem } from "../../js/deleteOneItem";
import { favoritesUrl } from "../../js/endpoints";
import Favorite from "../../components/Favorite/Favorite";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import "./Favorites.css";

export default function Favorites() {
    const favoriteState = useSelector(state => state.favoriteList);
    const [favorites, setFavorites] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setFavorites(favoriteState.favorites);
    }, [favoriteState.favorites]);

    if (favoriteState.loading) return <Loading />;
    if (favoriteState.error) return <ErrorPage />;

    return (
        <div className="favorites-menu">
            <h2>Favorites</h2>
            <div className="favorites">
                {favorites.map(favorite => (
                    <Favorite 
                    key={favorite._id} 
                    favorite={[favorite]}
                    deleteFavorite={() => {
                        dispatch(removeProductFromFavorites(favorite));
                        deleteOneItem(favoritesUrl, favorite._id);
                    }} />
                ))}
            </div>
        </div>
    )
}