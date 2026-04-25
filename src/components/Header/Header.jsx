import hakunaLogo from "../../assets/hakuna-matata-logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={hakunaLogo} alt="Hakuna Matata logo" />
            </div>
            <div className="header__title">
                <h1>HAKUNA MATATA</h1>
                <h2>PELUQUERÍA CANINA</h2>
            </div>
            <p className="header__tagline">Tu mascota merece lo mejor ✨</p>
        </header>
    );
}

export default Header;
