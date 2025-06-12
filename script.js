const button = document.getElementById("Share");

button.addEventListener("click", function() {
    const footer = document.getElementsByClassName("footer");
    footer.style.display = none;
    footer.style.backgroundColor = hsl(217, 19, 35);
    console.log("SHARE");
});