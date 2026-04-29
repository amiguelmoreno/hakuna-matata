import { useScrollReveal } from "../../hooks/useScrollReveal";
import Service from "./Service";
import autolavadoPerro from "../../assets/servicesIcons/autolavado-perro.webp";
import corteDePeloPerro from "../../assets/servicesIcons/corte-de-pelo-perro.webp";
import corteUñasPerro from "../../assets/servicesIcons/corte-uñas-perro.webp";
import bañoPerro from "../../assets/servicesIcons/baño-perros.webp";
import limpiezaAnalPerro from "../../assets/servicesIcons/limpieza-anal-perro.webp";
import limpiezaOidosPerro from "../../assets/servicesIcons/limpieza-de-oidos-perro.webp";
import limpiezaDientesPerro from "../../assets/servicesIcons/limpieza-dientes-perro.webp";
import packCompletoHigiene from "../../assets/servicesIcons/pack-completo-higiene.webp";
import tratamientoAntiparasitario from "../../assets/servicesIcons/tratamiento-antiparasitario.webp";

const services = [
    {
        title: "Peluquería canina",
        description: "Le recortamos el pelo a tu mejor amigo para que luzca un nuevo look.",
        image: corteDePeloPerro,
    },
    {
        title: "Autolavado",
        description: "Somos pioneros en este servicio, te proporcionamos un autolavado de 10 para tu mascota.",
        image: autolavadoPerro,
    },
    {
        title: "Vaciado de glándulas anales",
        description: "Sabemos lo importante que es el aseo de tu mascota en zonas sensibles, solo usamos productos de alta calidad.",
        image: limpiezaAnalPerro,
    },
    {
        title: "Tratamiento antiparasitario",
        description: "Desparasitar a tu mascota puede ser todo un contratiempo, por eso te ofrecemos la posibilidad de deshacerte de ellos.",
        image: tratamientoAntiparasitario,
    },
    {
        title: "Lavado de dientes",
        description: "Le daremos a tu perro chuches de primera calidad que reducen el sarro, incluso semanas después de su ingesta.",
        image: limpiezaDientesPerro,
    },
    {
        title: "Pack completo de higiene",
        description: "El pack definitivo: baño, corte de pelo, uñas, limpieza de oídos y dientes.",
        image: packCompletoHigiene,
    },
    {
        title: "Limpieza de oídos",
        description: "Que tu mascota te escuche sin molestia es fundamental — deja la limpieza de sus oídos en nuestras manos.",
        image: limpiezaOidosPerro,
    },
    {
        title: "Corte de uñas",
        description: "Evita los arañazos mientras juegas con tu mascota, tráenosla y le recortamos las uñas sin estrés.",
        image: corteUñasPerro,
    },
    {
        title: "Baño y secado",
        description: "Le proporcionamos a tu mascota el mejor lavado posible usando productos naturales.",
        image: bañoPerro,
    },
];

const STAGGER = 80;

function Services() {
    const titleRef = useScrollReveal(0.3);
    const subtitleRef = useScrollReveal(0.3);

    return (
        <section id="services" className="services__container">
            <h2 ref={titleRef} className="reveal">Nuestros Servicios</h2>
            <p ref={subtitleRef} className="services__subtitle reveal">Profesionales del bienestar canino</p>
            <div className="services">
                {services.map((service, index) => (
                    <Service key={index} content={service} delay={index * STAGGER} />
                ))}
            </div>
        </section>
    );
}

export default Services;
