/* ---------------------------------------- Sample Handling -------------------------------------------------
	 ---------------------------------------------------------------------------------------------------------*/	
function GetTheSample() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("SampleID").value;
		getRequest(null, "/findSample/" + id, GetTheSampleCallback);
	}

	function GetTheSampleCallback(responseText) {
		console.log(responseText);
		var sample = JSON.parse(responseText);
		document.getElementById("SampleName").innerHTML = sample.name;
		document.getElementById("SampleDescription").innerHTML = sample.description;
		
	}