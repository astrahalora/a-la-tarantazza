import { useFetch } from "../../js/useFetch";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./Client.css";

export default function Client() {
    const { data, isError, isLoading } = useFetch();

    if(isLoading) return <Loading />
    if(isError) return <ErrorPage />

    return (
        <div className="orders-frame">
            <h2>Order History</h2>
            {data.map((item, i) => (
                <OrderItem key={i} order={[item]} number={i}/>
            ))}
        </div>
    )
}