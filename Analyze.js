var myBits = 0;
function analyze() {
	localStorage.setItem('myBits', myBits++;);
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}
function reset() {
	localStorage.setItem('myBits', 0);
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}