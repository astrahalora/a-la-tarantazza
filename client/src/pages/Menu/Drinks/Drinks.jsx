import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import { filterByType } from "../../../js/filterByType";
import Product from "../../../components/Product/Product";
import "../Products.css";

export default function Drinks() {
    const productsState = useSelector(state => state.productList);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        setDrinks(filterByType(productsState.products, "drink"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    return (
        <section className="product-list">
            {drinks.map((product) => (
                <Product key={product._id} product={[product]} />
            ))}
        </section>
    );
}