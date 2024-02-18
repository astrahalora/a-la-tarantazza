import notFound from "../../img/not_found.webp";
import "./PageNotFound.css";

export default function PageNotFound() {
    return (
        <div className="notice">
            <img src={notFound} alt="Page Not Found" srcset="" className="not-found-img" />
            <h1>404: Page could not be found.</h1>
        </div>
    )
}