import { useState } from 'react';
import './Navbar.scss';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [menuIsActive, setMenuIsActive] = useState({});

    const handleClick = event => {
        setIsActive(curent => !curent)
    }

    const handleMenuClick = (index) => {
        setMenuIsActive(curent => ({
            ...curent, 
            [index]: !curent[index]
        }));
    }

    return (
    <header className="navbar">
        <div className="navbar-container">
            <div className="logo-img">
                <img src="https://fsx1.itstep.org/api/v1/files/UfQ9zYILoBOikC-PlHEYFOfwiHXerFxd" alt="" />
            </div>
            <div className="links-contacts">
                <nav className="links">
                    <ul>
                        <li className='educ'>
                            <a href="#">
                                Educație
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <div className="corses-dropdown first-dropdown">
                                <div className="inner-dropdown">
                                    <ul>
                                        <h3>PROFESII</h3>
                                        <li>
                                            <a href="#">Elaborare Software</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h3>Cursuri</h3>
                                        <li>
                                            <a href="#">Testare Software (QA)</a>
                                        </li>
                                        <li>
                                            <a href="#">Game Developement</a>
                                        </li>
                                        <li>
                                            <a href="#">Design Interior</a>
                                        </li>
                                        <li>
                                            <a href="#">Design Grafic</a>
                                        </li>
                                        <li>
                                            <a href="#">Programare Java</a>
                                        </li>
                                        <li>
                                            <a href="#">Rețele și Securitate Cibernetică</a>
                                        </li>
                                        <li>
                                            <a href="#">Web Developement Full Stack</a>
                                        </li>
                                        <li>
                                            <a href="#">Utilizarea Calculatorului</a>
                                        </li>
                                        <li>
                                            <a href="#">Front-end Web Developement</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h3>Programe Pentru Copii</h3>
                                        <li>
                                            <a href="#">Junior STEP IT Academy (7-14 ani)</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h3>Tabere</h3>
                                        <li>
                                            <a href="#">Tabără IT de vară în Chișinău</a>
                                        </li>
                                        <li>
                                            <a href="#">Tabără IT de iarnă în Chișinău</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">Evenimente</a>
                        </li>
                        <li className='about-academy'>
                            <a href="#">
                                Despre academie
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <div className="corses-dropdown second-dropdown">
                                <div className="inner-dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">Despre academie</a>
                                        </li>
                                        <li>
                                            <a href="#">Testimonale</a>
                                        </li>
                                        <li>
                                            <a href="#">Posturi vacante</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contacte</a>
                        </li>
                    </ul>
                </nav>
                <div className="contacts">
                    <ul>
                        <li className='country'>
                            <a href="#">
                                Chișinău
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <div className="third-dropdown">
                                <div className="inner-dropdown">
                                    <div className="mold">
                                        <h1>Moldova</h1>
                                        <p>Alege altă țară</p>
                                    </div>
                                    <div className="city">
                                        <a href="#">Bălți</a>
                                        <a href="#">Comrat</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='language'>
                            <a href="#">
                                RO
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <div className="fourth-dropdown">
                                <div className="inner-dropdown">
                                    <a href="#">RU</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="contact-number">
                        <button className='number-btn'>
                            +373 (22) 854-680
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                        <div className="fifth-dropdown">
                                <div className="inner-dropdown">
                                    <div className="row">
                                        <div className="item">
                                            <h3>Bd. Decebal, 139, etajul 3</h3>
                                            <h4>Filiala Botanica</h4>
                                            <div className="item-contact">
                                                <h4>Informații și înscrieri</h4>
                                                <a href="#">+373 (22) 854-680</a>
                                                <a href="#">+373 (21) 854-688</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Suport Studenți</h4>
                                                <a href="#">+373 (22) 854-682</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Contabilitate</h4>
                                                <a href="#">+373 (22) 854-693</a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <h3>Bd. Mircea cel Bătrân, 42/3</h3>
                                            <h4>Filiala Ciocana</h4>
                                            <div className="item-contact">
                                                <h4>Informații și înscrieri</h4>
                                                <a href="#">+373 (22) 854-680</a>
                                                <a href="#">+373 (21) 854-688</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Suport Studenți</h4>
                                                <a href="#">+373 (22) 854-682</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Contabilitate</h4>
                                                <a href="#">+373 (22) 854-693</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <h3>Str. Alba Iulia, 139, 190/1</h3>
                                            <h4>Filiala Buiucani</h4>
                                            <div className="item-contact">
                                                <h4>Informații și înscrieri</h4>
                                                <a href="#">+373 (22) 854-680</a>
                                                <a href="#">+373 (21) 854-688</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Suport Studenți</h4>
                                                <a href="#">+373 (22) 854-682</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Contabilitate</h4>
                                                <a href="#">+373 (22) 854-693</a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <h3>Str-la. Teatru 6A</h3>
                                            <h4>Filiala Centru</h4>
                                            <div className="item-contact">
                                                <h4>Informații și înscrieri</h4>
                                                <a href="#">+373 (22) 854-680</a>
                                                <a href="#">+373 (21) 854-688</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Suport Studenți</h4>
                                                <a href="#">+373 (22) 854-682</a>
                                            </div>
                                            <div className="item-contact">
                                                <h4>Contabilitate</h4>
                                                <a href="#">+373 (22) 854-693</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <h3>Str. Victoriei, 119, etajul 3</h3>
                                            <h4>Filiala orașul Comrat</h4>
                                            <div className="item-contact">
                                                <h4>Informații și înscrieri</h4>
                                                <a href="#">+373 (298) 81-401</a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <h3>Str. Alexandru cel Bun, etajul 4</h3>
                                            <h4>Filiala orașul Bălți</h4>
                                            <div className="item-contact">
                                                <h4>Informații și înscrieri</h4>
                                                <a href="#">+373 (231) 85-641</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-btn">
                                        <button>
                                            <i className="fa-solid fa-phone-volume"></i>
                                            Solicită un apel
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div 
                id="menu" 
                className={isActive ? 'open' : ""}
                onClick={handleClick} 
            >
                <div className="line"></div>
             </div>
             {isActive && (
                    <div className="mobile-menu">
                        <div className="mobile-nav">
                            <h4>Chișinău</h4>
                            <div className="lang">
                                <p>RU</p>
                                <p>RO</p>
                            </div>
                        </div>
                        <ul className='main-list'>
                            <li>
                                <a href="#">
                                    Studii pentru adulți
                                    <i 
                                        className={menuIsActive[0] ? 'fa-solid fa-plus open-menu' : "fa-solid fa-plus"}
                                        onClick={() => handleMenuClick(0)}
                                    ></i>
                                </a>
                                <ul className={menuIsActive[0] ? 'second-list menu-open' : 'second-list'}>
                                    <li><a href="#">Elaborare Software</a></li>
                                    <li><a href="#">Testare Software(QA)</a></li>
                                    <li><a href="#">Game Developement</a></li>
                                    <li><a href="#">Design Interior</a></li>
                                    <li><a href="#">Design Grafic</a></li>
                                    <li><a href="#">Programare Java</a></li>
                                    <li><a href="#">Rețele și Securitate Cibernetica</a></li>
                                    <li><a href="#">Web Developement Full Stack</a></li>
                                    <li><a href="#">Utilizarea calculatorului</a></li>
                                    <li><a href="#">Front-end Web Developement</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    Studii pentru copii
                                    <i 
                                        className={menuIsActive[1] ? 'fa-solid fa-plus open-menu' : "fa-solid fa-plus"}
                                        onClick={() => handleMenuClick(1)}
                                    ></i>
                                </a>
                                <span href="#" className={menuIsActive[1] ? 'second-list-jun menu-open' : 'second-list'}>Junior STEP IT Academy (7-14 ani)</span>
                            </li>
                            <li>
                                <a href="#">
                                    Tabere IT
                                    <i 
                                        className={menuIsActive[2] ? 'fa-solid fa-plus open-menu' : "fa-solid fa-plus"}
                                        onClick={() => handleMenuClick(2)} 
                                    ></i>
                                </a>
                                <ul className={menuIsActive[2] ? 'second-list menu-open' : 'second-list'}>
                                    <li><a href="#">Tabără IT de vară în Chișinău</a></li>
                                    <li><a href="#">Tabără IT de iarnă în Chișinău</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Evenimente</a>
                            </li>
                            <li>
                                <a href="#">
                                    Despre academie
                                    <i 
                                        className={menuIsActive[3] ? 'fa-solid fa-plus open-menu' : "fa-solid fa-plus"}
                                        onClick={() => handleMenuClick(3)}
                                    ></i>
                                </a>
                                <ul className={menuIsActive[3] ? 'second-list menu-open' : 'second-list'}>
                                    <li>
                                        <a href="#">Despre academie</a>
                                        <a href="#">Testimonale</a>
                                        <a href="#">Posturi vacante</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Posturi Vacante</a>
                            </li>
                        </ul>
                    </div>
                )}
        </div>
    </header>    
    )
}

export default Navbar;