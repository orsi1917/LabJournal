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
		ExperimentsByProjectToTable2(sample.experiments);
		
	}
	/* ---------------------------------------- SubSample Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 function AddNewSubSampleToSample2() {
			var name = document.getElementById("SubSampleName").value;
				var id = document.getElementById("SampleID").value;
				var description = document.getElementById("SubSampleDescription").value;
				var danger = document.getElementById("danger").value;
				var amount = document.getElementById("amount").value;
				var unit = document.getElementById("unit").value;
				var subSample = '{"name":"' + name + '", "description" : "'
						+ description + '" , "danger" : "' + danger + '", "amount" : "'
						+ amount + '", "unit" : "' + unit + '"}';
				console.log(subSample);

			postRequest(subSample ,"/addSubSampleToSample/" + id,AddNewSubSampleToSampleCallback2);
		}
	function AddNewSubSampleToSampleCallback2(responseText) {
			loadpage();
			uncheckCheckBox("AddSubSampleCheckBox");
		}
	
	function FindSubSampleBySample2(){
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("SampleID").value;
		postRequest(id, "/samplefiltersubsamplelist",FindSubSampleBySampleCallback2);
	}
	function FindSubSampleBySampleCallback2(responseText) {
		document.getElementById("SubSamplesBySampleTable").innerHTML = "";
		console.log(responseText);
		var subSamples = JSON.parse(responseText);
		SubSamplesBySampleToTable2(subSamples);
	}
	function SubSamplesBySampleToTable2(subsamples) {
			document.getElementById("SubSamplesBySampleTable").innerHTML = document
				.getElementById("SubSamplesBySampleTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Amount</th><th>Danger</th><th></th></tr>";
			if (subsamples.length > 0) {
				genericIdPass(subsamples[0].id, 'SubSampleID');
				document.getElementById("SubSamplesBySampleTable").innerHTML = document
				.getElementById("SubSamplesBySampleTable").innerHTML
				+ "<tr><td>"
				+ subsamples[0].id
				+ "</td><td>"
				+ subsamples[0].name
				+ "</td><td>"
				+ subsamples[0].amount
				+ " "
				+ subsamples[0].unit
				+ "</td><td>"
				+ subsamples[0].danger
				+ "</td><td>"
				+ "<input id='"
				+ subsamples[0].id
				+ "' type='radio' checked name='SubSamplesListTableselector' onclick=\"genericIdPass(this.id, 'SubSampleID');\">"
				+ "</td></tr>"
			}
		for (i = 1; i < subsamples.length; i++) {
			document.getElementById("SubSamplesBySampleTable").innerHTML = document
					.getElementById("SubSamplesBySampleTable").innerHTML
					+ "<tr><td>"
					+ subsamples[i].id
					+ "</td><td>"
					+ subsamples[i].name
					+ "</td><td>"
					+ subsamples[i].amount
					+ " "
					+ subsamples[i].unit
					+ "</td><td>"
					+ subsamples[i].danger
					+ "</td><td>"
					+ "<input id='"
					+ subsamples[i].id
					+ "' type='radio' name='SubSamplesListTableselector' onclick=\"genericIdPass(this.id, 'SubSampleID');\">"
					+ "</td></tr>"
		}
		document.getElementById("SubSamplesBySampleTable").innerHTML = document
				.getElementById("SubSamplesBySampleTable").innerHTML
				+ "</table>";
	}
	function GetOneSubSample() {
		checkCheckBox("UpdateSubSampleCheckBox");
		RadioDisabler();
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("SubSampleID").value;
		getRequest(null, "/findSubSample/" + id, GetOneSubSampleCallback);
	}

	function GetOneSubSampleCallback(responseText) {
		var subSample = JSON.parse(responseText);
		document.getElementById("SubSampleNameChange").value = subSample.name;
		document.getElementById("SubSampleDescriptionChange").value = subSample.description;
		document.getElementById("NewDanger").value = subSample.danger;
		document.getElementById("NewAmount").value = subSample.amount;
		document.getElementById("NewUnit").value = subSample.unit;
	}
	function UpdateSubSample() {
		var name = document.getElementById("SubSampleNameChange").value;
		var id = document.getElementById("SubSampleID").value;
		var description = document.getElementById("SubSampleDescriptionChange").value;
		var danger = document.getElementById("NewDanger").value;
		var amount = document.getElementById("NewAmount").value;
		var unit = document.getElementById("NewUnit").value;
		var subSample = '{"name":"' + name + '", "description" : "'
				+ description + '" , "danger" : "' + danger + '", "amount" : "'
				+ amount + '", "unit" : "' + unit + '"}';
			postRequest(subSample ,"/updateSubSample/"+ id, UpdateSubSampleCallback);
	}
	function UpdateSubSampleCallback(responseText) {
		RadioEnabler();
		//ButtonEnabler();
		loadpage();
		uncheckCheckBox("UpdateSubSampleCheckBox");
	}
	function SubSampledeleter2() {
		uncheckCheckBox("UpdateSubSampleCheckBox")
		uncheckCheckBox("AddSubSampleCheckBox")
		var id = document.getElementById("SubSampleID").value;
		deleteRequest(null, "/subsample/" + id, SubSampledeleterCallback2);
	}
	function SubSampledeleterCallback2(responseText) {
		loadpage();
	}
	/* ---------------------------------------- Experiment Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	
	function RemoveExperiment() {
		var xhttp = new XMLHttpRequest();
		var sid = document.getElementById("SampleID").value;
		var eid = document.getElementById("ExperimentID").value;
		getRequest(null, "/removeExperimentFroomSample/" + sid + "/"+ eid, RemoveExperimentCallback);
	}

	function RemoveExperimentCallback(responseText) {
	
	}