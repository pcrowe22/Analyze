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


let ControlPanel = {
	analyze: function() {
		localStorage.setItem('myBits', myBits++);
		document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
		if (myBits>=8) {
			document.getElementById('bytes').style.display = "inline-block";
		}
	},
	restart: function() {
		localStorage.setItem('myBits', 0);
		localStorage.setItem('myBytes', 0);

		myBits=0;
		myBytes=0;
		bitLoopStrength=0;

		document.getElementById('bytes').style.display = "none";
		document.getElementById('bitLoop').style.display = "none";
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
			document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
		} else {
			document.getElementById('errorWindow').innerHTML = "Not enough bits";
		}
		if (myBytes>=8) {
			document.getElementById('bitLoop').style.display = "block";
		}
	},
	bitLoop: function() {
		if (myBytes>=8){
			bitLoopStrength++;
			myBytes -=8;
			localStorage.setItem("myBytes", myBytes);
			localStorage.setItem("bitLoopStrength", bitLoopStrength);
			document.getElementById("bitLoopStrength").innerHTML = localStorage.getItem("bitLoopStrength");
			document.getElementById("bytes").innerHTML = localStorage.getItem("myBytes");
		} else {
			document.getElementById('errorWindow').innerHTML = "Not enough bytes";
		}
	}
}
