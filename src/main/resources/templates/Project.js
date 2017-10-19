	/* ---------------------------------------- Project Handling -------------------------------------------------
	 ---------------------------------------------------------------------------------------------------------*/	
function GetTheProject() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ProjectID").value;
		getRequest(null, "/findProject/" + id, GetOneProjectCallback);
	}

	function GetOneProjectCallback(responseText) {
		console.log(responseText);
		var project = JSON.parse(responseText);
		document.getElementById("ProjectName").innerHTML = project.name;
		document.getElementById("ProjectComment").innerHTML = project.comment;
		
	}
	/* ---------------------------------------- Sample Handling -------------------------------------------------
	 ---------------------------------------------------------------------------------------------------------*/
	function FindSampleByProject2() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ProjectID").value;
		console.log(id);
		postRequest(id, "/projectfiltersamplelist",FindSampleByProjectCallback2);
	}
	function FindSampleByProjectCallback2(responseText) {
		document.getElementById("SamplesByProjectTable").innerHTML = "";				
		var samples = JSON.parse(responseText);
		console.log(this.responseText);
		SamplesByProjectToTable2(samples);
	}

	function SamplesByProjectToTable2(samples) {
		document.getElementById("SamplesByProjectTable").innerHTML = document
				.getElementById("SamplesByProjectTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th></tr>";
		for (i = 0; i < samples.length; i++) {
			document.getElementById("SamplesByProjectTable").innerHTML = document
					.getElementById("SamplesByProjectTable").innerHTML
					+ "<tr><td>"
					+ samples[i].id
					+ "</td><td>"
					+ samples[i].name
					+"</td><td>"
					+ "<input id='"
					+ samples[i].id
					+ "' type='radio' name='SamplesListTableselector' onclick=\"genericIdPass(this.id, 'SampleID');\">"
					+ "</td></tr>"
		}
		document.getElementById("SamplesByProjectTable").innerHTML = document
				.getElementById("SamplesByProjectTable").innerHTML
				+ "</table>";		
	}
	function GetOneSample() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("SampleID").value;
		getRequest(null, "/findSample/" + id, GetOneSampleCallback);
	}

	function GetOneSampleCallback(responseText) {
		console.log(responseText);
		var sample = JSON.parse(responseText);
		document.getElementById("SampleNameChange").value = sample.name;
		document.getElementById("SampleDescriptionChange").value = sample.description;
		
	}
	function UpdateSample() {
		var ent = document.getElementById("SampleNameChange").value;
		var ent2 = document.getElementById("SampleDescriptionChange").value;
		var id = document.getElementById("SampleID").value;
		var sample = '{"name":"' + ent + '", "description" : "' + ent2 + '"}';
			postRequest(sample ,"/updateSample/"+ id, UpdateSampleCallback);
	}
	function UpdateSampleCallback(responseText) {
		FindSampleByProject2();
		RadioEnabler();
		
	}