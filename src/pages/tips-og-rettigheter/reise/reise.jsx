import { BreadCrumb, ToppSectionCustom } from "../../../component";

export default function Reise() {
    function Card({ header, content, symbol }) {
        return (
            <a
                className="rettigheter"
                href={`/tips-og-rettigheter/reise/${header.toLowerCase().replace(/\//, "-")}`}
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
            <ToppSectionCustom
                img={
                    "https://storage02.forbrukerradet.no/media/2023/02/reise-rettigheter-650x366.jpg"
                }
            >
                <BreadCrumb
                    names={["Forsiden", "Tips og rettigheter", "Reise"]}
                    path={["/", "/tips-og-rettigheter", "/tips-og-rettigheter/reise"]}
                    style={{ marginLeft: "0" }}
                ></BreadCrumb>
                <h1>Reise</h1>
                <div style={{ width: "100%", fontSize: "1.2rem" }}>
                    Her finner du informasjon om dine rettigheter når du reiser, og hvordan du
                    klager hvis uhellet er ute.
                </div>
            </ToppSectionCustom>
            <div className="maxWidth">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px" }}>
                    <Card
                        header={"Fly"}
                        content={"Hva kan du kreve av flyselskapet ditt? Og hvordan går du frem?"}
                    ></Card>
                    <Card
                        header={"Pakkereise"}
                        content={
                            "Hva du bør tenke på før du bestiller, og rettighetene dine hvis noe går galt."
                        }
                    ></Card>
                    <Card
                        header={"Tog"}
                        content={
                            "Dine rettigheter når det kommer til refusjon og alternativ transport."
                        }
                    ></Card>
                    <Card
                        header={"Buss"}
                        content={"Dine rettigheter til alternativ transport og kompensasjon."}
                    ></Card>
                    <Card
                        header={"Taxi/drosje"}
                        content={"Misfornøyd med turen? Slik går du frem for å klage."}
                    ></Card>
                    <Card
                        header={"Hotellovernatting"}
                        content={"Hvordan du bestiller, avgjør hvilke rettigheter du har."}
                    ></Card>
                </div>
            </div>
        </main>
    );
}
