/* ---------------------------------------- Hide and Show -------------------------------------------------
	 ---------------------------------------------------------------------------------------------------------*/	
function showArea(field){ 
		  document.getElementById(field).style.visibility = 'visible';
	}
	function hideArea(field){
		document.getElementById(field).style.visibility = "hidden";
	}
function checkCheckBox(id){
	document.getElementById(id).checked=true;
}
function uncheckCheckBox(id){
	document.getElementById(id).checked=false;
}

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
	 function AddNewSampleToProject2() {
		 var ent = document.getElementById("samplename").value;
			var ent2 = document.getElementById("sampledescription").value;
			var id = document.getElementById("ProjectID").value;
			var sample = '{"name":"' + ent + '", "description" : "' + ent2 + '" }';
			console.log(sample);
			postRequest(sample ,"/addSampleToProject/" + id, AddNewSampleToProjectCallback2);
		}
	function AddNewSampleToProjectCallback2(responseText) {
		uncheckCheckBox("AddSampleCheckBox");
		FindSampleByProject2();
		}
	
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
		checkCheckBox("UpdateSampleCheckBox");
		RadioEnabler();
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
		uncheckCheckBox("UpdateSampleCheckBox");
		
	}
	function cancelUpdate(id){
		RadioEnabler();
		FindSampleByProject2();
		uncheckCheckBox(id); 
		
	}
	function Sampledeleter2() {
		var id = document.getElementById("SampleID").value;
		deleteRequest(null, "/sample/" + id, SampledeleterCallback2);
	}
	function SampledeleterCallback2(responseText) {
		FindSampleByProject2();
	}
	/* ---------------------------------------- Experiment Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	function FindExperimentByProject2() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ProjectID").value;
		postRequest(id, "/projectFilterExperimentList",FindExperimentByProjectCallback2);
	}
	function FindExperimentByProjectCallback2(responseText) {
		document.getElementById("ExperimentsByProjectTable").innerHTML = "";
		console.log(this.responseText);
		var experiments = JSON.parse(responseText);
		ExperimentsByProjectToTable2(experiments);
	}

	function ExperimentsByProjectToTable2(experiments) {
		var id = document.getElementById("ProjectID").value;
		document.getElementById("ExperimentsByProjectTable").innerHTML = document
				.getElementById("ExperimentsByProjectTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th></tr>";
		for (i = 0; i < experiments.length; i++) {
			document.getElementById("ExperimentsByProjectTable").innerHTML = document
					.getElementById("ExperimentsByProjectTable").innerHTML
					+ "<tr><td>"
					+ experiments[i].id
					+ "</td><td>"
					+ experiments[i].name
					+ "</td><td>"
					+ "<input id='"
					+ experiments[i].id
					+ "' type='radio' name='ExperimentsListTableselector' onclick=\"genericIdPass(this.id, 'ExperimentID');\">"
					+ "</td></tr>"
		}
		document.getElementById("ExperimentsByProjectTable").innerHTML = document
				.getElementById("ExperimentsByProjectTable").innerHTML
				+ "</table>";
	}