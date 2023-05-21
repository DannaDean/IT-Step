function Format() {
    return (
        <section id="format-result">
            <div className="format-result-container">
                <h1>Formatul și prețul cursului</h1>
                <div className="format-div">
                    <div className="format">
                        <h2>Front-end Web Developement</h2>
                        <div className="format-content">
                            <div className="format-item">
                                <h4>Graficul:</h4>
                                <p>De 2 ori pe săptămână/2pereche</p>
                            </div>
                            <div className="format-item">
                                <h4>Durata:</h4>
                                <p>6 luni</p>
                            </div>
                            <div className="format-item">
                                <h4>Vârsta:</h4>
                                <p>15-55 ani</p>
                            </div>
                            <div className="format-item">
                                <h4>Orarul lecției:</h4>
                                <p>9:00 - 12:00 sau 18:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-container">
                        <div className="price-item">
                            <h4>Plata lunară</h4>
                            <div className="price">
                                <span>2 890</span>
                                <p className="month">MDL/lunar</p>
                            </div>
                            <p className="first-m">Lunar</p>
                        </div>
                        <div className="price-item">
                            <h4>Plata simestrială</h4>
                            <div className="price">
                                <span>2 746</span>
                                <p className="month">MDL/lunar</p>
                            </div>
                            <p>La plata <br /> semestrială 8 237 MDL</p>
                        </div>
                        <div className="price-item">
                            <h4>Plata integrală</h4>
                            <div className="price">
                                <span>2 601</span>
                                <p className="month">MDL/lunar</p>
                            </div>
                            <p>La plata <br /> integrală 15 606 MDL</p>
                        </div>
                        <button>Trimite o cerere</button>
                    </div>
                </div>
                <div className="results-container">
                    <h1>Rezultatele studiilor</h1>
                    <h2>După absolvirea cursului de front-end developement, veți:</h2>
                    <ul>
                        <li>Construi pagini web folosind tehnologii moderne HTML5 și CSS3</li>
                        <li>Folosi Bootstrap în designul site-ului web</li>
                        <li>Adapta site-urile pentru diferite dispozitive</li>
                        <li>Gestiona browserele și elementele paginii HTML cu limbajul JavaScript</li>
                        <li>Manipula eficient elementele DOM</li>
                        <li>Utiliza animația de bază și gestiona efectele</li>
                        <li>Crea pagini dinamice care să răspundă la acțiunile utilizatorului</li>
                        <li>Folosi jQuery și plugin-uri jQuery</li>
                        <li>Crea funcții de manipulare pentru diferite evenimente</li>
                        <li>Cunoaște cum să gestionați erorile care apar</li>
                        <li>Înțelege implementarea scripturilor client pentru diferite browsere</li>
                        <li>Utiliza sisteme de control al versiunilor</li>
                        <li>Face cunoștință cu OOP și cu conceptele sale de bază</li>
                        <li>Cunoaște principiile creării formularelor și analiza datele utilizatorilor cu ajutorul expresiilor regulate</li>
                        <li>Înțelege elementele de bază ale muncii în echipă</li>
                        <li>Utiliza AJAX pentru a trimite cereri sincrone și asincrone către server</li>
                        <li>Utiliza notația JSON pentru a transmite date</li>
                        <li>Folosi librăria React</li>
                        <li>Înțelege complexitatea implementării aplicațiilor React</li>
                    </ul>
                </div>
            </div>
        </section>    
    );
};

export default Format;