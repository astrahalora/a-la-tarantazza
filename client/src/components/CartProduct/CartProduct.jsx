import "./CartProduct.css";

export default function CartProduct( { product }) {
    const productObj = product[0];

    return (
        <div className="cart-product">
            <h3>{productObj.name}</h3>
        </div>
    )
}