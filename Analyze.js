var myBits;
var myBytes;
if (localStorage.getItem("myBits")>0){
	myBits=localStorage.getItem("myBits");
	myBytes=localStorage.getItem("myBytes");
} else {
	myBits = 0;
	myBytes = 0;
}
document.getElementById("bits").innerHTML = myBits;
document.getElementById("bytes").innerHTML = myBytes;
if (myBits>=8) {
	docuemnt.getElementById('bytes').style.display = "inline-block";
}

let ControlPanel = {
	analyze: function() {
		localStorage.setItem('myBits', myBits++);
		document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
	},
	restart: function() {
		localStorage.setItem('myBits', 0);
		localStorage.setItem('myBytes', 0);
		myBits=0;
		myBytes=0;
		document.getElementById('bytes').style.display = "none";
		document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
		document.getElementById("bytes").innerHTML = localStorage.getItem("myBytes");
	},
	bitToByte: function() {
		if (myBits>=8){
			myBytes++;
			myBits -=8;
			localStorage.setItem('myBytes', myBytes);
			localStorage.setItem('myBits', myBits);
			document.getElementById("bytes").innerHTML = localStorage.getItem("myBytes");
			document.getElementById("bits").innerHTHML = localStorage.getItem("myBits");
		} else {
			document.getElementById('errorWindow').innerHTML = "Not enough bits";
		}
	}
}
	