import { useScrollReveal } from "../../hooks/useScrollReveal";

function Service({ content, delay = 0 }) {
    const ref = useScrollReveal(0.1);

    return (
        <div
            ref={ref}
            className="service reveal"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="service__img">
                <img src={content.image} alt={content.title} width="90" height="90" loading="lazy" decoding="async" />
            </div>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
        </div>
    );
}

export default Service;
