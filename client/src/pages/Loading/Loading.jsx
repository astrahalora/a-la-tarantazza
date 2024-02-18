import loading from "../../img/strawberry_loading.webp";
import "./Loading.css";

export default function Loading() {
    return (
        <div className="notice">
            <img src={loading} alt="Loading..." class="loading-image"/>
        </div>
    )
}