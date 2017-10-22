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
		document.getElementById("OperationListTable").innerHTML = "";
		
		
	}
	/* ---------------------------------------- Operations Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	function FindOperationsByExperiment(){
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ExperimentID").value;
		postRequest(id, "/experimentfilteroperationlist",FindOperationsByExperimentCallback);
	}
	function FindOperationsByExperimentCallback(responseText) {
		document.getElementById("OperationListTable").innerHTML = "";
		var operations = JSON.parse(responseText);
		OperationByExperimentToTable(operations);
		
	function OperationByExperimentToTable(operations) {
		document.getElementById("OperationListTable").innerHTML = document
				.getElementById("OperationListTable").innerHTML
				+ "<Table><tr><th>Comment</th><th>Instrument</th><th>Settings</th><th>File location</th><th>Executed by</th><th>Experiment ID</th><th></th></tr>";
		for (i = 0; i < operations.length; i++) {
			document.getElementById("OperationListTable").innerHTML = document
					.getElementById("OperationListTable").innerHTML
					+ "<tr><td>"
					+ operations[i].comment
					+ "</td><td>"
					+ operations[i].instrument
					+ "</td><td>"
					+ operations[i].settings
					+ "</td><td>"
					+ operations[i].settings
					+  "</td><td>"
					+ operations[i].location
					+ "</td><td>"
					+ operations[i].person
					+ "</td><td>"
					+ operations[i].experiment.id
					+ "</td><td>"
					+ "<input id='"
					+ operations[i].id
					+ "' type='radio' name='OperationListTableselector' onclick=\"genericIdPass(this.id, 'deleteOperationField');\">"
					+ "</td></tr>"
		}
		document.getElementById("OperationListTable").innerHTML = document
			.getElementById("OperationListTable").innerHTML
			+ "</table>";
	}
	}