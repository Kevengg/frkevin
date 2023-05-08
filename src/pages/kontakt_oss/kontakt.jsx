import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import kontakts from "../../data/kontakter.json";
import style from "../../css/kontakt.module.css";

export default function KontaktPage() {
    const [contact, setContact] = useState({});
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        kontakts.forEach((kontakt) => {
            if (
                queryParams.get("preson").toLowerCase().includes(kontakt.firstName.toLowerCase()) ||
                (kontakt.secondName &&
                    queryParams
                        .get("preson")
                        .toLowerCase()
                        .includes(kontakt.secondName.toLowerCase())) ||
                queryParams.get("preson").toLowerCase().includes(kontakt.lastName.toLowerCase())
            ) {
                setContact(kontakt);
            }
        });
    }, []);

    return (
        <main>
            <div className={style.topsection}>
                <div className="maxWidth">
                    <div className={style.topsectionDivider}>
                        <div style={{ padding: "15px" }}>
                            <h1>
                                {`${contact.firstName} ${contact.secondName} ${contact.lastName}`}
                            </h1>
                            <h2 style={{ marginTop: "7px" }}>{contact.position}</h2>
                            <div style={{ marginTop: "7px" }}>
                                <span>Tlf.: </span>
                                <span>{contact.tlf}</span>
                            </div>
                        </div>
                        <div className="imgWrap">
                            <img
                                src={
                                    contact.img && !contact.img.includes("://")
                                        ? "/img/" + contact.img
                                        : contact.img
                                }
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="maxWidthMedium" style={{ minHeight: "403px" }}>
                <div className={style.imagesWrap}>
                    <div className={style.imgPreset}>
                        <div className={`imgWrap ${style.imgWrap}`}>
                            <img
                                src={
                                    contact.img &&
                                    (contact.img.includes("://")
                                        ? contact.img
                                        : "/img/" + contact.img)
                                }
                                alt={contact.alt}
                            />
                        </div>
                        <div className={style.imgUnder}>
                            <div
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: "700",
                                }}
                            >
                                <a
                                    href={
                                        contact.img &&
                                        (contact.img.includes("://")
                                            ? contact.img
                                            : "/img/" + contact.img)
                                    }
                                >
                                    {contact.img}
                                </a>
                            </div>
                        </div>
                    </div>
                    {contact.pictures &&
                        contact.pictures.map((i) => {
                            return (
                                <>
                                    {i.img && (
                                        <div className={style.imgPreset}>
                                            <div className={`imgWrap ${style.imgWrap}`}>
                                                <img
                                                    src={
                                                        i
                                                            ? i.img.includes("://")
                                                                ? i.img
                                                                : "/img/" + i.img
                                                            : null
                                                    }
                                                    alt={i.alt}
                                                />
                                            </div>
                                            <div className={style.imgUnder}>
                                                <div
                                                    style={{
                                                        textDecoration: "underline",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    <a
                                                        href={
                                                            i
                                                                ? i.img.includes("://")
                                                                    ? i.img
                                                                    : "/img/" + i.img
                                                                : null
                                                        }
                                                    >
                                                        {i && i.img}
                                                    </a>
                                                </div>
                                                <div style={{ marginTop: "10px" }}>
                                                    {i.imgDescription}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                </div>
            </div>
        </main>
    );
}
