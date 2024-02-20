import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../../redux/productDetailsSlice";
import { filterByType } from "../../../js/filterByType";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import Product from "../../../components/Product/Product";
import "../Products.css";

export default function Pizza() {
    const productsState = useSelector(state => state.productList);
    const [pizza, setPizza] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showProductDetails = (product) => {
        dispatch(setProduct([product]));
        navigate("/product-details");
    }

    useEffect(() => {
        // Filter products when the products state changes
        setPizza(filterByType(productsState.products, "pizza"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    return (
        <section className="product-list">
            {pizza.map((product) => (
                <Product
                    key={product._id}
                    product={[product]}
                    onClick={() => showProductDetails(product)} />
            ))}
        </section>
    );
}
