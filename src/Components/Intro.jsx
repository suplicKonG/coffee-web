import photo from '../assets/coffee_logo_transparent.png'


function Intro(){
    return(
        <>
    <div className="intro-wrapper">
        <div className="intro">
            <h2>Vítáme vás v naší kavárně</h2>
            <p className="p-1">Jsme kavárna, kde je klid a pohoda. <br /> Máme ideální prostředí pro Váš klid a Vaši práci. <br />Čekají Vás zde domácí zákusky a káva.</p>

            <p className="p-2">Naše kavárna <i>U Klidného Hrníčku</i> otevřela své dveře v roce 2021 s jednoduchým cílem – <br />vytvořit místo, kde si každý může odpočinout od ruchu všedního dne. <br /></p>
            <p className="p-2">Nabízíme výběrovou kávu z lokálních pražíren, domácí zákusky pečené s láskou a příjemné prostředí, které láká k posezení – <br /> ať už přijdete s přáteli, s knihou nebo jen tak. <br /></p>
            <p className="p-2">Interiér laděný do teplých tónů, klidná hudba a úsměvavý personál tvoří atmosféru, ve které se budete cítit jako doma.</p>
        </div>

        <div className="intro-image">
            <img src={photo} alt="Fotka"></img>
        </div>
    </div>
        </>
    )
}

export default Intro;