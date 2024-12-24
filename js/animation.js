gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length),
  ease: "none",
  scrollTrigger: {
    trigger: "#beginHorizonScroll",
    pin: true,
    scrub: 2,
    end: "10000px"
  }
});

gsap.set(".parallax14, .parallax13, .parallax12, .parallax11, .parallax10,.parallax1, .parallax2, .parallax3, .parallax4, .parallax5, .parallax6, .parallax7, .parallax8, .parallax9", { x: 100 });
ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

gsap.to(".parallax14", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax14",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "1"
  }
});


gsap.to(".parallax13", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax13",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "1"
  }
});

gsap.to(".parallax12", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax12",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "1"
  }
});

gsap.to(".parallax11", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax11",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "1"
  }
});


gsap.to(".parallax10", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax10",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "1"
  }
});

gsap.to(".parallax1", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax1",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "1"
  }
});



gsap.to(".parallax2", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "2"
  }
});


gsap.to(".parallax3", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax3",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "3"
  }
});


gsap.to(".parallax4", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax4",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "4"
  }
});


gsap.to(".parallax5", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax5",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "5"
  }
});


gsap.to(".parallax6", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax6",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "6"
  }
});


gsap.to(".parallax7", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax7",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "7"
  }
});

gsap.to(".parallax8", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax8",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "8"
  }
});

gsap.to(".parallax9", {
  x: -130,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax9",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "9"
  }
});

ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive),
  id: "4"
});

// only show the relevant section's markers at any given time
gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", { autoAlpha: 0 });
["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
  ScrollTrigger.create({
    trigger: "." + triggerClass,
    containerAnimation: scrollTween,
    start: "left 30%",
    end: i === 3 ? "right right" : "right 30%",
    markers: false,
    onToggle: self => gsap.to(".marker-" + (i + 1), { duration: 0.25, autoAlpha: self.isActive ? 1 : 0 })
  });
});

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

// making the code pretty/formatted.
PR.prettyPrint();