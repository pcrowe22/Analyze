var myBits;
var myBytes;
var myBitLoopStrength;
if (localStorage.getItem("myBits")>=0){
	myBits=localStorage.getItem("myBits");
	myBytes=localStorage.getItem("myBytes");
  myBitLoopStrength = localStorage.getItem("storBitLoopStrength");
} else {
	myBits = 0;
	myBytes = 0;
  myBitLoopStrength = 0;
}
document.getElementById("bits").innerHTML = myBits;
document.getElementById("bytes").innerHTML = myBytes;
document.getElementById("bitLoopStrength").innerHTML = myBitLoopStrength;

let ControlPanel = {
	analyze: function() {
    myBits++;
		localStorage.setItem('myBits', myBits);
		document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
		if (myBits>=8) {
			document.getElementById('bytes').style.display = "inline-block";
		}
	},
	restart: function() {
		localStorage.setItem('myBits', 0);
		localStorage.setItem('myBytes', 0);
    localStorage.setItem('storBitLoopStrength', 0);

		myBits=0;
		myBytes=0;
		myBitLoopStrength=0;

		document.getElementById('bytes').style.display = "none";
		document.getElementById('bitLoop').style.display = "none";
		document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
		document.getElementById("bytes").innerHTML = localStorage.getItem("myBytes");
    document.getElementById("bitLoopStrength").innerHTML = localStorage.getItem("myBitLoopStrength");
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
			myBitLoopStrength++;
			myBytes -=8;
			localStorage.setItem("myBytes", myBytes);
			localStorage.setItem("storBitLoopStrength", myBitLoopStrength);
			document.getElementById("bitLoopStrength").innerHTML = localStorage.getItem("storBitLoopStrength");
			document.getElementById("bytes").innerHTML = localStorage.getItem("myBytes");
		} else {
			document.getElementById('errorWindow').innerHTML = "Not enough bytes";
		}
	}
}
if (myBitLoopStrength > 0) {
  setTimeout(myBits++, 10000/myBitLoopStrength);
}
