import { useState } from "react";

function FeedbackSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="slider-container">
            <div className="slide">
                <p className="feedback__text">
                    "Evita los arañazos mientras juegas con tu mascota,
                    tráenosla y le recortamos las uñas evitando que se estrese."
                </p>
                <p className="feedback__user">Maria Rodriguez</p>
            </div>
        </div>
    );
}
export default FeedbackSlider;
