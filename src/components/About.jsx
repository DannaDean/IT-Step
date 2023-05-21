import CountUp from 'react-countup';
import { useState, useRef, useEffect } from 'react';

function About() {
    const countUpRef = useRef([]);
    const [isInView, setIsInView] = useState(false);

    const formatNumber = (number) => {
        if (number == null) {
            return ''; // or any default value
          }
          return String(number.toFixed(0)); // convert to string without decimals and commas
    }
    

    useEffect(() => {
        const handleScroll = () => {
            const topPos = countUpRef.current.getBoundingClientRect().top;
            const bottomPos = countUpRef.current.getBoundingClientRect().bottom;

            setIsInView(topPos < window.innerHeight && bottomPos >= 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };   
    }, [])

    return (
            <section id="about-us" ref={countUpRef}>
            <div className="bg-container">
            
                <div className="about-us-container">
                    <div className="about-us-text">
                        <h1>De ce să ne alegeți pe noi?</h1>
                        <p>STEP IT Academy activează din 1999, când sfera IT abia începea să se dezvolte și să câștige popularitate. De atunci avem primii absolvenți: programatori, designeri grafici și de interior, specialiști în rețea etc. Astăzi oferim studenților abilitățile de care au nevoie angajatorii și afacerile moderne — doar ceea ce este necesar, fără multă teorie. Angajatorii au nevoie mai mult de competențele și experiența Dvs. în rezolvarea sarcinilor de lucru și în implementarea proceselor de afaceri.</p>
                    </div>
                    <div className="about-us-numbers">
                        <div className="number">
                        <CountUp start={isInView ? null : 0} end={21} duration={2.5} />
                            <p>Țări</p>
                        </div>
                        <div className="number">
                        <CountUp start={isInView ? null : 0} end={101} duration={2.5} />
                            <p>Filiale</p>
                        </div>
                        <div className="number">
                        <CountUp start={isInView ? null : 0} end={75000} duration={2.5} formattingFn={formatNumber}/>
                            <p>Studenți</p>
                        </div>
                        <div className="number">
                        <CountUp start={isInView ? null : 0} end={2900} duration={2.5} formattingFn={formatNumber}/>
                            <p>Lectori</p>
                        </div>
                        <div className="number">
                        <CountUp start={isInView ? null : 0} end={250000} duration={2.5} formattingFn={formatNumber} />
                            <p>Absolvenți</p>
                        </div>
                    </div>
                    <div className="about-us-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RvTkWsEyfS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

