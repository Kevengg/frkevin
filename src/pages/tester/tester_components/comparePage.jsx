import { formatDate, Chevron, BreadCrumb } from "../../../component";
import styles from "../../../css/tester/testPage.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ComparePage({ obj, info, parent }) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    function SortItem({ item }) {
        return (
            <div
                className={styles.compareItem}
                onClick={() => {
                    navigate({
                        search: `?page=${queryParams.get("page")}/${item.product
                            .toLowerCase()
                            .replace(/ /g, "-")}`,
                    });
                }}
                onMouseEnter={(e) => {
                    e.target.closest(`.${styles.compareItem}`).style.backgroundColor = "#0000000e";
                }}
                onMouseLeave={(e) => {
                    e.target.closest(`.${styles.compareItem}`).style.backgroundColor = "";
                }}
            >
                <div
                    className={styles.compareItemX}
                    onMouseEnter={(e) => {
                        e.target.closest(`.${styles.compareItem}`).style.backgroundColor = "";
                    }}
                    onMouseLeave={(e) => {
                        e.target.closest(`.${styles.compareItem}`).style.backgroundColor =
                            "#0000000e";
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate({
                            search: `?page=${queryParams.get("page")}${
                                queryParams
                                    .get("compare")
                                    .replace(obj.indexOf(item).toString(), "") != ""
                                    ? `&compare=${queryParams
                                          .get("compare")
                                          .replace(obj.indexOf(item).toString(), "")}`
                                    : ""
                            }`,
                        });
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className={styles.compareListHeader}>
                    <div className="imgWrap">
                        <img
                            src={item.img.includes("://") ? item.img : "./img/" + item.img}
                            alt=""
                        />
                    </div>
                    <div className={styles.compareListItem}> {item.product} </div>
                </div>
                <div className={styles.comparePoints}></div>
                <div className={styles.compareListItem}>
                    {item.ratingType == "grade" ? (
                        `${item.rating} / 10`
                    ) : item.ratingType == "smiley" ? (
                        <img
                            height={35}
                            src={
                                item.rating === "good"
                                    ? "./img/grade-positive.svg"
                                    : item.rating === "ok"
                                    ? "./img/grade-neutral.svg"
                                    : "./img/grade-negative.svg"
                            }
                        ></img>
                    ) : (
                        item.rating
                    )}
                </div>
                <div className={styles.compareListItem}>{formatDate(item.date, "dd.mm.yyy")}</div>
                {item.price && <div className={styles.compareListItem}>kr {item.price}</div>}
                <div className={styles.compareListItem}> {item.manufacturer} </div>
                {item.ratingPoints.map((p, i) => {
                    return (
                        <div className={styles.compareListItem} key={i}>
                            {p[1] === true ? (
                                "ja"
                            ) : p[1] === false ? (
                                "nei"
                            ) : p[2] == "smiley" ? (
                                <img
                                    height={35}
                                    src={
                                        p[1] === "good"
                                            ? "./img/grade-positive.svg"
                                            : p[1] === "ok"
                                            ? "./img/grade-neutral.svg"
                                            : "./img/grade-negative.svg"
                                    }
                                ></img>
                            ) : (
                                p[1]
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <main>
            <div className="maxWidth">
                <BreadCrumb
                    names={["Forsiden", "Tester", parent.topic, parent.header, "Sammenlign"]}
                    path={[
                        "",
                        "/tester",
                        `?searchBar:&searchBtn:${parent.topic.toLowerCase().replace(/ /g, "-")}`,
                        `?page=${queryParams.get("page")}`,
                    ]}
                ></BreadCrumb>

                <Link to={`?page=${queryParams.get("page")}`}>
                    <i class="fa-solid fa-arrow-left"></i>
                    <span style={{ textDecoration: "underline" }}>Tilbake</span>
                </Link>

                <div className={styles.compareWrap} style={{ marginTop: "10px" }}>
                    <div className={styles.comparePoints}>
                        <div className={styles.compareListHeader}></div>
                        <div className={styles.compareListItem}> Samlet score </div>
                        <div className={styles.compareListItem}>Test dato</div>
                        {obj[info[0]].price && <div className={styles.compareListItem}>Pris</div>}
                        <div className={styles.compareListItem}>Produsent</div>
                        {obj[info[0]].ratingPoints.map((p, i) => {
                            return (
                                <div className={styles.compareListItem} key={i}>
                                    {p[0]}
                                </div>
                            );
                        })}
                        <div className={styles.falseScroll}></div>
                    </div>

                    <div className={styles.compareItemsWrap}>
                        {info.map((i, key) => {
                            return <SortItem item={obj[i]} key={key}></SortItem>;
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
