import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ProductsTable.css";
import Loading from "../../pages/Loading/Loading";
import ErrorPage from "../../pages/Error/ErrorPage";
import TableProduct from "./TableProduct/TableProduct";
import Pagination from "../Pagination/Pagination";

export default function ProductsTable() {
    const productsState = useSelector(state => state.productList);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {
        const sortedProducts = [...productsState.products];
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

        setProducts(sortedProducts);
    }, [productsState.products]);

    if (productsState.loading) return <Loading />;
    if (productsState.error) return <ErrorPage />;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <table className="products-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {currentProducts.map((product, i) => (
                    <TableProduct key={i} product={[product]} />
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="6">
                        <Pagination 
                            productsPerPage={productsPerPage} 
                            totalProducts={products.length}
                            paginate={paginate}
                        />
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}