import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import { filterByType } from "../../../js/filterByType";
import Product from "../../../components/Product/Product";
import "../Products.css";

export default function Salads() {
    const productsState = useSelector(state => state.productList);
    const [salads, setSalads] = useState([]);

    useEffect(() => {
        setSalads(filterByType(productsState.products, "salad"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    return (
        <div className="product-list">
            {salads.map((product) => (
                <Product key={product._id} product={[product]} />
            ))}
        </div>
    );
}