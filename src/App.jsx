import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Map from "./components/Map/Map";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Nav></Nav>
            <Services></Services>
            <Products></Products>
            <Feedbacks></Feedbacks>
            <Map></Map>
            <WhatsappBtn></WhatsappBtn>
        </div>
    );
}

export default App;
