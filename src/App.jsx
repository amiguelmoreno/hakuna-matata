import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Services from "./components/Services/Services";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Nav></Nav>
            <Services></Services>
            <Feedbacks></Feedbacks>
            <WhatsappBtn></WhatsappBtn>
        </div>
    );
}

export default App;
