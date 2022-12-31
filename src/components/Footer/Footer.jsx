function Footer() {
    let date = new Date();

    return (
        <p className="footer">
            &#169;Copyright {date.getFullYear()} <b>BusinessLifters</b>
        </p>
    );
}
export default Footer;
