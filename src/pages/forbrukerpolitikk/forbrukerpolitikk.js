import styles from "../../css/forbrukerpolitikk.module.css";
import { useState } from "react";
import AlleOmeraader from "./alle_omeraader";
import Berekraft from "./berekraft";
import DigitaleRettigheter from "./digitale_rettigheter";
import Okonomi from "./okonomi";
import Forbrukerretigheter from "./forbrukerretigheter";
import Strom from "./strom";
import Bolig from "./bolig";
import Mat from "./mat";
import { ToppSection } from "../../component";

export default function Forbukerpolitikk(props) {
    function select(id) {
        document.getElementById(
            "alleOmeraader"
        ).className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById(
            "berekraft"
        ).className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById(
            "digitaleRettigheter"
        ).className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById("okonomi").className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById(
            "forbrukerretigheter"
        ).className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById("strom").className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById("bolig").className = `${styles.selectBtn} ${styles.selectBtnOff}`;
        document.getElementById("mat").className = `${styles.selectBtn} ${styles.selectBtnOff}`;

        document.getElementById(id).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
        if (id === "alleOmeraader") {
            setPage(<AlleOmeraader />);
        } else if (id === "berekraft") {
            setPage(<Berekraft />);
        } else if (id === "digitaleRettigheter") {
            setPage(<DigitaleRettigheter />);
        } else if (id === "okonomi") {
            setPage(<Okonomi />);
        } else if (id === "forbrukerretigheter") {
            setPage(<Forbrukerretigheter />);
        } else if (id === "strom") {
            setPage(<Strom />);
        } else if (id === "bolig") {
            setPage(<Bolig />);
        } else if (id === "mat") {
            setPage(<Mat />);
        }
    }

    function directLink() {
        if (props.select) {
            document.getElementById(
                "alleOmeraader"
            ).className = `${styles.selectBtn} ${styles.selectBtnOff}`;
            if (props.select.toLowerCase() === "bærekraft") {
                document.getElementById(
                    "berekraft"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <Berekraft />;
            } else if (props.select.toLowerCase() === "digitale_rettigheter") {
                document.getElementById(
                    "digitaleRettigheter"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <DigitaleRettigheter />;
            } else if (props.select.toLowerCase() === "økonomi") {
                document.getElementById(
                    "okonomi"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <Okonomi />;
            } else if (props.select.toLowerCase() === "forbrukerretigheter") {
                document.getElementById(
                    "forbrukerretigheter"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <Forbrukerretigheter />;
            } else if (props.select.toLowerCase() === "strom") {
                document.getElementById(
                    "strom"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <Strom />;
            } else if (props.select.toLowerCase() === "bolig") {
                document.getElementById(
                    "bolig"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <Bolig />;
            } else if (props.select.toLowerCase() === "mat") {
                document.getElementById(
                    "mat"
                ).className = `${styles.selectBtn} ${styles.selectBtnOn}`;
                return <Mat />;
            }
        }
        return <AlleOmeraader></AlleOmeraader>;
    }

    const [page, setPage] = useState(directLink());

    function openSelectedFromLink(id) {
        if (id === "openAlleOmeraader") {
            select("alleOmeraader");
        } else if (id === "openBerekraft") {
            select("berekraft");
        } else if (id === "openDigitaleRettigheter") {
            select("digitaleRettigheter");
        } else if (id === "openoOkonomi") {
            select("okonomi");
        } else if (id === "openForbrukerretigheter") {
            select("forbrukerretigheter");
        } else if (id === "openStrom") {
            select("strom");
        } else if (id === "openBolig") {
            select("bolig");
        } else if (id === "openMat") {
            select("mat");
        }
        document.getElementById("openAlleOmeraader").tabIndex = -1;
        document.getElementById("openBerekraft").tabIndex = -1;
        document.getElementById("openDigitaleRettigheter").tabIndex = -1;
        document.getElementById("openoOkonomi").tabIndex = -1;
        document.getElementById("openForbrukerretigheter").tabIndex = -1;
        document.getElementById("openStrom").tabIndex = -1;
        document.getElementById("openBolig").tabIndex = -1;
        document.getElementById("openMat").tabIndex = -1;
    }
    return (
        <main>
            <div
                id="openAlleOmeraader"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openAlleOmeraader")}
            ></div>
            <div
                id="openBerekraft"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openBerekraft")}
            ></div>
            <div
                id="openDigitaleRettigheter"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openDigitaleRettigheter")}
            ></div>
            <div
                id="openoOkonomi"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openoOkonomi")}
            ></div>
            <div
                id="openForbrukerretigheter"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openForbrukerretigheter")}
            ></div>
            <div
                id="openStrom"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openStrom")}
            ></div>
            <div
                id="openBolig"
                tabIndex="0"
                onFocus={() => openSelectedFromLink("openBolig")}
            ></div>
            <div id="openMat" tabIndex="0" onFocus={() => openSelectedFromLink("openMat")}></div>
            <ToppSection
                path={["Forbrukerpolitikk"]}
                header="Forbrukerpolitikk"
                content="Forbrukerrådet jobber aktivt med å påvirke myndigheter og næringsliv i en forbrukervennlig retning gjennom dialog, påvirkningsarbeid og utredninger."
            />
            <div className="maxWidth">
                <div id={styles.select}>
                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOn}`}
                        onClick={() => select("alleOmeraader")}
                        id="alleOmeraader"
                        tabIndex="0"
                        role="button"
                    >
                        Alle omeråder
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("berekraft")}
                        id="berekraft"
                        tabIndex="0"
                        role="button"
                    >
                        Bærekraft
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("digitaleRettigheter")}
                        id="digitaleRettigheter"
                        tabIndex="0"
                        role="button"
                    >
                        Digitale rettigheter
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("okonomi")}
                        id="okonomi"
                        tabIndex="0"
                        role="button"
                    >
                        Økonomi
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("forbrukerretigheter")}
                        id="forbrukerretigheter"
                        tabIndex="0"
                        role="button"
                    >
                        Forbrukerretigheter
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("strom")}
                        id="strom"
                        tabIndex="0"
                        role="button"
                    >
                        Strøm
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("bolig")}
                        id="bolig"
                        tabIndex="0"
                        role="button"
                    >
                        Bolig
                    </div>

                    <div
                        className={`${styles.selectBtn} ${styles.selectBtnOff}`}
                        onClick={() => select("mat")}
                        id="mat"
                        tabIndex="0"
                        role="button"
                    >
                        Mat
                    </div>

                    <div style={{ width: "40px", margin: "0" }}></div>
                </div>

                {page}
                {/* place */}
            </div>
        </main>
    );
}
