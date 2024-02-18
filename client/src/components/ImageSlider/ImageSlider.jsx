import { useState } from "react";
import newProduct from "../../img/product_promotion.webp";
import anniversary from "../../img/celebrate.webp";
import delivery from "../../img/delivery.webp";
import arrowLeft from "../../img/arrow_left.png";
import arrowRight from "../../img/arrow_right.png";
import "./ImageSlider.css";

export default function ImageSlider() {
    const bannerImgs = [anniversary, newProduct, delivery];
    const [imageIndex, setImageIndex] = useState(0);

    const prevImage = () => setImageIndex(prev => (prev - 1 + bannerImgs.length) % bannerImgs.length);
    const nextImage = () => setImageIndex(prev => (prev + 1) % bannerImgs.length);

    return (
        <div className="banner">
            <img src={bannerImgs[imageIndex]} alt="Banner Image" className="banner-img" />
                <div className="control-div div-left" onClick={() => prevImage()}>
                    <img src={arrowLeft} alt="Arrow Left" className="control-arrow arrow-left"/>
                </div>
                <div className="control-div div-right" onClick={() => nextImage()}>
                    <img src={arrowRight} alt="Arrow Right" className="control-arrow arrow-right"/>
                </div>
        </div>
    )
}