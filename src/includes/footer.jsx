export default function Footer() {
    return (
        <footer>
            <nav>
                <div className="footerMenu">
                    <div id="omFr" className="menuColum">
                        <a href="" className="menuHeader">
                            <h3>Om Forbrukerrådet</h3>
                        </a>
                        <div className="menuSpacer"></div>
                        <a href="">Om oss</a>
                        <a href="/kontakt-oss">Kontakt oss</a>
                        <a href="">Jobb hos oss</a>
                        <a href="">Personvernerklæring</a>
                    </div>
                    <div id="holdDegOppdatert" className="menuColum">
                        <a href="" className="menuHeader">
                            <h3>Hold deg oppdatert</h3>
                        </a>
                        <div className="menuSpacer"></div>
                        <a href="/siste-nytt">Siste nytt</a>
                        <a href="">Høringssvar</a>
                        <a href="/kontakt-oss/presse">Presse</a>
                    </div>
                    <div id="utvalgteUndersider" className="menuColum">
                        <a href="" className="menuHeader">
                            <h3>Våre nettsider</h3>
                        </a>
                        <div className="menuSpacer"></div>
                        <a href="">
                            Strømpris.no <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </a>
                        <a href="">
                            Finansportalen.no{" "}
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </a>
                    </div>
                </div>
                <div className="footerSocial">
                    <a href="">
                        <i className="fa-brands fa-square-facebook fa-xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-square-twitter fa-xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-square-instagram fa-xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-solid fa-square fa-xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-solid fa-square-envelope fa-xl"></i>
                    </a>
                    <a href="">
                        <i className="fa-solid fa-square fa-xl"></i>
                    </a>
                </div>
            </nav>
        </footer>
    );
}
