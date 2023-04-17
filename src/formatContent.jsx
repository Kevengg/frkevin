export function formatContent(input) {
    // Split the input string into an array of strings separated by LinkBtnOld />
    let elements = input.split("LinkBtnOld");
    let result = [];

    // Iterate over each element in the `elements` array
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let match;

        // Check if the element includes "<br />"
        if (element.includes("<br />")) {
            // If the element includes "<br />",
            // split the element into an array of strings separated by "<br />"
            let subElements = element.split("<br />");

            // Iterate over each subElement in the `subElements` array
            for (let j = 0; j < subElements.length; j++) {
                let subElement = subElements[j];
                // console.log("subElements", subElements);

                // Check if the subElement matches the format of LinkBtnOld />
                if ((match = subElement.match(/(?<=LinkBtnOld).*content='(.*?)'(.*?)\/>(.*)/))) {
                    let content = match[1];
                    let chevron = false;
                    let external = false;
                    let href = "";
                    let download = "";

                    // Extract the value of chevron if it's present
                    if (match[2].includes("chevron={")) {
                        chevron = match[2].includes("true");
                    }

                    // Extract the value of external if it's present
                    if (match[2].includes("external={")) {
                        external = match[2].includes("true");
                    }

                    // Extract the value of href if it's present
                    if (match[2].includes("href=")) {
                        let hrefMatch = match[2].match(/href='(.*?)'/);
                        href = hrefMatch[1];
                    }

                    // Extract the value of download if it's present
                    if (match[2].includes("download=")) {
                        let downloadMatch = match[2].match(/download='(.*?)'/);
                        download = downloadMatch[1];
                    }

                    // Push a <LinkBtnOld /> component to the `result` array
                    result.push(
                        <LinkBtnOld
                            key={(j + 1) * Math.random(2, 200) + j}
                            content={content}
                            chevron={chevron}
                            external={external}
                            href={href}
                            download={download}
                        />
                    );
                    match[3] && result.push(match[3]);
                } else {
                    // If it doesn't match, push the original string as text
                    result.push(subElement);
                }

                // Push a <br /> component to the `result` array if it's not the last subElement
                if (j < subElements.length - 1) {
                    result.push(<br key={j} />);
                }
            }
        } else {
            // Check if the element matches the format of LinkBtnOld />
            if ((match = element.match(/content='(.*?)'(.*?)\/>(.*)/))) {
                let content = match[1];
                let chevron = false;
                let external = false;
                let href = "";
                let download = "";

                // Extract the value of chevron if it's present
                if (match[2].includes("chevron={")) {
                    chevron = match[2].includes("true");
                }

                // Extract the value of external if it's present
                if (match[2].includes("external={")) {
                    external = match[2].includes("true");
                }

                // Extract the value of href if it's present
                if (match[2].includes("href=")) {
                    let hrefMatch = match[2].match(/href='(.*?)/);
                    href = hrefMatch[1];
                }

                // Extract the value of download if it's present
                if (match[2].includes("download=")) {
                    let downloadMatch = match[2].match(/download='(.*?)/);
                    download = downloadMatch[1];
                }

                // Push a LinkBtnOld /> component to the `result` array

                result.push(
                    <LinkBtnOld
                        content={content}
                        chevron={chevron}
                        external={external}
                        href={href}
                        download={download}
                    />
                );

                match[3] && result.push(match[3]);
            } else {
                // If it doesn't match, push the original string as text
                result.push(element);
            }
        }
    }
    // console.log("result before", result);

    function formatLists(items) {
        let toreturn = [];
        items.flat(Infinity).forEach((item, index) => {
            if (typeof item == "string" && item.includes("<li")) {
                // console.log("item", item);
                // index 0:everything, index 1: everything before, index 2: opening tagg,
                // index 3: content, index 4: rest
                item = item.includes("<ul")
                    ? item.match(/(.*?)(<ul.*?>)(.*?)<\/ul>((?<=<\/ul>).*)/)
                    : item.match(/(.*?)(<ol.*?>)(.*?)<\/ol>((?<=<\/ol>).*)/);
                let content = item
                    ? [...item[3].matchAll(/<li(.*?)>(.*?)<\/li>/g)].map((li, index) => {
                          let className = li[1].match(/(?<=className=').*?(?=')/);
                          let style = [];
                          li[1] &&
                              li[1].match(/(?<=style={{).*?(?=}})/) &&
                              li[1]
                                  .match(/(?<=style={{).*?(?=}})/)[0]
                                  .split(/, /)
                                  .forEach((i) => {
                                      let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                                      style.push({ [keep[1]]: keep[2] });
                                  });
                          style = style.length
                              ? style
                                  ? style.reduce((result, obj) => {
                                        return { ...result, ...obj };
                                    })
                                  : null
                              : {};
                          return (
                              <li className={className} style={style} key={`li${index.toString()}`}>
                                  {li[2]}
                              </li>
                          );
                      })
                    : null;
                let className = item[2].match(/(?<=className=').*?(?=')/);
                let style = [];
                item[2] &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};
                toreturn.push(item[1]);
                // console.log("item", item);
                toreturn.push(
                    item[2].includes("<ul") ? (
                        <ul className={className} style={style} key={`ul${index}`}>
                            {format(content)}
                        </ul>
                    ) : item[2].includes("<ol") ? (
                        <ol className={className} style={style} key={`ul${index}`}>
                            {format(content)}
                        </ol>
                    ) : undefined
                );
                toreturn = toreturn.concat(formatLists([item[4]]));
            } else toreturn.push(item);
        });
        return toreturn;
    }

    function formatDiv(items) {
        let toreturn = [];
        items.flat(Infinity).forEach((item, index) => {
            if (typeof item == "string" && item.includes("<div")) {
                let remaining = item.match(/<div/g).length;
                let target = item.match(/(.*?)<div(.*?)>(.*)/); // holds ewerything before [1], ewerything inside the opening tagg[2], and ewerything inside[3]
                let targetIndex; // holds the index of the item containing last target closing dropdown
                let targetRemaining; // counts how manny closing tags into an item the last closingtag is
                for (let i = index + 1; remaining > 0 && i <= items.length; i++) {
                    targetRemaining = remaining;
                    typeof items[i] == "string" &&
                        items[i].match(/<div/g) &&
                        (remaining += items[i].match(/<div/g).length);

                    typeof items[i] == "string" &&
                        items[i].match(/<\/div>/g) &&
                        (remaining -= items[i].match(/<\/div>/g).length);
                    targetIndex = i;
                    // console.log("remaining", remaining);
                }
                let fromItems = items.splice(index + 1, targetIndex - index);
                // var that holds ewerything remaining outside in the last close, to be pushed back into items
                let rest = [];

                // array that holds all items inside the dropdown only
                let insideTarget = [];

                function calcItems() {
                    let itemsFromCalc;
                    // rest
                    // everything that shuld be returned
                    // everything that shuld be returned
                    // // this stil may brake if an object is inside the div, the content left in the original index may be forgotten
                    let nr = targetRemaining;
                    if (fromItems.length > 0 && fromItems.map((i) => !!i).includes(true)) {
                        console.log("first");
                        itemsFromCalc = fromItems
                            .map((i, indexOfI) => {
                                if (typeof i == "string") {
                                    return i.split("</div>").map((iOfI, indexOfIOfI) => {
                                        if (nr == 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        } else if (
                                            nr > 0 &&
                                            indexOfIOfI < i.split("</div>").length - 1
                                        ) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI + "</div>";
                                        } else if (nr > 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI;
                                        } else {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        }
                                    });
                                } else {
                                    if (nr <= 0) {
                                        rest.push(i);
                                    } else {
                                        return i;
                                    }
                                }
                            })
                            .flat();
                    } else {
                        itemsFromCalc = [
                            ...(() => {
                                let i = target[3];
                                if (typeof i == "string") {
                                    return i.split("</div>").map((iOfI, indexOfIOfI) => {
                                        if (nr == 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        } else if (
                                            nr > 0 &&
                                            indexOfIOfI < i.split("</div>").length - 2
                                        ) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI + "</div>";
                                        } else if (nr > 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI;
                                        } else {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        }
                                    });
                                } else {
                                    if (nr <= 0) {
                                        rest.push(i);
                                    } else {
                                        return i;
                                    }
                                }
                            })(),
                        ];
                    }

                    // figure out whitch item from fromItems has the rellevant close tag
                    // remove the rellevant closing tag
                    // dump what is left in the rest
                    // store items inbetween in storage
                    insideTarget = [...itemsFromCalc];
                }
                calcItems();

                items.splice(index + 1, 0, ...rest);
                // console.log("items", [...items]);
                // find props for dropdown
                let header = target[2].match(/(?<=header=').*?(?=')/);
                let style = [];
                target[2] &&
                    target[2].match(/(?<=style={{).*?(?=}})/) &&
                    target[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};

                let className = target[2].match(/(?<=className=').*?(?=')/);

                // push to toreturn the frdropdown and rests
                toreturn.push(target[1]);
                toreturn.push(
                    <div header={header} className={className} style={style} key={`div ${index}`}>
                        {format(insideTarget)}
                        {/* {insideTarget} */}
                    </div>
                );
                toreturn.push(rest);
            } else {
                toreturn.push(item);
            }
        });

        return toreturn;
    }

    let resultV2 = [];
    result.forEach((r, index) => {
        if (typeof r == "string" && r.includes("<ListObject")) {
            r = r.match(/(.*)(<ListObject.*?\/>)(.*)/);
            let type = r[2].match(/(?<=type=').*?(?=')/);
            let items = r[2];
            items = items.match(/(?<=items=\[).*?(?=\])/)[0].match(/(?<=')(?!,).*?(?=')/g);
            // console.log("items, type", items, type);
            resultV2.push(
                r[1] ? r[1] : null,
                r[2] ? <ListObject key={result.length + index} type={type} items={items} /> : null,
                r[3] ? formatContent(r[3]) : null
            );
        } else resultV2.push(r);
    });

    // to find and replace list elements
    function formatFrDroppDown(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<FrDroppDown")) {
                let remaining = item.match(/<FrDroppDown/g).length;
                let target = item.match(/(.*?)<FrDroppDown(.*?)>(.*)/); // holds ewerything before [1], ewerything inside the opening tagg[2], and ewerything inside[3]
                let targetIndex; // holds the index of the item containing last target closing dropdown
                let targetRemaining; // counts how manny closing tags into an item the last closingtag is
                for (let i = index + 1; remaining > 0 && i <= items.length; i++) {
                    targetRemaining = remaining;
                    typeof items[i] == "string" &&
                        items[i].match(/<FrDroppDown/g) &&
                        (remaining += items[i].match(/<FrDroppDown/g).length);

                    typeof items[i] == "string" &&
                        items[i].match(/<\/FrDroppDown>/g) &&
                        (remaining -= items[i].match(/<\/FrDroppDown>/g).length);
                    targetIndex = i;
                    // console.log("remaining", remaining);
                }
                let fromItems = items.splice(index + 1, targetIndex - index);

                // var that holds ewerything remaining outside in the last close, to be pushed back into items
                let rest = [];
                // array that holds all items inside the dropdown only
                let insideTarget = [target[3], ...calcItems()];

                function calcItems() {
                    // rest

                    // everything that shuld be returned
                    // everything that shuld be returned
                    // // to mutch gets pushed to rest, last item that shuld go to itemsFromCalc goes to rest
                    let nr = targetRemaining;
                    let itemsFromCalc = [
                        ...fromItems
                            .map((i, indexOfI) => {
                                if (typeof i == "string") {
                                    return i.split("</FrDroppDown>").map((iOfI, indexOfIOfI) => {
                                        if (indexOfIOfI < i.split("</FrDroppDown>").length - 1) {
                                            nr -= 1;
                                        }

                                        if (nr == 0) {
                                            return iOfI;
                                        } else if (
                                            nr > 0 &&
                                            indexOfIOfI < i.split("</FrDroppDown>").length - 1
                                        ) {
                                            return iOfI + "</FrDroppDown>";
                                        } else if (nr > 0) {
                                            return iOfI;
                                        } else {
                                            rest.push(iOfI);
                                        }
                                    });
                                } else {
                                    if (nr <= 0) {
                                        rest.push(i);
                                    } else {
                                        return i;
                                    }
                                }
                            })
                            .flat(),
                    ];
                    // figure out whitch item from fromItems has the rellevant close tag
                    // remove the rellevant closing tag
                    // dump what is left in the rest
                    // store items inbetween in storage

                    return itemsFromCalc;
                }

                items.splice(index + 1, 0, ...rest);
                // console.log("items", [...items]);
                // find props for dropdown
                let header = target[2].match(/(?<=header=').*?(?=')/);
                let style = target[2].match(/(?<=style=').*?(?=')/);
                let className = target[2].match(/(?<=className=').*?(?=')/);

                // push to toreturn the frdropdown and rests
                toreturn.push(target[1]);
                toreturn.push(
                    <FrDroppDown
                        header={header}
                        className={className}
                        style={style}
                        key={`FrDroppDown ${index}`}
                    >
                        {format(insideTarget)}
                        {/* {insideTarget} */}
                    </FrDroppDown>
                );
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function filterImg(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<img")) {
                item = item.match(/(.*?)(<img.*?\/>)(.*)/);
                let src = item ? item[2].match(/(?<=src=').*?(?=')/) : null;
                let alt = item ? item[2].match(/(?<=alt=').*?(?=')/) : null;
                let style = [];
                item[2] &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};

                toreturn.push(item[1]);
                toreturn.push(
                    <img key={"img " + index.toString()} src={src} alt={alt} style={style} />
                );
                toreturn = toreturn.concat(filterImg([item[3]]));
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function formatLinks(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<a")) {
                item = item.match(/(.*?)<a(.*?)>(.*?)<\/a>(.*)/);

                let href =
                    item && item[2].match(/(?<=href=').*?(?=')/)
                        ? item[2].match(/(?<=href=').*?(?=')/)[0]
                        : null;

                let className =
                    item && item[2].match(/(?<=className=').*?(?=')/)
                        ? item[2].match(/(?<=className=').*?(?=')/)[0]
                        : null;

                let style = [];

                item &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};

                toreturn.push(item ? item[1] : null);
                toreturn.push(
                    <a href={href} className={className} style={style} key={`a ${index}`}>
                        {item ? item[3] : null}
                    </a>
                );
                toreturn.push(formatLinks(item ? [item[4]] : []));
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function formatHeader(items) {
        let toreturn = [];
        // console.log("items", items);
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<h")) {
                item = item.match(/(.*?)(<h..*?\/h.>)(.*)/);
                let type = item[2] ? item[2].match(/(?<=<h)./)[0] : null;
                let className =
                    item[2] && item[2].match(/(?<=className=').*?(?=')/)
                        ? item[2].match(/(?<=className=').*?(?=')/)[0]
                        : null;
                let style = [];
                item[2] &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};
                let content = item ? item[2].match(/(?<=>).*?(?=<\/h.*?>)/)[0] : null;
                toreturn.push(
                    item.length && item[1],
                    type || content ? (
                        type == 1 ? (
                            <h1 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h1>
                        ) : type == 2 ? (
                            <h2 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h2>
                        ) : type == 3 ? (
                            <h3 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h3>
                        ) : type == 4 ? (
                            <h4 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h4>
                        ) : type == 5 ? (
                            <h5 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h5>
                        ) : type == 6 ? (
                            <h6 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h6>
                        ) : (
                            content
                        )
                    ) : (
                        ""
                    )
                );
                toreturn = toreturn.concat(formatHeader([item[3]]));
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function formatStyle(items) {
        let toreturn = [];

        items.flat(Infinity).forEach((item, index) => {
            console.log("[item]", [item]);
            if (typeof item == "string" && item.includes("<style>")) {
                console.log("[item]", [item]);
                item = item.match(/(.*?)<style>(.*?)<\/style>(.*)/);
                toreturn.push(item[1]);
                toreturn.push(<style key={`style ${index.toString()}`}>{item[2]}</style>);
                toreturn.push(item[3]);
            } else {
                toreturn.push(item);
            }
        });
        return toreturn;
    }

    function format(input) {
        return formatDiv(
            formatStyle(formatLinks(formatLists(formatFrDroppDown(filterImg(formatHeader(input))))))
        );
    }
    return format(resultV2);
}
