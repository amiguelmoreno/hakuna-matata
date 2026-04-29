function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img
                    src="/hakuna-matata-logo.webp"
                    alt="Hakuna Matata logo"
                    width="400"
                    height="400"
                    fetchpriority="high"
                    decoding="sync"
                />
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
