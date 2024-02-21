import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../../redux/productDetailsSlice";
import { filterByType } from "../../../js/filterByType";
import { getAllergenList } from "../../../js/getAllergenList";
import { filterOutByString } from "../../../js/filterOutByString";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";
import Product from "../../../components/Product/Product";
import "../Products.css";
import Filter from "../../../components/Filter/Filter";

export default function Pizza() {
    const productsState = useSelector(state => state.productList);
    const [data, setData] = useState([]);
    const [filteredPizza, setFilteredPizza] = useState([]);
    const [pizza, setPizza] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showProductDetails = (product) => {
        dispatch(setProduct([product]));
        navigate("/product-details");
    }

    useEffect(() => {
        // Filter products when the products state changes
        setData(filterByType(productsState.products, "pizza"));
        setFilteredPizza(filterByType(productsState.products, "pizza"));
        setPizza(filterByType(productsState.products, "pizza"));
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    const filterByAllergen = (input, select) => {
        const optionName = select.current.value;
        input.current.value = "";
        setFilteredPizza(data);
        setPizza(data);

        if(optionName === "-- See All --") return;
        setFilteredPizza(prev => filterOutByString(prev, optionName));
        setPizza(prev => filterOutByString(prev, optionName));
    }

    const searchByName = (input) => {
        const searchPhrase = input.current.value.toLowerCase();
        setPizza(filteredPizza);
        setPizza(prev => {
            return [...prev].filter((item => item.name.toLowerCase().includes(searchPhrase)));
        });
    };

    return (
        <section className="product-list">
            <Filter 
                allergens={getAllergenList(data)}
                filter={filterByAllergen}
                search={searchByName}
                 />
            <div className="listed-products">
            {pizza.map((product) => (
                <Product
                    key={product._id}
                    product={[product]}
                    onClick={() => showProductDetails(product)} />
            ))}
            </div>
        </section>
    );
}
