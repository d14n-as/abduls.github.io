
$(document).ready(function() {
    // Preload
    if (
        $(window).load(function() {
          $('body').addClass('overflowhidden');
          setTimeout(function() { 
            $("#preloader").fadeOut("slow", function() {
              $(this).remove();
            });
            $('body').removeClass('overflowhidden');
        }, 5000);
        })
      ); 
      
});