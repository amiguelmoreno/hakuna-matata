function Product(props) {
    let message = `https://api.whatsapp.com/send?phone=665593628&text=Hola! Me gustaría reservar '${props.content.title}' para mi perrit@`;

    return (
        <div className="product">
            <h4>
                <span className="price">{props.content.price}</span>
                <span className="eur">€</span>
            </h4>
            <div className="product__img">
                <img src={props.content.image} alt="" />
            </div>
            <h3>{props.content.title}</h3>
            <p className="product__description">{props.content.description}</p>
            <div className="product__link" action="">
                <a target="_blank" href={message}>
                    <button>Reservar</button>
                </a>
            </div>
        </div>
    );
}
export default Product;
