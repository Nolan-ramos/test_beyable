const openPopin = document.getElementById("openPopin");
const closePopin = document.getElementById("closePopin");
const popin = document.getElementById("popin");

openPopin.addEventListener("click", function() {
    popin.style.opacity = "1";
    popin.style.visibility = "visible";
});

closePopin.addEventListener("click", function() {
    popin.style.opacity = "0";
    popin.style.visibility = "hidden";
});
