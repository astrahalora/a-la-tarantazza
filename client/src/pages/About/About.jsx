import "./About.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Description from "../../components/Description/Description";

export default function About() {
    return (
        <section className="about">
            <ImageSlider />
            <Description />
        </section>
    )
}