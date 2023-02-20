import { useState } from "react";
import ToppSection from "../tester_components/topp_section";
import testsList from "../../../data/tester.json";
import TestWrap from "../tester_components/testWrap";

export default function TesterHjem(props) {
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

    // counts how manny tests
    const [testCount, setTestCount] = useState();
    //
    // alows components pased it to update testCount
    const updateTestCount = (testCount) => {
        setTestCount(testCount);
    };

    // expects array
    function filterSearch(data) {
        const filteredSearch = [];
        if (!searchData.searchBar && !searchData.searchBtn[0]) {
            return data;
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
        return filteredSearch;
    }

    return (
        <main>
            <ToppSection searchData={searchData} updateSearchData={updateSearchData}></ToppSection>
            <div className="maxWidth">
                <TestWrap
                    testsList={filterSearch(testsList)}
                    testCount={testCount}
                    updateTestCount={updateTestCount}
                    searchData={searchData}
                    updatePage={props.updatePage}
                    key={emptySearchData}
                ></TestWrap>
            </div>
        </main>
    );
}
