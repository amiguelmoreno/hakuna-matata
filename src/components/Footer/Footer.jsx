function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <h3>Hakuna Matata</h3>
                    <p>Peluquería canina profesional en Málaga. Cuidamos a tu mejor amigo con productos naturales y mucho cariño.</p>
                </div>

                <div className="footer__col">
                    <h4>Accesos rápidos</h4>
                    <a href="#services">Servicios</a>
                    <a href="#products">Productos</a>
                    <a href="#feedbacks">Reseñas</a>
                    <a href="#location">¿Dónde estamos?</a>
                </div>

                <div className="footer__col">
                    <h4>Contacto</h4>
                    <p>📞 665 593 628</p>
                    <p>📍 Málaga, España</p>
                    <a href="https://api.whatsapp.com/send?phone=665593628" target="_blank" rel="noopener noreferrer">
                        Escríbenos por WhatsApp
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <p>©{year} Hakuna Matata Peluquería Canina. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
