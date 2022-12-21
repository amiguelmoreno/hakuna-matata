import Product from "./Product";
import camaPerro from "../../assets/products/cama-perro.jpeg";
import peluchePerro from "../../assets/products/cocodrilo-peluche-perro.jpg";
import comidaPerro from "../../assets/products/comida-perro-ultima.jpeg";
import vallaInteriorPerro from "../../assets/products/valla-interior-perro.jpg";

const products = [
    {
        title: "Valla para perros (interior)",
        description:
            "Valla para perros para restringir su acceso a determinadas áreas de la casa.",
        image: vallaInteriorPerro,
    },
    {
        title: "Cocodrilo de peluche",
        description:
            "Nuestro juguete de peluche para perros tiene una linda forma de cocodrilo limón, lo que agrega entretenimiento diario para sus mascotas.",
        image: peluchePerro,
    },
    {
        title: "Comida para perros (Ultima)",
        description:
            "Con sabor a pollo y arroz, diseñada para que cada comida aporte la cantidad necesaria de nutrientes para tu perro",
        image: comidaPerro,
    },
    {
        title: "Cama para perros medianos y grandes",
        description:
            "Desparasitar a tu mascota puede ser todo un contratiempo, por eso te ofrecemos la posibilidad de deshacerte de ellos",
        image: camaPerro,
    },
];

function Products() {
    return (
        <div id="products" className="products__container">
            <h2>Productos</h2>
            <div className="products">
                {products.map((slide, index) => {
                    return (
                        <Product
                            key={index}
                            content={products[index]}
                        ></Product>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;
