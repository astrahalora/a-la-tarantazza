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

export default function Salads() {
    const productsState = useSelector(state => state.productList);
    const [data, setData] = useState([]);
    const [filteredSalads, setFilteredSalads] = useState([]);
    const [salads, setSalads] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showProductDetails = (product) => {
        dispatch(setProduct([product]));
        navigate("/product-details");
    }

    useEffect(() => {
        setData(filterByType(productsState.products, "salad"));
        setFilteredSalads(filterByType(productsState.products, "salad"));
        setSalads(filterByType(productsState.products, "salad"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    const filterByAllergen = (input, select) => {
        const optionName = select.current.value;
        input.current.value = "";
        setFilteredSalads(data);
        setSalads(data);

        if(optionName === "-- See All --") return;
        setFilteredSalads(prev => filterOutByString(prev, optionName));
        setSalads(prev => filterOutByString(prev, optionName));
    }

    const searchByName = (input) => {
        const searchPhrase = input.current.value.toLowerCase();
        setSalads(filteredSalads);
        setSalads(prev => filterByPhrase(prev, searchPhrase));
    };

    return (
        <section className="product-list">
            <Filter 
                allergens={getAllergenList(data)}
                filter={filterByAllergen}
                search={searchByName}
                />
            <div className="listed-products">
            {salads.map((product) => (
                <Product
                    key={product._id}
                    product={[product]}
                    onClick={() => showProductDetails(product)} />
            ))}
            </div>
        </section>
    );
}