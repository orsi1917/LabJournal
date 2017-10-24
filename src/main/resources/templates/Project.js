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
//function DisableButtonsExcept(name1, name2) {
//	var inputs = document.getElementsByTagName("button");
//	for (var i = 0; i < inputs.length; i++) {
//		if (inputs[i].id != name1 && inputs[i].id != name2 ){
//		inputs[i].disabled = 'true';
//		}
//	}
//}
//		
//function ButtonEnabler() {
//	var inputs = document.getElementsByTagName("button");
//	for (var i = 0; i < inputs.length; i++) {
//		inputs[i].disabled = 'false';
//	}
//	
//}
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
		SamplesByProjectToTable2(samples);
	}

	function SamplesByProjectToTable2(samples) {
		var id = document.getElementById("ProjectID").value;
		document.getElementById("SamplesByProjectTable").innerHTML = document
				.getElementById("SamplesByProjectTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th></th></tr>";
		if (samples.length != 0){
			genericIdPass(samples[0].id, 'SampleID');
			document.getElementById("SamplesByProjectTable").innerHTML = document
			.getElementById("SamplesByProjectTable").innerHTML
			+ "<tr><td>"
			+ samples[0].id
			+ "</td><td>"
			+ "<a href='Samples.html?id="
			+ id
			+"&sample_id="
			+ samples[0].id
			+ "'>"
			+ samples[0].name
			+"</td><td>"
			+ "<input id='"
			+ samples[0].id
			+ "' type='radio' checked name='SamplesListTableselector' onclick=\"genericIdPass(this.id, 'SampleID');\">"
			+ "</td></tr>"
		}
		for (i = 1; i < samples.length; i++) {
			document.getElementById("SamplesByProjectTable").innerHTML = document
					.getElementById("SamplesByProjectTable").innerHTML
					+ "<tr><td>"
					+ samples[i].id
					+ "</td><td>"
					+ "<a href='Samples.html?id="
					+ id
					+"&sample_id="
					+ samples[i].id
					+ "'>"
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
//		if ( document.getElementById("AddSample").checked |
//			document.getElementById("AddExperiment").checked |
//			document.getElementById("ModifyExperiment").checked 
//		){
//			return;
//		}
		checkCheckBox("UpdateSampleCheckBox");
		// DisableButtonsExcept("UpdateSampleButton", "CancelSampleUpdate");
		RadioDisabler();
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
		RadioEnabler();
		//ButtonEnabler();
		loadpage();
		uncheckCheckBox("UpdateSampleCheckBox");
		
	}
	function cancelUpdate(id){
		RadioEnabler();
	//	ButtonEnabler();
		loadpage();
		uncheckCheckBox(id); 
		
	}
	function CoupleSampleAndExperiment() {
		var xhttp = new XMLHttpRequest();
		var sid = document.getElementById("SampleID").value;
		var eid = document.getElementById("ExperimentID").value;
		getRequest(null, "/addExperimentToSample/" + sid + "/" + eid, CoupleSampleAndExperimentCallback);
	}

	function CoupleSampleAndExperimentCallback(responseText) {
		console.log("done");
	
		
	}
	function Sampledeleter2() {
		uncheckCheckBox("UpdateSampleCheckBox")
		uncheckCheckBox("AddSampleCheckBox")
		var id = document.getElementById("SampleID").value;
		deleteRequest(null, "/sample/" + id, SampledeleterCallback2);
	}
	function SampledeleterCallback2(responseText) {
		loadpage();
	}
	/* ---------------------------------------- Experiment Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 function AddNewExperiment2() {
		 var name = document.getElementById("ExperimentName").value;
			var id = document.getElementById("ProjectID").value;
			var description = document.getElementById("ExperimentDescription").value;
			var experiment = '{"name":"' + name + '", "description" : "'
					+ description + '" }';
			console.log(experiment);

			postRequest(experiment ,"/addExperimentToProject/" + id, AddNewExperimentCallback2);
		}
	function AddNewExperimentCallback2(responseText) {
		uncheckCheckBox("AddExperimentCheckBox");
		FindExperimentByProject2();
		}
	
	function FindExperimentByProject2() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ProjectID").value;
		postRequest(id, "/projectFilterExperimentList",FindExperimentByProjectCallback2);
	}
	function FindExperimentByProjectCallback2(responseText) {
		document.getElementById("ExperimentsByProjectTable").innerHTML = "";
		var experiments = JSON.parse(responseText);
		ExperimentsByProjectToTable2(experiments);
	}

	function ExperimentsByProjectToTable2(experiments) {
		var id = document.getElementById("ProjectID").value;
			document.getElementById("ExperimentsByProjectTable").innerHTML = document
			.getElementById("ExperimentsByProjectTable").innerHTML
			+ "<Table><tr><th>ID</th><th>Name</th><th></th></tr>";
		if ( experiments.length != 0){ 
			genericIdPass(experiments[0].id, 'ExperimentID');
			document.getElementById("ExperimentsByProjectTable").innerHTML = document
				.getElementById("ExperimentsByProjectTable").innerHTML
				+ "<tr><td>"
				+ experiments[0].id
				+ "</td><td>"
				+ "<a href='Experiment.html?id="
				+ id
				+"&experiment_id="
				+ experiments[0].id
				+ "'>"
				+ experiments[0].name
				+ "</td><td>"
				+ "<input id='"
				+ experiments[0].id
				+ "' type='radio' checked name='ExperimentsListTableselector' onclick=\"genericIdPass(this.id, 'ExperimentID');\">"
				+ "</td></tr>";
		}
		for (i = 1; i < experiments.length; i++) {
			document.getElementById("ExperimentsByProjectTable").innerHTML = document
					.getElementById("ExperimentsByProjectTable").innerHTML
					+ "<tr><td>"
					+ experiments[i].id
					+ "</td><td>"
					+ "<a href='Experiment.html?id="
					+ id
					+"&experiment_id="
					+ experiments[i].id
					+ "'>"
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
	function GetOneExperiment() {
		checkCheckBox("ModifyExperimentCheckBox");
		RadioDisabler();
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ExperimentID").value;
		getRequest(null, "/findExperiment/" + id, GetOneExperimentCallback);
	}

	function GetOneExperimentCallback(responseText) {
		console.log(responseText);
		var experiment = JSON.parse(responseText);
		document.getElementById("NewExperimentName").value = experiment.name;
		document.getElementById("NewExperimentDescription").value = experiment.description;
		
	}
	function UpdateExperiment() {
		var ent = document.getElementById("NewExperimentName").value;
		var ent2 = document.getElementById("NewExperimentDescription").value;
		var id = document.getElementById("ExperimentID").value;
		var experiment = '{"name":"' + ent + '", "description" : "' + ent2 + '"}';
			postRequest(experiment ,"/updateExperiment/"+ id, UpdateExperimentCallback);
	}
	function UpdateExperimentCallback(responseText) {
		RadioEnabler();
		loadpage();
		uncheckCheckBox("ModifyExperimentCheckBox");
		
	}
	function Experimentdeleter2() {
		uncheckCheckBox("ModifyExperimentCheckBox")
		uncheckCheckBox("AddExperimentCheckBox")
		var id = document.getElementById("ExperimentID").value;
		deleteRequest(null, "/experiment/" + id, ExperimentdeleterCallback2);
	}

	function ExperimentdeleterCallback2(responseText) {
		loadpage();
	}