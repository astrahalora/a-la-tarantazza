import "./Admin.css";
import Table from "../../components/Table/ProductsTable";

export default function Admin() {

    return (
        <div className="admin">
            <button 
            type="button"
            className="base-btn add-new-product-btn">
                Add New Product
            </button>
            <Table />
        </div>
    )
}