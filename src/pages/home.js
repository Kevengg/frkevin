import style from "../css/home.module.css";
import React from "react";
import { Rettigheter, GuideBtn, GrayBox, Nyheter } from "../component";

// img
import manipulerendeDesign from "../img/manipulerende_design.jpg";
import forbrukerrtilsynet from "../img/Forbrukerrtilsynet.png";
// import frLogo from "../img/forbrukerradet_logo.svg";
// import frLogoSmall from "../img/forbrukerradet_logo_symbol.svg";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default function Home() {
    return (
        <main>
            {/* <!-- ^ main ^ --> */}
            <div id="toppSection">
                <div>
                    <div id="toppSectionContent">
                        <h1>
                            Vi veileder forbrukere, og påvirker samfunnet i en forbrukervennlig
                            retning.
                        </h1>
                    </div>
                </div>
                <picture>
                    <img src="https://picsum.photos/id/435/1300/520" alt=""></img>
                </picture>
            </div>
            {/* <!-- v maxWidth v --> */}
            <div className="maxWidth">
                <GuideBtn style={{ marginTop: "-150px" }}></GuideBtn>

                {/* <!-- strømpris og finansportalen --> */}

                <div id={style.tipsWrap}>
                    <a className={style.tips} href="">
                        <div>
                            <h2>Finn beste strømavtale</h2>
                        </div>
                        <div>
                            <i className="fa-solid fa-chevron-right fa-xl gridRowSpan2"></i>
                        </div>
                    </a>

                    <a className={style.tips} href="#">
                        <div>
                            <h2>Tips og råd for bedre privatøkonomi</h2>
                        </div>
                        <div>
                            <i className="fa-solid fa-chevron-right fa-xl gridRowSpan2"></i>
                        </div>
                    </a>
                </div>

                {/* <!-- brukt til jul --> */}
                <div className={style.hero}>
                    <h2>Brukt til jul?</h2>
                    <a
                        className={style.heroBtn}
                        tabIndex="0"
                        style={{ color: "var(--site-text-color)" }}
                    >
                        Rettigheter for bruktkjøp
                        <i className="fa-solid fa-chevron-right fa-xs"></i>
                    </a>
                </div>

                {/* <!-- tips og rettigheter --> */}
                <Rettigheter></Rettigheter>

                {/* <!-- siste nytt --> */}
                <Nyheter header="Siste nytt"></Nyheter>

                {/* <!-- grayBox TESTER --> */}
                <GrayBox
                    topic="Tester"
                    header="Forbrukerrådets tester"
                    content="Det skal være lett å velge miljøvennlig, også når du må kjøpe noe nytt.
                            Våre tester skal hjelpe deg å ta gode valg, enten du er opptatt av
                            miljø, pris eller kvalitet."
                    linkBtn={[
                        {
                            content: "Se alle våre tester",
                            chevron: true,
                            href: "/tester",
                        },
                    ]}
                ></GrayBox>

                {/* <!-- grayBox Right Vår politikk--> */}
                <GrayBox
                    topic="Forbrukerpolitikk"
                    header="Vår politikk"
                    content="Vi jobber aktivt med å påvirke myndigheter og næringsliv i en
                    forbrukervennlig retning gjennom dialog, påvirkningsarbeid og
                    utredninger"
                    flip={true}
                    linkBtn={[
                        {
                            content: "Les mer om vår forbrukerpolitikk",
                            chevron: true,
                            href: "/forbrukerpolitikk",
                        },
                    ]}
                ></GrayBox>

                {/* <!-- grayBox Finn beste tilbud --> */}

                <GrayBox
                    topic="Spar penger"
                    header="Finn beste tilbud"
                    content="Vi sammenligner tilbudene i markedet, slik at du kan ta gode valg."
                    linkBtn={[
                        {
                            content: "Boliglån",
                            chevron: true,
                        },
                        {
                            content: "Bankinnskudd",
                            chevron: true,
                        },
                        {
                            content: "Fond",
                            chevron: true,
                        },
                        {
                            content: "Strøm",
                            chevron: true,
                        },
                        {
                            content: "Billån",
                            chevron: true,
                        },
                        {
                            content: "Pensjon",
                            chevron: true,
                        },
                    ]}
                ></GrayBox>
            </div>
        </main>
    );
}
