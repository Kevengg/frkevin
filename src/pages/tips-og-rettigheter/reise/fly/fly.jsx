import { BreadCrumb } from "../../../../component";

export default function Fly() {
    function Card({ header, content, path }) {
        return (
            <a
                className="rettigheter"
                href={`/tips-og-rettigheter/reise/fly/${
                    path ? path : header.toLowerCase().replace(/\//, "-")
                }`}
            >
                <div className=" rettigheterHeader gridColSpan2">
                    <h2>{header}</h2>
                </div>
                <div className=" rettigheterFollow gridRowSpan2">
                    <i className="fa-solid fa-chevron-right fa-xl"></i>
                </div>
                <div className=" rettigheterDescription gridColSpan2">
                    <p>{content}</p>
                </div>
            </a>
        );
    }

    return (
        <main>
            <div style={{ height: "250px", backgroundColor: "var(--FR-color-lg)" }}>
                <div className="maxWidth" style={{ padding: "0", paddingTop: "0.1px" }}>
                    <BreadCrumb
                        names={["Forsiden", "Tips og rettigheter", "Reise", "Fly"]}
                        path={[
                            "/",
                            "/tips-og-rettigheter",
                            "/tips-og-rettigheter/reise",
                            "/tips-og-rettigheter/reise/fly",
                        ]}
                    ></BreadCrumb>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1.6rem",
                            flexDirection: "column",
                            width: "100%",
                        }}
                    >
                        <h1>Fly</h1>
                        <div
                            style={{
                                height: "3px",
                                width: "55px",
                                backgroundColor: "black",
                                margin: "15px 0",
                            }}
                        ></div>
                        <p>Hva kan du kreve av flyselskapet ditt? Og hvordan går du frem?</p>
                    </div>
                </div>
            </div>
            <div className="maxWidth">
                <div className="maxWidth">
                    <div
                        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px" }}
                    >
                        <Card
                            header={"Sjekk dine flyrettigheter"}
                            content={
                                "Benytt vår flykalkulator for å enkelt regne ut hva du har krav på dersom flyet blir forsinket eller innstilt. Legg inn hvor du skal, hvor lenge du har ventet og se rettighetene dine."
                            }
                            path={"flykalkulator"}
                        ></Card>
                        <Card
                            header={"Før du bestiller flyreise"}
                            content={
                                "Dine rettigheter som flypassasjer, hva du kan kreve, og hvordan du går frem."
                            }
                        ></Card>
                        <Card
                            header={"Er flyet forsinket?"}
                            content={
                                "Rettighetene dine når flyet ikke går som planlagt, avhenger av lengde på reisen og hvor lenge dere er forsinket."
                            }
                        ></Card>
                        <Card
                            header={"Er flyet innstilt?"}
                            content={
                                "Hvis flyet blir innstilt skal flyselskapet tilby deg tre alternativer: refusjon, ombooking så snart som mulig, eller ombooking på et senere tidspunkt."
                            }
                        ></Card>
                        <Card
                            header={"Er flyet overbooket?"}
                            content={
                                "Flyselskapet har rett til å nekte deg å bli med på grunn av overbooking, men ikke uten at du får økonomisk kompensasjon og assistanse."
                            }
                        ></Card>
                        <Card
                            header={"Er bagasjen forsinket eller skadet?"}
                            content={
                                "Hvis bagasjen er forsinket, bortkommet eller skadet, kan du kreve erstatning av flyselskapet."
                            }
                        ></Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
