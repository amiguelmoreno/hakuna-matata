import { useScrollReveal } from "../../hooks/useScrollReveal";
import Product from "./Product";
import camaPerro from "../../assets/products/cama-perro.jpeg";
import peluchePerro from "../../assets/products/cocodrilo-peluche-perro.jpg";
import comidaPerro from "../../assets/products/comida-perro-ultima.jpeg";
import vallaInteriorPerro from "../../assets/products/valla-interior-perro.jpg";

const products = [
    {
        title: "Valla para perros (interior)",
        description: "Valla para perros para restringir su acceso a determinadas áreas de la casa.",
        image: vallaInteriorPerro,
        price: "29,95",
    },
    {
        title: "Cocodrilo de peluche",
        description: "Nuestro juguete de peluche tiene una linda forma de cocodrilo limón que entretiene a tu mascota cada día.",
        image: peluchePerro,
        price: "13,95",
    },
    {
        title: "Comida para perros (Ultima)",
        description: "Con sabor a pollo y arroz, diseñada para que cada comida aporte los nutrientes necesarios para tu perro.",
        image: comidaPerro,
        price: "27,95",
    },
    {
        title: "Cama para perros medianos y grandes",
        description: "Cama cómoda y resistente para que tu perro descanse como se merece.",
        image: camaPerro,
        price: "24,95",
    },
];

const STAGGER = 100;

function Products() {
    const titleRef = useScrollReveal(0.3);

    return (
        <section id="products" className="products__container">
            <h2 ref={titleRef} className="reveal">Nuestros Productos</h2>
            <div className="products">
                {products.map((product, index) => (
                    <Product key={index} content={product} delay={index * STAGGER} />
                ))}
            </div>
        </section>
    );
}

export default Products;
