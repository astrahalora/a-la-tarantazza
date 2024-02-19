import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import { filterByType } from "../../../js/filterByType";
import Product from "../../../components/Product/Product";
import "../Products.css";

export default function Desserts() {
    const productsState = useSelector(state => state.productList);
    const [dessert, setDessert] = useState([]);

    useEffect(() => {
        setDessert(filterByType(productsState.products, "dessert"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    return (
        <section className="product-list">
            {dessert.map((product) => (
                <Product key={product._id} product={[product]} />
            ))}
        </section>
    );
}