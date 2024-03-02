import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ProductsTable.css";

export default function Table() {
    const productsState = useSelector(state => state.productList);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Filter products when the products state changes
        setProducts(productsState.products);
    }, [productsState.products]);

    return (
        <table className="products-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Detele</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}