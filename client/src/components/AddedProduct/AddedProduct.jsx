import { useWindowDimensions } from "../../js/useWindowDimensions";
import "./AddedProduct.css";

export default function AddedProduct({ show }) {
    // Calculate the bottom and right positions as percentages -20px for margins
    const { width, height } = useWindowDimensions();
    const bottomPosition = (height - 20) / height * 100;
    const rightPosition = (width - 20) / width * 100;

    return (
        <div className="added-product-notice" 
            style={
                { 
                    opacity: show ? 1 : 0,
                    bottom: `${100 - bottomPosition}vh`, 
                    right: `${100 - rightPosition}vw`
                }
            }>
            <p>Product Added to Cart</p>
        </div>
    )
}


