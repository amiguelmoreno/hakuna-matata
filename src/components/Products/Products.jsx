import { useScrollReveal } from "../../hooks/useScrollReveal";
import Product from "./Product";
import champuImg from "../../assets/products/champu-perro.jpg";
import acondicionadorImg from "../../assets/products/acondicionador-perro.jpg";
import coloniaImg from "../../assets/products/colonia-perro.jpg";
import cepilloImg from "../../assets/products/cepillo-perro.jpg";
import snacksImg from "../../assets/products/snacks-perro.jpg";
import arnesImg from "../../assets/products/arnes-perro.jpg";

const products = [
    {
        title: "Champú Profesional",
        badge: "Higiene",
        description: "El mismo champú que usamos en el salón. Fórmula suave con extractos naturales, ideal para pelajes de todo tipo.",
        price: "12,95",
        image: champuImg,
    },
    {
        title: "Acondicionador Hidratante",
        badge: "Higiene",
        description: "Devuelve el brillo y la suavidad al pelo. Especialmente recomendado para razas de pelo largo o rizado.",
        price: "9,95",
        image: acondicionadorImg,
    },
    {
        title: "Colonia Duradera",
        badge: "Perfumería",
        description: "Aroma fresco de larga duración pensado para perros. Sin alcohol ni irritantes, con dermatología testada.",
        price: "8,95",
        image: coloniaImg,
    },
    {
        title: "Cepillo Antipelos",
        badge: "Accesorios",
        description: "Doble cara para desenredar y dar brillo. Elimina el pelo muerto sin molestar a tu mascota.",
        price: "14,95",
        image: cepilloImg,
    },
    {
        title: "Snacks Naturales",
        badge: "Nutrición",
        description: "Premios sin aditivos artificiales, perfectos para el entrenamiento diario. Irresistibles para ellos.",
        price: "7,95",
        image: snacksImg,
    },
    {
        title: "Arnés Ergonómico",
        badge: "Paseos",
        description: "Ajuste preciso con acolchado suave. Distribuye la presión de forma segura para paseos cómodos.",
        price: "24,95",
        image: arnesImg,
    },
];

const STAGGER = 80;

function Products() {
    const titleRef = useScrollReveal(0.3);
    const subtitleRef = useScrollReveal(0.3);

    return (
        <section id="products" className="products__container">
            <h2 ref={titleRef} className="reveal">Nuestros Productos</h2>
            <p ref={subtitleRef} className="products__subtitle reveal">
                Todo lo que tu perro necesita, en un solo lugar
            </p>
            <div className="products">
                {products.map((product, index) => (
                    <Product key={index} content={product} delay={index * STAGGER} />
                ))}
            </div>
        </section>
    );
}

export default Products;
