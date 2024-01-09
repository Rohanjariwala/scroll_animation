
document.addEventListener("DOMContentLoaded", (event) => {
  let tl = gsap.timeline({
 scrollTrigger: {
    trigger: ".container",
    pin: true, 
    start: "50px 200px", 
    end: "+=1100 400px", 
    scrub: 1, 
    // markers:true,
    // onEnter: () => console.log('test_enter')
   },
});
tl.to(".card2", { 
top:0,
duration:200,
onComplete: function() {
    document.querySelector('.scene2').classList.add('show');
  },
});

tl.to(".card3", { 
top:0, 
duration:200,
onComplete: function() {
    document.querySelector('.scene3').classList.add('show');
} 
}); 
});

   

