function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    <div className="courses">
                        <h3>Cursuri</h3>
                        <ul>
                            <li>
                                <a href="#">Programare</a>
                            </li>
                            <li>
                                <a href="#">Design</a>
                            </li>
                            <li>
                                <a href="#">Rețele și cibernetică</a>
                            </li>
                            <li>
                                <a href="#">Utilizarea PC</a>
                            </li>
                            <li>
                                <a href="#">Cursuri de IT pentru copii</a>
                            </li>
                            <li>
                                <a href="#">Tabere</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about-it">
                        <h3>Despre STEP IT Academy</h3>
                        <ul>
                            <li>
                                <a href="#">Despre Academie</a>
                            </li>
                            <li>
                                <a href="#">Contacte</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <h3>Contacte</h3>
                        <div className="adresses">
                            <div className="address">
                                <ul>
                                    <li><a href="#">Bd. Decebal, 139, etajul 3 <br />Fliala Botanica</a></li>
                                    <li><a href="#">+373 (22) 854-680</a></li>
                                    <li><a href="#">+373 (22) 854-688</a></li>
                                    <li><a href="#">infomd@itstep.org</a></li>
                                    <li>Luni-Vineri: 9:00-18:00 <br />Sâmbătă: 9:00-13:30 <br />Duminică: zi liberă</li>
                                </ul>
                            </div>
                            <div className="address">
                                <ul>
                                    <li><a href="#">Bd. Mircea cel Bătrân, 42/3, etajul 3 <br />Fliala Botanica</a></li>
                                    <li><a href="#">+373 (22) 854-680</a></li>
                                    <li><a href="#">+373 (22) 854-688</a></li>
                                    <li><a href="#">infomd@itstep.org</a></li>
                                    <li>Luni-Vineri: 9:00-18:00 <br />Sâmbătă: 10:00-13:30 <br />Duminică: zi liberă</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-links-short">
                    <div className="link">
                        <p>Cursuri</p>
                        <span>+</span>
                    </div>
                    <div className="link">
                        <p>Despre STEP IT Academy</p>
                        <span>+</span>
                    </div>
                    <div className="link">
                        <p>Contacte</p>
                        <span>+</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="copy-social">
                    <div className="copyright">
                        <p>&copy; 1999-2023 STEP IT Academy</p>
                    </div>
                    <div className="socials">
                        <div className="social">
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="social">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>    
    );
};

export default Footer;