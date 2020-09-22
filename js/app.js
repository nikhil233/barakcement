const intro = document.querySelector("#bag");
const bag1 = intro.querySelector(".left-bag");
const bag2 = intro.querySelector(".right-bag");
const text1 = intro.querySelector(".bagp");


var SM = {
  sceneHeights: [], // has to be initialized with the scene heights
  scenePinLengths: [], // has to be initilized with "0"s
 
};


var controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 1900,
  triggerElement: intro,
  triggerHook: 0

})
 
  .setPin(intro)

  .addTo(controller);

var t1= new  TimelineLite();
   t1.fromTo(intro,0.5, {opacity:0} ,{opacity:1})  ;
	t1.fromTo(bag1 , 2 , { x: 300 } , { x: 50} );
	t1.fromTo(bag2, 2 , { x: -300 } , { x: -50},'-=2' );
	t1.fromTo(text1, 1 , { opacity : 0 } , { opacity: 1} , '-=1' );
	

	let scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0
})
  
  .setTween(t1)
  .addTo(controller); 

  t1.to(intro,1, {opacity:0}, "+=1") ;


  





