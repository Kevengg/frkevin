import { useState } from "react";
import ToppSection from "../tester_components/topp_section";
import testsList from "../../../data/tester.json";
import TestWrap from "../tester_components/testWrap";

export default function TesterHjem(props) {
    // holds, sets data from the search bar
    const [searchData, setSearchData] = useState([]);
    //
    // alows components pased it to update searchData
    const updateSearchData = (data) => {
        const dataLowerCase = data.toLowerCase();

        setSearchData((oldSearchData) => {
            if (!oldSearchData.includes(dataLowerCase)) {
                var toReturn = oldSearchData.concat(dataLowerCase);
            } else if (oldSearchData.includes(dataLowerCase)) {
                var toReturn = oldSearchData;
                toReturn.splice(toReturn.indexOf(dataLowerCase), 1);
            }
            return toReturn;
        });
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
        var skip = false;
        if (!searchData[0]) {
            return data;
        }
        for (const item of data) {
            skip = false;
            for (const filter of searchData) {
                if (
                    item.topic.toLowerCase().includes(filter.toLowerCase()) ||
                    item.header.toLowerCase().includes(filter.toLowerCase()) ||
                    item.content.toLowerCase().includes(filter.toLowerCase())
                ) {
                    if (!skip) {
                        filteredSearch.push(item);
                    }
                    skip = true;
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
                ></TestWrap>
            </div>
        </main>
    );
}
