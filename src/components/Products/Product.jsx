import { useScrollReveal } from "../../hooks/useScrollReveal";

function Product({ content, delay = 0 }) {
    const ref = useScrollReveal(0.1);
    const message = `https://api.whatsapp.com/send?phone=665593628&text=Hola! Me gustaría pedir '${content.title}'`;

    return (
        <article
            ref={ref}
            className="product reveal"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="product__hero">
                <img
                    className="product__photo"
                    src={content.image}
                    alt={content.title}
                    width="400"
                    height="280"
                    loading="lazy"
                    decoding="async"
                />
                <div className="product__overlay" />
                <span className="product__badge">{content.badge}</span>
                <div className="product__price">
                    {content.price}<span>€</span>
                </div>
            </div>
            <div className="product__body">
                <h3>{content.title}</h3>
                <p className="product__description">{content.description}</p>
                <a
                    className="product__cta"
                    href={message}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pedir por WhatsApp
                </a>
            </div>
        </article>
    );
}

export default Product;
