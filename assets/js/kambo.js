$(document).ready(function () {
    $('#toggler').click(function () {
        $('.main-navigation').slideToggle(200);
        $('#toggler .hamburger').toggleClass('rotate');
    });

    let height = $(".site-header").height();
    $(".margin-top").css("margin-top", `${height}px`);
});


// Get the button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
