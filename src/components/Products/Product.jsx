function Product(props) {
    return (
        <div className="product">
            <h4>
                <span className="price">13,99</span>
                <span className="eur">€</span>
            </h4>
            <div className="product__img">
                <img src={props.content.image} alt="" />
            </div>
            <h3>{props.content.title}</h3>
            <p className="product__description">{props.content.description}</p>
            <form action="">
                <div className="quantity">
                    <label htmlFor="number">Cantidad</label>
                    <input id="number" type="number" />
                </div>
                <input type="submit" value="Reservar" />
            </form>
        </div>
    );
}
export default Product;
