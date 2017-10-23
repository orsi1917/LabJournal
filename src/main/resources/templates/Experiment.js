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
				+ "' type='radio' checked name='OperationListTableselector' onclick=\"genericIdPass(this.id, 'deleteOperationField');\">"
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
					+ "' type='radio' name='OperationListTableselector' onclick=\"genericIdPass(this.id, 'deleteOperationField');\">"
					+ "</td></tr>"
		}
		document.getElementById("OperationListTable2").innerHTML = document
			.getElementById("OperationListTable2").innerHTML
			+ "</table>";
	}
	}