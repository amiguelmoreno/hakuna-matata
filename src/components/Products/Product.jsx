import { useScrollReveal } from "../../hooks/useScrollReveal";

function Product({ content, delay = 0 }) {
    const ref = useScrollReveal(0.1);
    const message = `https://api.whatsapp.com/send?phone=665593628&text=Hola! Me gustaría reservar '${content.title}' para mi perrit@`;

    return (
        <div
            ref={ref}
            className="product reveal"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="product__img">
                <h4>
                    <span className="price">{content.price}</span>
                    <span className="eur">€</span>
                </h4>
                <img src={content.image} alt={content.title} />
            </div>
            <div className="product__body">
                <h3>{content.title}</h3>
                <p className="product__description">{content.description}</p>
                <div className="product__link">
                    <a target="_blank" rel="noopener noreferrer" href={message}>
                        Reservar por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Product;
