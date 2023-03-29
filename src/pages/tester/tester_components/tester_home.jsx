import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Chevron } from "../../../component";
import ToppSection from "./topp_section";
import testsList from "../../../data/tester.json";
import TestWrap from "./testWrap";
import styles from "../../../css/tester/tester_hjem.module.css";

export default function TesterHjem(props) {
    const navigate = useNavigate();
    const location = useLocation();

    // tracks the pagenr
    const [pageNr, setPageNr] = useState(1);

    // forces Topsection to update when set to !updateTopsection via forceUpdateTopsection()
    const [updateTopsection, forceUpdateTopsection] = useState(true);

    // holds, sets data from the search bar
    const [searchData, setSearchData] = useState({ searchBar: "", searchBtn: [] });
    const [emptySearchData, setEmptySearchData] = useState([true]);
    //

    // alows components pased it to update searchData
    const updateSearchData = (searchBar, searchBtn) => {
        setSearchData((oldSearchData) => {
            let newSearchBtn = [...oldSearchData.searchBtn];
            if (searchBtn) {
                if (!newSearchBtn.includes(searchBtn.toLowerCase())) {
                    newSearchBtn.push(searchBtn.toLowerCase());
                } else {
                    newSearchBtn = newSearchBtn.filter((btn) => btn !== searchBtn.toLowerCase());
                }
            }
            // handleHistory(
            //     searchBar ? searchBar : searchBar === undefined ? oldSearchData.searchBar : "",
            //     newSearchBtn ? newSearchBtn : []
            // );
            return {
                ...oldSearchData,
                searchBar: searchBar
                    ? searchBar
                    : searchBar === undefined
                    ? oldSearchData.searchBar
                    : "",
                searchBtn: newSearchBtn ? newSearchBtn : [],
            };
        });
        setEmptySearchData(!emptySearchData);
    };

    useEffect(() => {
        forceUpdateTopsection(!updateTopsection);
    }, [searchData]);
    // suposed to make <- remember sarch data by manippulating tab history,
    // and pasing search data in query string in the href
    const [loaded, setLoaded] = useState(0);
    useEffect(() => {
        const searchBar = searchData.searchBar;
        const searchBtn = searchData.searchBtn;
        if (!location.search.includes("page") && loaded > 1) {
            if (searchBar != "" || searchBtn != "") {
                navigate({
                    search: `?searchBar:${searchBar.replace(/ /g, "-")}&searchBtn:${searchBtn.map(
                        (btn) => {
                            return btn.replace(/ /g, "-");
                        }
                    )}`,
                });
            } else
                navigate({
                    search: null,
                });
        } else {
            let load = loaded;
            setLoaded(load + 1);
        }
    }, [searchData]);

    function handleHistory(searchBar, searchBtn) {
        if (searchBar || searchBtn) {
            navigate({
                search: `?searchBar:${searchBar.replace(/ /g, "-")}&searchBtn:${searchBtn.map(
                    (btn) => {
                        return btn.replace(/ /g, "-");
                    }
                )}`,
            });
        }
    }

    useEffect(() => {
        // here
        let url = location.search
            .replace(/-/g, " ")
            .replace(/&/g, ",")
            .replace(/\?/, "")
            .replace(/%22/g, "")
            .replace(/searchBar:/g, "")
            .replace(/searchBtn:/g, "")
            .split(",");

        setSearchData({
            searchBar: url[0],
            searchBtn: url.slice(1)[0] == "" ? [] : url.slice(1),
        });

        forceUpdateTopsection(!updateTopsection);
    }, []);

    // not working 100%, better to remove
    // // to make ^ <- forget url
    // useEffect(() => {
    //     console.log(PerformanceEntry);
    //     window.onload = () => {
    //         if (performance.getEntriesByType("navigation")[0].nextHopProtocol === "http/1.1") {
    //             setSearchData({ searchBar: "", searchBtn: [] });
    //             navigate({ search: "" });
    //         }
    //     };
    // }, []);

    // counts how manny tests
    const [testCount, setTestCount] = useState();
    //
    // alows components pased it to update testCount
    const updateTestCount = (testCount) => {
        setTestCount(testCount);
    };

    const [sortBy, setSortBy] = useState("");
    function updateSortBy(update) {
        setSortBy(update);
    }

    function sortData(obj) {
        function compare(a, b) {
            if (sortBy === "alfabetical") {
                if (a.header.toLowerCase() > b.header.toLowerCase()) {
                    return 1;
                } else if (a.header.toLowerCase() < b.header.toLowerCase()) {
                    return -1;
                } else {
                    return 0;
                }
            } else if (sortBy === "alfabeticalReverse") {
                if (a.header.toLowerCase() > b.header.toLowerCase()) {
                    return -1;
                } else if (a.header.toLowerCase() < b.header.toLowerCase()) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                const adate = a.date.split("T")[0].replace(/-/g, "");
                const bdate = b.date.split("T")[0].replace(/-/g, "");
                if (adate > bdate) {
                    return -1;
                } else if (adate < bdate) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
        return obj.sort(compare);
    }

    // expects array
    function filterSearch(data) {
        const filteredSearch = [];
        if (!searchData.searchBar && !searchData.searchBtn[0]) {
            return [sortData(data), data.length];
        }
        for (const item of data) {
            if (
                (item.topic.toLowerCase().includes(searchData.searchBar.toLowerCase()) ||
                    item.header.toLowerCase().includes(searchData.searchBar.toLowerCase()) ||
                    item.content.toLowerCase().includes(searchData.searchBar.toLowerCase())) &&
                searchData.searchBar != ""
            ) {
                filteredSearch.push(item);
                continue;
            }
            for (const filter of searchData.searchBtn) {
                if (filter != "") {
                    if (item.topic.toLowerCase().includes(filter.toLowerCase())) {
                        filteredSearch.push(item);
                        break;
                    }
                }
            }
        }
        return [sortData(filteredSearch), filteredSearch.length];
    }

    function addPageNrBtn() {
        let mapHold = [];
        for (let i = 0; i < Math.ceil(filterSearch(testsList)[1] / 12); i++) {
            mapHold.push(i + 1);
        }
        return mapHold.map((item) => {
            return (
                <span
                    style={{ backgroundColor: pageNr == item ? "var(--FR-color-lb)" : "" }}
                    className={styles.pageNr}
                    key={item}
                    onClick={() => {
                        setPageNr(item);
                        if (pageNr != item) {
                            window.scrollTo(0, 0);
                        }
                    }}
                >
                    {item}
                </span>
            );
        });
    }

    return (
        <main>
            <ToppSection
                key={updateTopsection}
                searchData={searchData}
                updateSearchData={updateSearchData}
            ></ToppSection>
            <div className="maxWidth">
                <TestWrap
                    key={emptySearchData}
                    testsList={filterSearch(testsList)}
                    updateTestCount={updateTestCount}
                    searchData={searchData}
                    updatePage={props.updatePage}
                    updateSortBy={updateSortBy}
                    forceUpdateTopsection={forceUpdateTopsection}
                    updateTopsection={updateTopsection}
                    updateSearchData={updateSearchData}
                    page={pageNr}
                ></TestWrap>
                <div className={styles.pageNrWrap}>
                    <span
                        className={styles.pageBtn}
                        onClick={() => {
                            if (pageNr != 1) {
                                setPageNr(pageNr - 1);
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        <Chevron left size="L"></Chevron>
                    </span>
                    {addPageNrBtn()}
                    <span
                        className={styles.pageBtn}
                        onClick={() => {
                            if (pageNr + 1 <= Math.ceil(filterSearch(testsList)[1] / 12)) {
                                setPageNr(pageNr + 1);
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        <Chevron size="L"></Chevron>
                    </span>
                </div>
            </div>
        </main>
    );
}
