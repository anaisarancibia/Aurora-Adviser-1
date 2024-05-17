function myFunction(x) {
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel.style.width === "0px" || sidepanel.style.width === "") {
        sidepanel.style.width = "250px";
    } else {
        sidepanel.style.width = "0";
    }
    x.classList.toggle("change");
}
