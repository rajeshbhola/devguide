// A $( document ).ready() block.
$(document).ready(function () {
  // DropCap.js
  var dropcaps = document.querySelectorAll(".dropcap");
  window.Dropcap.layout(dropcaps, 2);

  // Responsive-Nav
  var nav = responsiveNav(".nav-collapse");

  // Round Reading Time
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });
});



$(document).ready(function() { 
	// Show the button when the user scrolls down 100px from the top 
	$(window).scroll(function() { if ($(this).scrollTop() > 100) { $('#backToTop').fadeIn(); } else { $('#backToTop').fadeOut(); } }); 
	// Scroll to the top of the page when the button is clicked 
	$('#backToTop').click(function() { $('html, body').animate({ scrollTop: 0 }, 'smooth'); return false; 
  }); 
});


window.addEventListener("load", function () {
  // Add a delay of 3 seconds before hiding the loading spinner
  setTimeout(function () {
    document.getElementById("loading-spinner").style.display = "none";
  }, 300); // 3000 milliseconds = 3 seconds
});