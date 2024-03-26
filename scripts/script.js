/* Sidenav: Set the width to 0 */
function closeNav()
{
    document.getElementById("sideNavigationMenu").style.width = "0";
}

/* Sidenav: Set the width to 250px */
function openNav()
{
    document.getElementById("sideNavigationMenu").style.width = "250px";
}

/* Image carousel */
let slideIndex = 1;
showSlides(slideIndex + 1);

/* Next/previous controls */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imgCarousel");
    let dots = document.getElementsByClassName("dot");

    /* In case we are in the last image */
    if (n > slides.length) {slideIndex = 1}   
    /* In case we are in the first image and go backwards */ 
    if (n < 1) {slideIndex = slides.length}
     
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";   
} 
