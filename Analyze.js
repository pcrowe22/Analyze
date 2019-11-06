var myBits = 0;
function analyze() {
	localStorage.setItem('bits', myBits++;);
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}
function reset() {
	localStorage.setItem('bits', 0);
	document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}