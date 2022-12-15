import hakunaLogo from "../../assets/hakuna-matata-logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={hakunaLogo} alt="hakuna matata logo" />
            </div>
            <div className="header__title">
                <h1>HAKUNA MATATA</h1>
                <h2>PELUQUERIA CANINA</h2>
            </div>
        </header>
    );
}

export default Header;
