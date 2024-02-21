import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../../redux/productDetailsSlice";
import { filterByType, filterOutByString, filterByPhrase } from "../../../js/filtering";
import { getAllergenList } from "../../../js/getAllergenList";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import Product from "../../../components/Product/Product";
import "../Products.css";
import Filter from "../../../components/Filter/Filter";

export default function Desserts() {
    const productsState = useSelector(state => state.productList);
    const [data, setData] = useState([]);
    const [filteredDesserts, setFilteredDesserts] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showProductDetails = (product) => {
        dispatch(setProduct([product]));
        navigate("/product-details");
    }

    useEffect(() => {
        setData(filterByType(productsState.products, "dessert"));
        setFilteredDesserts(filterByType(productsState.products, "dessert"));
        setDesserts(filterByType(productsState.products, "dessert"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    const filterByAllergen = (input, select) => {
        const optionName = select.current.value;
        input.current.value = "";
        setFilteredDesserts(data);
        setDesserts(data);

        if(optionName === "-- See All --") return;
        setFilteredDesserts(prev => filterOutByString(prev, optionName));
        setDesserts(prev => filterOutByString(prev, optionName));
    }

    const searchByName = (input) => {
        const searchPhrase = input.current.value.toLowerCase();
        setDesserts(filteredDesserts);
        setDesserts(prev => filterByPhrase(prev, searchPhrase));
    };

    return (
        <section className="product-list">
            <Filter 
                allergens={getAllergenList(data)}
                filter={filterByAllergen}
                search={searchByName}
                />
            <div className="listed-products">
            {desserts.map((product) => (
                <Product
                    key={product._id}
                    product={[product]}
                    onClick={() => showProductDetails(product)} />
            ))}
            </div>
        </section>
    );
}