//Typewriter effect
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('I do <strong>Front-End</strong>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<strong>Full stack</strong>')
  .pauseFor(1000)
  .deleteChars(16)
  .typeString('and <strong>App development</strong>')
  .pauseFor(2000)
  .start();


window.addEventListener('click', function(event) {
  const burger = this.document.getElementById('borgir');
  const navbar = this.document.getElementById('navbarBasicExample');
  if(event.target != burger){
    navbar.classList.remove('is-active')
    burger.classList.remove('is-active')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
  
});


//Scrollbar indicator
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

