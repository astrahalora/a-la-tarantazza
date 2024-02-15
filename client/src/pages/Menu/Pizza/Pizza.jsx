import { useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";

export default function Pizza() {
    // const products = useSelector(state => state.product.products);
    // const loading = useSelector((state) => state.product.loading);
    // const error = useSelector((state) => state.product.error);
    const products = useSelector(state => state.product);

    if(products.loading) return <Loading />;

    if(products.error) return <ErrorPage />

    return (
        <div>
            {products.products.map((product) => (
                <p key={product._id}>{product.name}</p>
            ))}
        </div>
    )
}