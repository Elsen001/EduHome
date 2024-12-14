var hBottom = document.querySelector(".header-bottom");
var isExpanded = false; 

document.querySelector(".fa-bars").addEventListener("click", function () {
    if (!isExpanded) {
        hBottom.style.height = "420px";
        isExpanded = true; 
    } else {
        hBottom.style.height = (85) + "px"; 
        isExpanded = false; 
    }
});
