import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Services from "./components/Services/Services";
import Map from "./components/Map/Map";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <Nav></Nav>
                <Services></Services>
                <Feedbacks></Feedbacks>
                <Map></Map>
                <WhatsappBtn></WhatsappBtn>
            </div>
        </BrowserRouter>
    );
}

export default App;
