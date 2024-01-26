import bg from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer className="footer p-10  text-neutral mx-auto" style={{backgroundImage:`url(${bg})` ,backgroundSize:"cover", backgroundPosition:"center"}}>
            <nav>
                <header className="footer-title text-lg">SERVICES</header>
                <a className="link link-hover">Emergency Checkup</a>
                <a className="link link-hover">Monthly Checkup</a>
                <a className="link link-hover">Weekly Checkup</a>
                <a className="link link-hover">Deep Checkup</a>
            </nav>
            <nav>
                <header className="footer-title text-lg">ORAL HEALTH</header>
                <a className="link link-hover">Fluoride Treatment</a>
                <a className="link link-hover">Cavity Filling</a>
                <a className="link link-hover">Teath Whitening</a>
            </nav>
            <nav>
                <header className="footer-title text-lg">OUR ADDRESS</header>
                <a className="link link-hover">New York - 101010 Hudson</a>
            </nav>
        </footer>
    );
};

export default Footer;