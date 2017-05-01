const remote = require('electron').remote;

document.getElementById("min-btn").addEventListener("click", function (e) {
   var window = remote.getCurrentWindow();
   window.minimize(); 
});

document.getElementById("max-btn").addEventListener("click", function (e) {
   var window = remote.getCurrentWindow();
   if (!window.isMaximized()) {
       window.maximize();          
   } else {
       window.unmaximize();
   }
});

document.getElementById("close-btn").addEventListener("click", function (e) {
   var window = remote.getCurrentWindow();
   window.close();
});

$(document).keyup(function (e){
    if(e.keyCode == 116){
        location.reload()
    }
})

$( ".close-menu" ).click(function() {
  // alert( "Handler for .click() called." );
  $( ".sidebar" ).width("25px");
  $( ".main-content" ).css("margin-left", "25px");
  $( ".instance" ).hide();
  $( ".logo-image" ).hide();
  $( ".open-menu" ).css("display", "block");
});

$( ".open-menu" ).click(function() {
  // alert( "Handler for .click() called." );
  $( ".sidebar" ).width("25%");
  $( ".main-content" ).css("margin-left", "25%");
  $( ".instance" ).show();
  $( ".logo-image" ).show();
  $( ".open-menu" ).css("display", "none");
});
$(window).resize(function(){
  if ($(window).width() < 500) {
    $( ".sidebar" ).width("25px");
    $( ".main-content" ).css("margin-left", "25px");
    $( ".instance" ).hide();
    $( ".logo-image" ).hide();
    $( ".open-menu" ).css("display", "block");
  }
  if ($(window).width() > 500) {
    $( ".sidebar" ).width("25%");
    $( ".main-content" ).css("margin-left", "25%");
    $( ".instance" ).show();
    $( ".logo-image" ).show();
    $( ".open-menu" ).css("display", "none");
  }
});

$(document).ready(function(){
    // to fade in on page load
    $("body").fadeIn(150); 
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(150, function(){
            document.location.href = redirect
        });
    });
})