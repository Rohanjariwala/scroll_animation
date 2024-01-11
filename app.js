
setTimeout(() => {


  let tl = gsap.timeline({
 scrollTrigger: {
    trigger: ".container",
    pin: true, 
    start: "50px 100px", 
    end: "+=1800 100px", 
    scrub: 0.2, 
    // markers:true,
    toggleClass:  "title-selected",
    },
});
tl.to(".title",{
  y:-400,
  duration:200,
});
tl.to(".card2", { 
  top:0,
  duration:200,
  onComplete: function() {
      document.querySelector('.scene2').classList.add('show');
    },
 });
tl.to(".scene2",{
   autoAlpha:1,
   top:0, 
   duration:100,
})
tl.to(".card3", { 
  top:0, 
  duration:200,
  onComplete: function() {
      document.querySelector('.scene3').classList.add('show');
    },
}); 
tl.to(".scene3",{
   autoAlpha:1,
   top:0, 
   duration:100,
});

}, 10);

ScrollTrigger.refresh(); 
 
 
