import { useState, useEffect } from "react";

function Hero() {
    const [scrollPosition, setScrollPosition] = useState();

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-links">
                    <a href="#">Acasă <span>/</span></a>
                    <a href="#">Studii pentru adulți <span>/</span></a>
                    <a href="#" className="active-link">Front-end Web Developement</a>
                </div>
                <div className="hero-titles">
                    <h1>Front-end Web Developement</h1>
                    <h2>Învață o nouă profesie pentru a începe o carieră în IT.</h2>
                    <button className="apply">Înscrieți-vă la curs</button>
                </div>
                <div className="banner-image">
                    <div className="banner-inner">
                        <div className="banner-image-container">
                            <picture>
                                <img 
                                    src="https://itstep.md/dist/images/courses-adult/front-end-new/banner-2.webp" 
                                    alt="" 
                                    style={{transform: `translateY(${100 - (scrollPosition * 100 / window.innerHeight)}%)`}}
                                />
                            </picture>
                        </div>
                    </div>
                    <picture>
                        <img src="https://itstep.md/dist/images/courses-adult/front-end-new/banner@2x.webp" alt="" className="computer-img"/>
                    </picture>
                </div>
                <div className="why-to-choose">
                    <div className="why-text">
                        <h1>De ce să alegeți cursul de Front-end development?</h1>
                        <p>Front-end development merită să fie ales din cauza digitalizării globale - aproape că nu mai există companii care să nu fie prezente în mediul online fără un site web, de aceea fiecare are nevoie de un specialist front-end. Astfel această profesie e solicitată în orice țară din lume.</p>
                    </div>
                    <div className="reasons">
                        <div className="reason">
                            <div className="reason-1">
                                <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/about/01.png" alt="" />
                            </div>
                            <p>Obțineți un venit înalt - de la 2.500 USD pe lună deja la nivel Junior</p>
                        </div>
                        <div className="reason">
                            <div className="reason-2">
                                <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/about/02.png" alt="Planet Earth" />
                            </div>
                            <p>Lucrați din orice colț al lumii - fiind un freelancer sau angajat a unei companii.</p>
                        </div>
                        <div className="reason">
                            <div className="reason-3">
                                <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/about/03.png" alt="Computer" />
                            </div>
                            <p>Învățați o profesie nouă pentru a începe o carieră în IT.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default Hero;