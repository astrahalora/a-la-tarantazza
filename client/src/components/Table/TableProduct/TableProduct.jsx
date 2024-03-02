import "./TableProduct.css";

export default function TableProduct( { product }) {
    const productObj = product[0];

    return (
        <tr className="table-product">
            <td>
                <img src={productObj.imageUrl} alt={productObj.name} className="table-product-img" />
            </td>
            <td>
                {productObj.name}
            </td>
            <td>
                {productObj.price}
            </td>
            <td>
                {productObj.amount}
            </td>
            <td>
                Delete
            </td>
        </tr>
    )
}