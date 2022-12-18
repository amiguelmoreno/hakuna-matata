function Service(props) {
    return (
        <div className="service">
            <div className="service__img">
                <img src={props.content.image} alt="" />
            </div>
            <h3>{props.content.title}</h3>
            <p>{props.content.description}</p>
        </div>
    );
}
export default Service;
