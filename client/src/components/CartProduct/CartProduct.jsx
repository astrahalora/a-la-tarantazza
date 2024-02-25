import "./CartProduct.css";

export default function CartProduct( { product }) {
    const productObj = product[0];

    return (
        <div className="cart-product">
            <div className="cp-details-1">
                <p>{productObj.name}</p>
                <img src={productObj.imageUrl} alt={productObj.name} className="cp-img"/>
            </div>
            <div className="cp-details-2">
                <p>${productObj.price * productObj.quantity}</p>
                <div className="cp-actions">
                    <button 
                    type="button"
                    >-</button>
                    <p>0</p>
                    <button 
                    type="button"
                    >+</button>
                </div>
                <div className="remove-btn-div">
                    <button 
                    type="button"
                    className="base-btn">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}