import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Map from "./components/Map/Map";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <main>
                <Services />
                <Products />
                <Feedbacks />
                <Map />
            </main>
            <Footer />
            <WhatsappBtn />
        </div>
    );
}

export default App;
