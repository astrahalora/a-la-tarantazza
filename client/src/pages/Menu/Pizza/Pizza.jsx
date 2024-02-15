import { useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../Error/ErrorPage";

export default function Pizza() {
    const products = useSelector(state => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);

    if(loading) {
        return <Loading />;
    }

    if(error) {
        return <ErrorPage />
    }

    return (
        <div>
            {products.map((product) => (
                <p key={product._id}>{product.name}</p>
            ))}
        </div>
    )
}