$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function pageSetup(){
	$('#title').typeIt({
	     speed: 60,
	     autoStart: false
	}).tiType("HI, NICE TO MEET YOU.").tiPause(750).tiDelete().tiType("MY NAME IS ALEX.").tiPause(750).tiDelete().tiType("SCROLL DOWN TO FIND OUT MORE ABOUT ME");

	$('#skills_caption').typeIt({
	     strings: 'SKILLS',
	     speed: 60,
	     autoStart: false
	});
	$('#projects_caption').typeIt({
	     strings: 'PROJECTS',
	     speed: 60,
	     autoStart: false
	});
}

// var previousPosition = window.pageYOffset || document.documentElement.scrollTop;

// window.onscroll = function() {
//   var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

//   if (previousPosition > currentPosition) {
//     console.log('scrolling up');
//     $('.navbar').fadeIn(1000);
//   } else {
//     console.log('scrolling down');
//     $('.navbar').fadeOut(1000);
//   }
//   previousPosition = currentPosition;
// };





