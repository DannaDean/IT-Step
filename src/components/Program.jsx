import { useState, useEffect} from "react";
import Img1 from "../img/code1.webp"
import Img2 from "../img/code02.webp"
import Img3 from "../img/code03.webp"

function Program() {
    const [image, setImage] = useState(0);
    const images = [Img1, Img2, Img3];

    useEffect(() => {
        function handleScroll() {
            const container = window.scrollY;
                if (container < 3200) {
                    setImage(0);
                } else if (container < 4000) {
                    setImage(1);
                } else{
                    setImage(2);
                }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="program">
            <div className="program-container">
                <div className="for-what-container">
                    <h1>Pentru cine este acest curs?</h1>
                    <p className="for-what-text">Front-end este o direcție deschisă unei persoane cu orice experiență profesională. Nu este necesar să aveți o pregătire în domeniul IT pentru a deveni un dezvoltator front-end este suficient să fiți motivat și să aveți suficient timp pentru a studia și pune în practică cunoștințele pe care le-ați dobândit.</p>
                    <div className="people">
                        <div className="student">
                            <h3>Specialiști ai altor profesii</h3>
                            <p>Dacă sunteți nemulțumit de cariera și câștigurile Dvs. actuale, cursul de front-end development vă va oferi posibilitatea de a însuși o nouă profesie profitabilă din industria IT.</p>
                        </div>
                        <div className="student">
                            <h3>Studenți</h3>
                            <p>Obțineți o nouă profesie în timp ce studiați la universitate. Dezvoltați-vă abilitățile practice și câștigați bani fiind student.</p>
                        </div>
                        <div className="student">
                            <h3>Specialiști IT</h3>
                            <p>Dezvoltați-vă cunoștințele în domeniul IT și obțineți noi abilități, solicitate atât pe piața internă, cât și internațională.</p>
                        </div>
                    </div>
                </div>

                <div className="program-moving-container" style={{ height: '100%' }}>
                    <h1>Programa cursului</h1>
                    <div className="styky-container">
                        <div className="moving-text">
                            <div className="text-content">
                                <div className="title-logo">
                                    <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/program/HTML.png" alt="HTML" />
                                    <h2>Introducere în Web. Structura HTML</h2>
                                </div>
                                <ul>
                                    <li>Introducere în limbaje de marcare</li>
                                    <li>Limbaj de marcare HTML</li>
                                    <li>Structura documentelor HTML5</li>
                                    <li>Etichetă – element de bază al structurii HTML</li>
                                    <li>Reguli pentru scrierea etichetelor și atributelor în HTML5</li>
                                    <li>Diferența de sintaxă dintre HTML4, XHTML, HTML5</li>
                                    <li>Clasificarea etichetelor: liniare și bloc, formatare logică și fizică</li>
                                    <li>Principalele erori în scrierea etichetelor</li>
                                    <li>Codificări de pagină și etichete meta</li>
                                    <li>Model de formatare a textului</li>
                                    <li>Elemente p, h1…h6</li>
                                    <li>Alinierea textului în elementele de bloc: atributul align</li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="title-logo">
                                    <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/program/CSS.png" alt="HTML" />
                                    <h2>Formatarea cu CSS</h2>
                                </div>
                                <ul>
                                    <li>CSS – foi de stil în cascadă</li>
                                    <li>Etichete fără formatare: bloc, liniară</li>
                                    <li>Etichete fără formatare: bloc, liniară</li>
                                    <li>Utilizarea atributelor class și id pentru a specifica stilurile</li>
                                    <li>Utilizare foi de stil CSS externe</li>
                                    <li>Proprietăți CSS suplimentare pentru formatarea textului</li>
                                    <li>Creare liste</li>
                                    <li>Creare liste imbricate</li>
                                    <li>Formatarea listelor cu CSS</li>
                                    <li>Liste de definiții</li>
                                    <li>Gestionarea indentărilor</li>
                                    <li>Materialize</li>
                                    <li>Less</li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="title-logo">
                                    <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/program/JS.png" alt="HTML" />
                                    <h2>JavaScript și jQuery</h2>
                                </div>
                                <ul>
                                    <li>Script-uri pe partea clientului</li>
                                    <li>Diferența dintre JavaScript și Java, JScript, ECMAScript</li>
                                    <li>Conceptul Document Object Model</li>
                                    <li>Conceptul Browser Object Model</li>
                                    <li>Inserarea JavaScript în documente HTML</li>
                                    <li>Editoare de cod JavaScript</li>
                                    <li>Etichetă noscript</li>
                                    <li>Variabile. Reguli de denumire a variabilelor</li>
                                    <li>Tipuri de date. Operatori</li>
                                    <li>Condiții. Cicluri. Funcții</li>
                                    <li>Obiectul arguments</li>
                                    <li>Cuvântul cheie ”this”</li>
                                    <li>Recursivitate</li>
                                    <li>Introducere în programarea orientată pe obiecte</li>
                                    <li>Procesarea evenimentelor</li>
                                    <li>Browser Object Model. Document Object Model</li>
                                    <li>Interacțiunea cu DOM</li>
                                    <li>Formulare</li>
                                    <li>Validarea formularelor. Utilizarea cookie-urilor</li>
                                    <li>Desenarea cu Canvas, suport multimedia</li>
                                    <li>JSON, Ajax</li>
                                    <li>ECMAScript 6</li>
                                    <li>Introducere în jQuery</li>
                                    <li>Evenimente și jQuery</li>
                                    <li>Stiluri și animație</li>
                                    <li>AJAX și jQuery</li>
                                    <li>Utilizarea plugin-urilor jQuery</li>
                                </ul>
                            </div>
                            <div className="text-content">
                                <div className="title-logo">
                                    <div className="logos">
                                        <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/program/Reackt.png" alt="React" />
                                        <img src="https://itstep.md/dist/images/src/images/courses-adult/front-end-new/program/Angular.png" alt="Angular" />
                                    </div>
                                    <h2>JavaScript și jQuery</h2>
                                </div>
                                <ul>
                                    <li>Introducere în Node JS</li>
                                    <li>Utilizare Node JS</li>
                                    <li>Introducere în React</li>
                                    <li>Versiuni React</li>
                                    <li>Crearea unui proiect React</li>
                                    <li>Analiza și scrierea JSX</li>
                                    <li>Creare componente</li>
                                    <li>Stilizare componente</li>
                                    <li>Crearea componentelor pe baza claselor</li>
                                    <li>Transmitere proprietăți</li>
                                    <li>Lifecycle methods</li>
                                    <li>Adăugare biblioteci UI React Hooks</li>
                                    <li>Testarea aplicației</li>
                                </ul>
                            </div>
                        </div>
                        <div className="fix-img-cont">
                            <div className="fix-img-sticky">
                                <div className="fixed-image">
                                    <img src={images[image]} alt="" />
                                </div>
                                <div className="fixed-background"></div>
                            </div>
                        </div>
                    </div>
                    <div className="program-btn">
                        <button>Descărcați programul</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Program;