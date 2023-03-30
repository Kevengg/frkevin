import { Contacts, Nyheter, formatContent, formatDate, Chevron } from "../../../component";
import { Link } from "react-router-dom";
import style from "../../../css/tester/readMore.module.css";
export default function ReadMore({ page }) {
    return (
        <main>
            <div className="maxWidthSmall">
                <nav className="path">
                    <Link to="">Tester</Link>
                    <Chevron size="xs" />
                    <Link
                        to={`?searchBar:&searchBtn:${page.topic.toLowerCase().replace(/ /g, "-")}`}
                    >
                        {page.topic}
                    </Link>
                    <Chevron size="xs" />
                    <Link to={`?page=${page.header.toLowerCase().replace(/ /g, "-")}`}>
                        {page.header}
                    </Link>
                    <Chevron size="xs" />
                    <span>Les mer</span>
                </nav>
                <h1 className={style.pageHeader}>{page.readMore.header}</h1>
                <div className={style.date}>{formatDate(page.date, "DD.longM.YYYY")}</div>
                <div className={style.page}>
                    <div className={style.pageLeft}> {formatContent(page.readMore.left)} </div>
                    <div className={style.pageRight}>
                        <Contacts
                            names={page.readMore.right.writers}
                            header=""
                            className={style.contacts}
                        />
                        <div className={style.tldr}>
                            <h2>Om testen</h2>
                            <div className={style.tldrSpacer}></div>
                            <article>{formatContent(page.readMore.right.tldr)}</article>
                        </div>
                        <div className={style.newsLetter}>Aboner på vårt nyhetsbrev</div>
                    </div>
                </div>
            </div>
            <div className={style.related}>
                <h2 className="maxWidthSmall">Relaterte saker</h2>
            </div>
            <div className="maxWidthSmall">
                <Nyheter />
            </div>
        </main>
    );
}
