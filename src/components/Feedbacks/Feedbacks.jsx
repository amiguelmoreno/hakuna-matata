const feedbacks = [
    {
        description: "",
        person: "Slide 1",
    },
    {
        description: "images/slide_3.jpg",
        person: "Slide 2",
    },
    {
        description: "images/slide_4.jpg",
        person: "Slide 3",
    },
];

function Feedbacks() {
    return (
        <nav className="navbar">
            <button>Feedbacks</button>
            <button>Productos</button>
            <button>Reseñas</button>
            <button>¿Dónde estamos?</button>
        </nav>
    );
}
export default Feedbacks;
