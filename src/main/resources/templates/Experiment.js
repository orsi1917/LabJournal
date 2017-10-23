/* ---------------------------------------- Experiment Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
function GetTheExperiment() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ExperimentID").value;
		getRequest(null, "/findExperiment/" + id, GetTheExperimentCallback);
	}

	function GetTheExperimentCallback(responseText) {
		var experiment = JSON.parse(responseText);
		document.getElementById("ExperimentName").innerHTML = experiment.name;
		document.getElementById("ExperimentDescription").innerHTML = experiment.description;
	
		
		
	}
	/* ---------------------------------------- Operations Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 function AddNewOperationToExperiment2() {
			var comment = document.getElementById("OperationComment").value;
			var id = document.getElementById("ExperimentID").value;
			var instrument = document.getElementById("Instrument").value;
			var settings = document.getElementById("InstrumentSettings").value;
			var location = document.getElementById("Location").value;
			var person = document.getElementById("Person").value;
			var operation = '{"comment":"' + comment + '", "instrument" : "'
					+ instrument + '" , "settings" : "' + settings + '", "location" : "'
					+ location + '", "person" : "' + person + '"}';
			console.log(operation);

		postRequest(operation ,"/addOperationToExperiment/" + id,AddNewOperationToExperimentCallback2);
	}
	function AddNewOperationToExperimentCallback2(responseText) {
		FindOperationsByExperiment();
		uncheckCheckBox("AddOperationCheckBox");
	}
	function FindOperationsByExperiment(){
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ExperimentID").value;
		postRequest(id, "/experimentfilteroperationlist",FindOperationsByExperimentCallback);
	}
	function FindOperationsByExperimentCallback(responseText) {
		document.getElementById("OperationListTable2").innerHTML = "";
		var operations = JSON.parse(responseText);
		OperationByExperimentToTable(operations);
		
	function OperationByExperimentToTable(operations) {
		document.getElementById("OperationListTable2").innerHTML = document
				.getElementById("OperationListTable2").innerHTML
				+ "<Table><tr><th>Instrument</th><th>File location</th><th>Executed by</th><th></th></tr>";
		if (operations.length > 0){
			genericIdPass(operations[0].id, 'OperationID');
			document.getElementById("OperationListTable2").innerHTML = document
			.getElementById("OperationListTable2").innerHTML
				+ "<tr><td>"
				+ operations[0].instrument
				+ "</td><td>"
				+ operations[0].location
				+ "</td><td>"
				+ operations[0].person
				+ "</td><td>"
				+ "<input id='"
				+ operations[0].id
				+ "' type='radio' checked name='OperationListTableselector' onclick=\"genericIdPass(this.id, 'OperationID');\">"
				+ "</td></tr>"
		}
		for (i = 1; i < operations.length; i++) {
			document.getElementById("OperationListTable2").innerHTML = document
					.getElementById("OperationListTable2").innerHTML
					+ "<tr><td>"
					+ operations[i].instrument
					+ "</td><td>"
					+ operations[i].location
					+ "</td><td>"
					+ operations[i].person
					+ "</td><td>"
					+ "<input id='"
					+ operations[i].id
					+ "' type='radio' name='OperationListTableselector' onclick=\"genericIdPass(this.id, 'OperationID');\">"
					+ "</td></tr>"
		}
		document.getElementById("OperationListTable2").innerHTML = document
			.getElementById("OperationListTable2").innerHTML
			+ "</table>";
	}
	}
	function GetOneOperation() {
		checkCheckBox("UpdateOperationCheckBox");
		RadioDisabler();
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("OperationID").value;
		getRequest(null, "/findOperaton/" + id,  GetOneOperationCallback);
	}

	function  GetOneOperationCallback(responseText) {
		var operation = JSON.parse(responseText);
		document.getElementById("NewOperationComment").value = operation.comment;
		document.getElementById("NewInstrument").value = operation.instrument;
		document.getElementById("NewInstrumentSettings").value = operation.settings;
		document.getElementById("NewLocation").value = operation.location;
		document.getElementById("NewPerson").value = operation.person;
	}
	function UpdateOperation() {
		var comment = document.getElementById("NewOperationComment").value;
		var id = document.getElementById("OperationID").value;
		var instrument = document.getElementById("NewInstrument").value;
		var settings = document.getElementById("NewInstrumentSettings").value;
		var location = document.getElementById("NewLocation").value;
		var person = document.getElementById("NewPerson").value;
		var operation = '{"comment":"' + comment + '", "instrument" : "'
		+ instrument + '" , "settings" : "' + settings + '", "location" : "'
		+ location + '", "person" : "' + person + '"}';
			postRequest(operation ,"/updateOperation/"+ id, UpdateOperationCallback);
	}
	function UpdateOperationCallback(responseText) {
		RadioEnabler();
		//ButtonEnabler();
		loadpage();
		uncheckCheckBox("UpdateOperationCheckBox");
	}
	function operationDeleter() {
		var id = document.getElementById("OperationID").value;
		deleteRequest(null, "/operation/" + id, operationDeleterCallback);
	}

	function operationDeleterCallback(responseText) {
		FindOperationsByExperiment();
	}
	
	/* ---------------------------------------- Sample Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	
	function FindSamplesByExperiment(){
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ExperimentID").value;
		postRequest(id, "/experimentfiltersamplelist/" + id, FindSamplesByExperimentCallback);
	}
	function FindSamplesByExperimentCallback(responseText) {
		document.getElementById("SamplesByExperimentTable").innerHTML = "";
		var samples = JSON.parse(responseText);
		SamplesByExperimentToTable(samples);
	}
	
	function SamplesByExperimentToTable(samples) {
		var id = document.getElementById("ProjectID").value;
		document.getElementById("SamplesByExperimentTable").innerHTML = document
				.getElementById("SamplesByExperimentTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th></tr>";
		if (samples.length != 0){
			genericIdPass(samples[0].id, 'SampleID');
			document.getElementById("SamplesByExperimentTable").innerHTML = document
			.getElementById("SamplesByExperimentTable").innerHTML
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
			document.getElementById("SamplesByExperimentTable").innerHTML = document
					.getElementById("SamplesByExperimentTable").innerHTML
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
		document.getElementById("SamplesByExperimentTable").innerHTML = document
				.getElementById("SamplesByExperimentTable").innerHTML
				+ "</table>";		
	}