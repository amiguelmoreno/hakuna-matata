import { useState } from "react";
import hakunaLogo from "./assets/hakuna-matata-logo.png";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>
                <img className="logo" src={hakunaLogo} alt="" />
            </div>
            <h1>Hakuna Matata</h1>
            <div className="card">
                <p>Página en construcción</p>
            </div>
        </div>
    );
}

export default App;
