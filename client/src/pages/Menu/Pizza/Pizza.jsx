import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import { filterByType } from "../../../js/filterByType";
import Product from "../../../components/Product/Product";
import "../Products.css";

export default function Pizza() {
    const productsState = useSelector(state => state.product);
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        // Filter products when the products state changes
        setPizza(filterByType(productsState.products, "pizza"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    return (
        <div className="product-list">
            {pizza.map((product) => (
                <Product key={product._id} product={[product]} />
            ))}
        </div>
    );
}
