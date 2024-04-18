gsap.registerPlugin(ScrollTrigger);
gsap.config({
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});

const shows = gsap.utils.toArray('.show');
shows.forEach((show, i) => {
  gsap.set(show, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    overwrite: "auto",
    markers: false,
  }),
    ScrollTrigger.create({
      trigger: show,
      markers: false,
      onEnter: () => gsap.to(show, { y: 0, opacity: 1, stagger: 0.5 }),
      onLeave: () => gsap.to(show, { y: 0, opacity: 1, stagger: 0.3 }),
    });
});


$(document).ready(function() {
    if (
        $(window).load(function() {
          $('body').addClass('overflowhidden');
          setTimeout(function() { 
            $("#preloader").fadeOut("slow", function() {
              $(this).remove();
            });
            $('body').removeClass('overflowhidden');
        }, 3000);
        })
      ); 
      
});

