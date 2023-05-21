import { useState } from "react";

function Faqs() {
    const [selected, setSelected] = useState(0);

    const toggle = (i) => {
        if(selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    
    return (
        <section id="faq">
            <div className="faq-container">
                <div className="faq-bg-container">
                    <div className="redy-for-studies">
                        <div className="ready-text">
                            <h1>Sunteți gata de studii?</h1>
                            <p>Lăsați-ne o solicitare - revenim cu un apel pentru a vă oferi toate detaliile despre programul de studii.</p>
                            <button>Trimite o cerere</button>
                        </div>
                        <div className="raedy-img">
                            <img src="https://itstep.md/dist/images/courses-adult/front-end-new/form/form.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div className="questions-container">
                    <h1>Întrebări frecvente</h1>
                    <div className="questions">
                        {
                            data.map((item, i) => (
                                <div className="question">
                            <div className="name" onClick={() => toggle(i)}>
                                <p className="question-name">{item.question}</p>
                                <i class={selected === i ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                            </div>
                            <div class={selected === i ? "answer show" : "answer"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>    
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </section>    
    );
};

const data = [
    {
        question: "Pentru a mă înscrie la studii am nevoie de cunoștințe în domeniul IT?",
        answer: "Pentru a vă înscrie la studii trebuie să fiți un utilizator încrezut al calculatorului, dacă nu, atunci puteți trece cursul de inițiere <span>”Utilizarea calculatorului”</span>, din cadrul Academiei."
    },
    {
        question: "Există vre-o limită de vârstă pentru a mă înscrie la curs?",
        answer: "Oricine de la vârsta de 15 ani poate studia la Academie, indiferent de studiile de bază. La admitere este obligatorie testarea informațiilor generale din domeniul IT."
    },
    {
        question: "Ce diplomă sau certificat voi primi după absolvirea studiilor?",
        answer: "Diploma STEP IT Academy este în două limbi: română și engleză, de asemenea primiți certificate de la Microsoft, Cisco, Adobe sau Autodesk, în funcție de cursul ales."
    },
    {
        question: "Dacă nu am un computer acasă, îmi pot face temele la Academie?",
        answer: "Da. Oricând. Filialele Academiei sunt deschise: Luni - Vineri: 09:00 - 18:00"
    },
    {
        question: "Ce documente trebuie să prezint la admitere?",
        answer: "Pentru a vă înscrie la studii, aveți nevoie de buletinul de identitate, o fotografie 3x4 și suma de achitare pentru prima luna de studii sau pentru forma de plăți selectată (lunară, trimestrială, semestrială sau integrală). Dacă aveți vârsta mai mică de 18 ani, pentru a semna contractul de studii, trebuie să fiți însoțit de către unul din părinți."
    },
    {
        question: "Este posibil să studiez online?",
        answer: "Dacă sunteți interesat de studiile la distanță, STEP IT Academy vă oferă forma de studii online."
    },
    {
        question: "Sunt teme pentru acasă?",
        answer: "Toți studenții din cadrul Academiei au acces la agenda electronică MyStat, unde sunt plasate toate materialele necesare pentru studii, orarul cursului, inclusiv și tema pentru acasă. Acesta nu este obligatorie, dar vă recomandăm să o îndepliniți, deoarece vă ajută să aplicați în practică cunoștințele acumulate din cadrul cursului."
    }
]

export default Faqs;