/*
* ----------------------------------------------------------------------------------------
* 01.PRELOADER START
* ----------------------------------------------------------------------------------------
*/
var loader = document.querySelector(".pre-loader_js")
window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}
/*
* ----------------------------------------------------------------------------------------
* 01.PRELOADER END
* ----------------------------------------------------------------------------------------
*/

/*------- HUMBURGER MENU ICON -------*/
function myFunction(x) {
	x.classList.toggle("change");
}


/*
* ----------------------------------------------------------------------------------------
* 03.SCROLL TO TOP START
* ----------------------------------------------------------------------------------------
*/
var mybutton = document.getElementById("top-arrow_js");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*
* ----------------------------------------------------------------------------------------
* 03.SCROLL TO TOP END
* ----------------------------------------------------------------------------------------
*/