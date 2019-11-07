var myBits = 0;
if (localStorage.getItem("myBits")>0){
	myBits=localStorage.getItem("myBits");
}
function analyze() {
	localStorage.setItem('myBits', myBits++);
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}
function reset() {
	localStorage.setItem('myBits', 0);
	myBits=0;
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}