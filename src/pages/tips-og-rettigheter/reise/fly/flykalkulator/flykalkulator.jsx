import { BreadCrumb } from "../../../../../component";
import style from "../../../../../css/flykalkulator.module.css";
import { useState } from "react";

export default function Flykalkulator() {
    const [a, b] = useState();

    return (
        <main>
            <div className="maxWidthSmall" style={{ marginTop: "-70px" }}>
                <BreadCrumb
                    names={["Forsiden", "Tips og rettigheter", "Reise", "Fly", "Flykalkulatoren"]}
                    path={[
                        "/",
                        "/tips-og-rettigheter",
                        "/tips-og-rettigheter/reise",
                        "/tips-og-rettigheter/reise/fly",
                        "/tips-og-rettigheter/reise/fly/flykalkulatoren",
                    ]}
                ></BreadCrumb>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <div
                        style={{
                            maxWidth: "800px",
                            width: "100%",
                            justifySelf: "center",
                        }}
                    >
                        <h1 className={style.pageHeader}>Sjekk dine flyrettigheter</h1>
                        <div>
                            <div className={style.menuHeader}>
                                <h2>Hva har skjedd?</h2>
                                <a href="">in English</a>
                            </div>
                            <ul className={style.menu}>
                                <li>Flyet er forsinket</li>
                                <li>Flyet er innstilt</li>
                                <li>Flyet er overbooket</li>
                                <li>Problemer med bagasjen</li>
                            </ul>
                            <div>Tilbake</div>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                backgroundColor: "rgba(255, 167, 35, 0.4)",
                                padding: "20px",
                                marginTop: "30px",
                            }}
                        >
                            Rettighetene gjelder i og fra EØS-land. Rettighetene gjelder også til
                            EØS-land hvis flyselskapet er registrert i EØS.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
