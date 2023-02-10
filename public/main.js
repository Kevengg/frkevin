// handle enter click on page
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        var ele = document.activeElement;
        if (ele.hasAttribute("onclick")) {
            ele.click();
        }
        ele = null;
    }
});
