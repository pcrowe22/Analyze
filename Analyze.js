var myBits = 0;
var myBytes = 0;
analyze();
if (localStorage.getItem("myBits")>0){
	myBits=localStorage.getItem("myBits");
	myBytes=localStorage.getItem("myBytes");
}
function analyze() {
	localStorage.setItem('myBits', myBits++);
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}
function restart() {
	localStorage.setItem('myBits', 0);
	localStorage.setItem('myBytes', 0);
	myBits=0;
	myBytes=0;
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}
function bitToByte() {
	if (myBits>=8){
		myBytes++;
		myBits -=8;
		localStorage.setItem('myBytes', myBytes);
		localStorage.setItem('myBits', myBits);
	} else {
		document.getElementById('errorWindow', "Not enough bits");
	}
}
	