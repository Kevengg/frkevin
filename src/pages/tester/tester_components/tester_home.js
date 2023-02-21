import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ToppSection from "../tester_components/topp_section";
import testsList from "../../../data/tester.json";
import TestWrap from "../tester_components/testWrap";

export default function TesterHjem(props) {
    const navigate = useNavigate();
    const location = useLocation();

    // to make searchBtn remember color
    const [updateTopsection, forceUpdateTopsection] = useState(true);

    // holds, sets data from the search bar
    const [searchData, setSearchData] = useState({ searchBar: "", searchBtn: [] });
    const [emptySearchData, setEmptySearchData] = useState([true]);
    //
    // alows components pased it to update searchData
    const updateSearchData = (searchBar, searchBtn) => {
        console.log(searchBar, searchBtn);
        setSearchData((oldSearchData) => {
            let newSearchBtn = [...oldSearchData.searchBtn];
            if (searchBtn) {
                if (!newSearchBtn.includes(searchBtn.toLowerCase())) {
                    newSearchBtn.push(searchBtn.toLowerCase());
                } else {
                    newSearchBtn = newSearchBtn.filter((btn) => btn !== searchBtn.toLowerCase());
                }
            }
            handleHistory(
                searchBar ? searchBar : searchBar === undefined ? oldSearchData.searchBar : "",
                newSearchBtn ? newSearchBtn : []
            );
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

    // suposed to make <- remember sarch data by manippulating tab history,
    // and pasing search data in query string in the href

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
        let url = location.search
            .replace(/-/g, " ")
            .replace(/&/g, ",")
            .replace(/\?/, "")
            .replace(/%22/g, "")
            .replace(/searchBar:/g, "")
            .replace(/searchBtn:/g, "")
            .split(",");

        setSearchData({ searchBar: url[0], searchBtn: url.slice(1) });
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
            return sortData(data);
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
        return sortData(filteredSearch);
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
                    testsList={filterSearch(testsList)}
                    testCount={testCount}
                    updateTestCount={updateTestCount}
                    searchData={searchData}
                    updatePage={props.updatePage}
                    key={emptySearchData}
                    updateSortBy={updateSortBy}
                    forceUpdateTopsection={forceUpdateTopsection}
                    updateTopsection={updateTopsection}
                    updateSearchData={updateSearchData}
                ></TestWrap>
            </div>
        </main>
    );
}
