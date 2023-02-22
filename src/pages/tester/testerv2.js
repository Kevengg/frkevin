import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TesterHjem from "./tester_components/tester_home";
import TestPage from "./tester_components/test";
import TestObjectPage from "./tester_components/testObjectPage";
import testsList from "../../data/tester.json";

// to do:
// make lower "Category" btn for text box?
// make "alle våre x tester" change text?
// locate and fix the bad setstate() in TesterHjem ( cant find, may have bean fixed )?
// make next page function for testWrap
// make breadcrumbs on testPage and testObjectPage remember search info
// make text search take priorety over topic?
// fix the seaches when queryString is searchBar:&searchBtn:, this cases all search to brake, cus of a stray "" in both searchBar and searchBtn in searchData, shuld be null or undefined

export default function TesterV2() {
    const [page, setPage] = useState(<TesterHjem updatePage={updatePage}></TesterHjem>);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        var url = queryParams.get("page");
        if (url) {
            var page = url.split("/");

            var pageUrl = [
                testsList.find((obj) => obj.header.toLowerCase().replace(/ /g, "-") === page[0]),
            ];

            pageUrl.push(
                pageUrl[0].objects.find(
                    (obj) => obj.product.toLowerCase().replace(/ /g, "-") === page[1]
                )
            );

            updatePage(pageUrl[1] ? pageUrl[1] : pageUrl[0], pageUrl[1] ? pageUrl[0] : undefined);
        } else updatePage();
    }, [location.search]);

    function updatePage(page, info) {
        // console.log(page);
        // console.log(typeof page);
        // console.log("info", info);
        if (typeof page === "object") {
            if (page.hasOwnProperty("header")) {
                setPage(<TestPage page={page} info={info} updatePage={updatePage} />);
            } else {
                setPage(
                    <TestObjectPage obj={page} info={info} updatePage={updatePage}></TestObjectPage>
                );
            }
        } else setPage(<TesterHjem updatePage={updatePage} />);
        window.scrollTo(0, 0);
    }

    return <>{page}</>;
}
