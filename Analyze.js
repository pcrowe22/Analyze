var myBits;
var totalBits;
var myBytes;
var myBitLoopStrength;
var bitInterval;
var checkpoints = { crash0: false};
var myRestarts;
if (localStorage.getItem("storTotalBits")>=0){
	myBits=localStorage.getItem("myBits");
	myBytes=localStorage.getItem("myBytes");
  myBitLoopStrength = localStorage.getItem("storBitLoopStrength");
  myRestarts=localStorage.getItem("storTotalBits");
} else {
	myBits = 0;
	myBytes = 0;
  myBitLoopStrength = 0;
  myRestarts=0;
}
if (localStorage.getItem("storBitLoopStrength")>0){
  clearInterval(bitInterval);
  bitInterval = setInterval(changeBits, 10000/myBitLoopStrength);
}
document.getElementById("bits").innerHTML = myBits;
document.getElementById("bytes").innerHTML = myBytes;
document.getElementById("bitLoopStrength").innerHTML = myBitLoopStrength;
//document.getElementById("restarts").innerHTML = myRestarts;

let ControlPanel = {
	analyze: function() {
    myBits++;
    totalBits++;
		localStorage.setItem('myBits', myBits);
    localStorage.setItem('storTotalBits', totalBits);
		document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
		if (myBits>=8) {
			document.getElementById('bytes').style.display = "inline-block";
		}
    //document.getElementById("bitToByte").setAttribute("display", "block");
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
  
    clearInterval(bitInterval);
    
    if (!checkpoints.crash0){
      document.getElementById("errorWindwo").innerHTML = "Looks like you crashed. But you got a restart point!";
      checkpoints.crash0 = true;
    }
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
      clearInterval(bitInterval);
      bitInterval = setInterval(changeBits, 10000/myBitLoopStrength);
      if (myBitLoopStrength>3 && !checkpoints.crash0) {
        setTimeout(systemCrash(), 10000);
      }
    } else {
			document.getElementById('errorWindow').innerHTML = "Not enough bytes";
		}
	},
  showASCII: function() {
    if (myBits>=256) {
      myBits -=256;
      localStorage.setItem("myBits", myBits);
      document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
      //useASCII();
    } else {
      document.getElementById('errorWindow').innerHTML = "Not enough bits";
    }
  },
  hardRestart: function() {
    ControlPanel.restart();
    totalBits=0;
    localStorage.setItem("storTotalBits", 0);
  }
}
function changeBits() {
  myBits++;
  totalBits++;
  localStorage.setItem("myBits", myBits);
  localStorage.setItem("storTotalBits", totalBits);
  document.getElementById("bits").innerHTML = localStorage.getItem("myBits");
}
function systemCrash() {
  myRestarts++;
  ControlPanel.restart();
}