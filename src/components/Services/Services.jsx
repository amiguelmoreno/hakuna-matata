import Service from "./Service";
import autolavadoPerro from "../../assets/servicesIcons/autolavado-perro.png";
import corteDePeloPerro from "../../assets/servicesIcons/corte-de-pelo-perro.png";
import corteUñasPerro from "../../assets/servicesIcons/corte-uñas-perro.png";
import bañoPerro from "../../assets/servicesIcons/baño-perros.png";
import limpiezaAnalPerro from "../../assets/servicesIcons/limpieza-anal-perro.png";
import limpiezaOidosPerro from "../../assets/servicesIcons/limpieza-de-oidos-perro.png";
import limpiezaDientesPerro from "../../assets/servicesIcons/limpieza-dientes-perro.png";
import packCompletoHigiene from "../../assets/servicesIcons/pack-completo-higiene.png";
import tratamientoAntiparasitario from "../../assets/servicesIcons/tratamiento-antiparasitario.png";

const services = [
    {
        title: "Peluquería canina",
        description:
            "Le recortamos el pelo a tu mejor amigo para que luzca un nuevo look.",
        image: corteDePeloPerro,
    },
    {
        title: "Autolavado",
        description:
            "Somos pioneros en este servicio, te proporcionamos un autolavado de 10 para tu mascota",
        image: autolavadoPerro,
    },
    {
        title: "Vaciado de glándulas anales de perros",
        description:
            "Sabemos lo importante que es el aseo de tu mascota en zonas sensibles, por eso solo usamos producto de alta calidad.",
        image: limpiezaAnalPerro,
    },
    {
        title: "Tratamiento contra pulgas y garrapatas para perros",
        description:
            "Desparasitar a tu mascota puede ser todo un contratiempo, por eso te ofrecemos la posibilidad de deshacerte de ellos",
        image: tratamientoAntiparasitario,
    },
    {
        title: "Lavado de dientes para perros",
        description:
            "Le daremos a tu perro chuches de primera calidad que reducen el sarro comprobado, incluso semanas después de su ingesta.",
        image: limpiezaDientesPerro,
    },
    {
        title: "Servicio completo de higiene y cosmética canina",
        description:
            "El pack definitivo. La lavaremos, le cortaremos el pelo, las uñas, le limpiamos los oídos y los dientes.",
        image: packCompletoHigiene,
    },
    {
        title: "Limpieza de oídos para perros",
        description:
            "Que tu mascota te escuche sin molestia cuando la llamas es fundamental, por eso deja la limpieza de sus oídos en nuestras manos",
        image: limpiezaOidosPerro,
    },
    {
        title: "Corte de uñas para perros",
        description:
            "Evita los arañazos mientras juegas con tu mascota, tráenosla y le recortamos las uñas evitando que se estrese. ",
        image: corteUñasPerro,
    },
    {
        title: "Baño y secado de perros",
        description:
            "Le proporcionamos a tu mascota el mejor lavado posible usando productos naturales.",
        image: bañoPerro,
    },
];

function Services() {
    let index = 0;

    return (
        <div id="services" className="services__container">
            <h2>Servicios</h2>
            <div className="services">
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
                <Service content={services[index++]}></Service>
            </div>
        </div>
    );
}
export default Services;
