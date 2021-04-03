
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos){
		document.getElementById('scrollid').style.maxWidth="50px";
		document.getElementById('scrollid4').style.maxWidth="60px";
		document.getElementById('scrollid5').style.left="-10rem";
		document.getElementById('scrollid1').style.maxWidth="50px";
		document.getElementById('scrollid2').style.top="18rem";
		document.getElementById('scrollid3').style.left="-12rem";

        console.log("up");}
	else{
		document.getElementById('scrollid').style.maxWidth="70px";
		document.getElementById('scrollid4').style.maxWidth="90px";
		document.getElementById('scrollid5').style.left="-13rem";
		document.getElementById('scrollid1').style.maxWidth="70px";
		document.getElementById('scrollid2').style.top="20rem";
		document.getElementById('scrollid3').style.left="-18rem";
        console.log("down");}
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});