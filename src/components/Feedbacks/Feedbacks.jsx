import { useState } from "react";
import FeedbackSlider from "./FeedbackSlider";

const feedbacks = [
    {
        user: "Naza",
        image: "https://lh3.googleusercontent.com/a-/AD5-WCnrGqjnDHEPm0d-jf8mrvXs2O7rMuDwesp-ApQuTUY=w75-h75-p-rp-mo-ba3-br100",
        text: "Sitio de confianza para que pelen a tu peludo! Ya he ido un par de veces y seguiré yendo a qué sigan dejando guapa a mi pequeña india. Además las chicas son súper agradables y se nota que les gusta su trabajo.",
    },

    {
        user: " Francisco Jesús Gil Navarro",
        image: "https://lh3.googleusercontent.com/a-/AD5-WCk10E9BTBoGfToWGtUheSR5b8gMdZDd-mPDop5w3g=w75-h75-p-rp-mo-br100",
        text: "Me ha encantado como ha quedado de guapa mi perrita después de haber pasado por la peluquería.",
    },

    {
        user: "Jesica Velasco",
        image: "https://lh3.googleusercontent.com/a-/AD5-WClH3kThYhs_F34hLCga8ur2sFkeU5WxUZx5nkZe=w75-h75-p-rp-mo-br100",
        text: "Me encanta como dejan a mí pequeña pomerania, no en todas las peluquerías saben tratar precisamente el cuidado de esta raza, y además me la cuidan muy bien, encantada de hace varios años ya",
    },

    {
        user: "Tamara MC",
        image: "https://lh3.googleusercontent.com/a-/AD5-WCmORdaXCtIe3muOnNhNDBxHSYW8c9YBlBJvxeuG=w75-h75-p-rp-mo-br100",
        text: "Me han encantado como han dejado una carita preciosa a mi Yorshire Terrier, la chica es encantadora, les dedica el tiempo necesario a cada peludo, os la recomiendo al 100%",
    },

    {
        user: "Francisca G Martin",
        image: "https://lh3.googleusercontent.com/a-/AD5-WCmb9B2dAkV57sDbLR98ZDJ2RpdXnpD_qcy-de-HWg=w75-h75-p-rp-mo-ba2-br100",
        text: "Tratan muy bien a las mascotas. Mi perrito quedó guapísimo. Eso sí, lleva tiempo... Casi dos horas en pelado más lavado... Precio asequible. Lo recomiendo.",
    },
    {
        user: "Alejandro MC",
        image: "https://lh3.googleusercontent.com/a-/AD5-WCkVeDLCKP8qSajlHonuZforHgmLzTaUvIQHAB1v=w75-h75-p-rp-mo-ba2-br100",
        text: "Muy bueno el trato recibido por sus regentes. Han dejado súper bien a mi cánido. ¡Repetiremos!",
    },

    {
        user: "Ana Conde",
        image: "https://lh3.googleusercontent.com/a-/AD5-WCmOD62WC57EcRvbTFJvHFv5zC0QBhiXYym4he_I=w75-h75-p-rp-mo-br100",
        text: "Todo perfecto y muy económico. Amabilidad y profesionalidad. Llevamos a nuestra perrita y salió muy suave, oliendo genial, con las uñas muy bien cortadas y orejitas y culete limpios. Volveremos sin duda. ¡Gracias!.",
    },
];

function Feedbacks() {
    const [current, setCurrent] = useState(0);
    const lenght = feedbacks.length;

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1);
    };

    console.log(current);

    if (!Array.isArray(feedbacks) || lenght <= 0) {
        return null;
    }

    return (
        <div className="feedbacks-section">
            <h2>Reseñas de nuestros clientes</h2>
            <div className="container">
                <div onClick={prevSlide} className="arrow arrow--left">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </div>
                <div onClick={nextSlide} className="arrow arrow--right">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </div>
                {feedbacks.map((slide, index) => {
                    return (
                        <div
                            className={
                                index === current
                                    ? "slider-container"
                                    : "display-none"
                            }
                            key={index}
                        >
                            <div className="slide">
                                <p className="feedback__text">"{slide.text}"</p>
                                <div className="feedback__user">
                                    <img src={slide.image} alt="user" />
                                    <p className="user__name">{slide.user}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Feedbacks;
