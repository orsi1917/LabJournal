
	/* ---------------------------------------- Enable/disable while editing  -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 	
	function showButton(){ 
		  document.getElementById("UpdateProject").style.visibility = 'visible';
	}
	function hideButton(){
		document.getElementById("UpdateProject").style.visibility = "hidden";
	}
	function CancelProjectUpdate(){
		hideButton();
		RadioEnabler();
		ListProjects();
		ListOperations();
	}
	 
	 //disables  buttons
function RadioDisabler() {
	var inputs = document.querySelectorAll('input[type="radio"]');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].disabled = 'true';
	}
}
		//enables radio buttons	
function RadioEnabler() {
	var inputs = document.querySelectorAll('input[type="radio"]');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].disabled = 'false';
	}
	loadpage();
}	
/* ----------------------------------------Navigation bar -------------------------------------------------
--------------------------------------------------------------------------------------------------------- */
		//debug code
	function Tester(z){		
        var body = document.getElementsByTagName("html");
        console.log(document);
	}

	function alertme(){
	alert("x");
	}

		

	
/* ---------------------------------------- Project Handling -------------------------------------------------
--------------------------------------------------------------------------------------------------------- */
	function AddNewProject() {
		var ent = document.getElementById("projectname").value;
		var ent2 = document.getElementById("projectcomment").value;
		var project = '{"name":"' + ent + '", "comment" : "' + ent2 + '"}';
			postRequest(project ,"/projectpost/", AddNewProjectCallback);
	}
	function AddNewProjectCallback(responseText) {
		ListProjects();
	}
	

	function ListProjects() {
		getRequest(null,"/projectlist", ListProjectsCallback);
	}

	function ListProjectsCallback(responseText) {
		document.getElementById("list").innerHTML = "";
		console.log(responseText);
		var projects = JSON.parse(responseText);
		ProjectListToTable(projects);
	
			}

	
	function ProjectListToTable(projects) {
		document.getElementById("list").innerHTML += "<Table><tr><th>ID</th><th>Name</th><th>Comment</th></tr>";
		for (i = 0; i < projects.length; i++) {
			document.getElementById("list").innerHTML += "<tr><td>"
					+ projects[i].id
					+ "</td><td>"
					+ "<a href='Project2.html?id="
					+ projects[i].id
					+ "'>"
					+ projects[i].name
					+ "</a></td><td>"
					+ projects[i].comment
					+ "</td><td>"
					+ "<input id='"
					+ projects[i].id
					+ "' type='radio' name='selector'  onclick=\"genericIdPass(this.id, 'deletefield');\">"
					+ "</td></tr>";
		}
		document.getElementById("list").innerHTML += "</table>";
	}
	function GetOneProject() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("ProjectID").value;
		getRequest(null, "/findProject/" + id, GetOneProjectCallback);
	}

	function GetOneProjectCallback(responseText) {
		console.log(responseText);
		var project = JSON.parse(responseText);
		document.getElementById("projectnameChange").value = project.name;
		document.getElementById("projectcommentChange").value = project.comment;
		showButton();
		RadioDisabler();
	}
	function UpdateProject() {
		var ent = document.getElementById("projectnameChange").value;
		var ent2 = document.getElementById("projectcommentChange").value;
		var id = document.getElementById("ProjectID").value;
		var project = '{"name":"' + ent + '", "comment" : "' + ent2 + '"}';
			postRequest(project ,"/updateProject/"+ id, UpdateProjectCallback);
	}
	function UpdateProjectCallback(responseText) {
		ListProjects();
		RadioEnabler();
		hideButton();
	}

	function ProjectDeleter() {
		var id = document.getElementById("deletefield").value;
		deleteRequest(null, "/project/" + id, ProjectDeleterCallback);
	}
	function ProjectDeleterCallback(responseText) {
		ListProjects();
	}
	

	/* ---------------------------------------- Sample Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 function AddNewSampleToProject() {
		 var ent = document.getElementById("samplename").value;
			var ent2 = document.getElementById("sampledescription").value;
			var id = document.getElementById("ProjectID").value;
			var sample = '{"name":"' + ent + '", "description" : "' + ent2 + '" }';
			console.log(sample);
			postRequest(sample ,"/addSampleToProject/" + id, AddNewSampleToProjectCallback);
		}
	function AddNewSampleToProjectCallback(responseText) {
			ListSamples();
		}
	function ListSamples() {
		getRequest(null,"/samplelist", ListSamplesCallback);
	}

	function ListSamplesCallback(responseText) {
		document.getElementById("SamplesListTable").innerHTML = "";
		console.log(this.responseText);
		var samples = JSON.parse(responseText);
		SamplesListToTable(samples);
	}

	function SamplesListToTable(samples) {
		document.getElementById("SamplesListTable").innerHTML = document
				.getElementById("SamplesListTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Description</th><th>Project ID</th><th></th></tr>";
		for (i = 0; i < samples.length; i++) {
			document.getElementById("SamplesListTable").innerHTML = document
					.getElementById("SamplesListTable").innerHTML
					+ "<tr><td>"
					+ samples[i].id
					+ "</td><td>"
					+ samples[i].name
					+ "</td><td>"
					+ samples[i].description
					+ "</td><td>"
					+ samples[i].project.id
					+ "</td><td>"
					+ "<input id='"
					+ samples[i].id
					+ "' type='radio' name='SamplesListTableselector' onclick=\"genericIdPass(this.id, 'deleteSamplefield'), genericIdPass(this.id, 'deleteSamplefield2'), genericIdPass(this.id, 'deleteSamplefield3');\">"
					+ "</td></tr>"
		}
		document.getElementById("SamplesListTable").innerHTML = document
				.getElementById("SamplesListTable").innerHTML
				+ "</table>";
	}
	function FindSampleByProject() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("deletefield").value;
		console.log(id);
		postRequest(id, "/projectfiltersamplelist",FindSampleByProjectCallback);
	}
	function FindSampleByProjectCallback(responseText) {
		document.getElementById("SamplesByProjectTable").innerHTML = "";				
		var samples = JSON.parse(responseText);
		console.log(this.responseText);
		SamplesByProjectToTable(samples);
	}

	function SamplesByProjectToTable(samples) {
		document.getElementById("SamplesByProjectTable").innerHTML = document
				.getElementById("SamplesByProjectTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Description</th><th>Project ID</th></tr>";
		for (i = 0; i < samples.length; i++) {
			document.getElementById("SamplesByProjectTable").innerHTML = document
					.getElementById("SamplesByProjectTable").innerHTML
					+ "<tr><td>"
					+ samples[i].id
					+ "</td><td>"
					+ samples[i].name
					+ "</td><td>"
					+ samples[i].description
					+ "</td><td>"
					+ samples[i].project.id
					+"</td></tr>"
		}
		document.getElementById("SamplesByProjectTable").innerHTML = document
				.getElementById("SamplesByProjectTable").innerHTML
				+ "</table>";
	}
	function FindSampleByName() {
		var xhttp = new XMLHttpRequest();
		var name = document.getElementById("samplename2").value;
		postRequest(name, "/filtersamplelist",FindSampleByNameCallback);
	}
	function FindSampleByNameCallback(responseText) {
		console.log(responseText);
		var samples = JSON.parse(responseText);
		document.getElementById("filterSamplesListTabletable").innerHTML = "";
		SamplesByNameToTable(samples);
	}
	function SamplesByNameToTable(samples) {
		
		document.getElementById("filterSamplesListTabletable").innerHTML = document
				.getElementById("filterSamplesListTabletable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Project</th></tr>";
		for (i = 0; i < samples.length; i++) {
			document.getElementById("filterSamplesListTabletable").innerHTML = document
					.getElementById("filterSamplesListTabletable").innerHTML
					+ "<tr><td>"
					+ samples[i].id
					+ "</td><td>"
					+ "<a href='Samples.html?id="
					+ samples[i].project.id
					+"&sample_id="
					+ samples[0].id
					+ "'>"
					+ samples[i].name
					+ "</td><td>"
					+ "<a href='Project2.html?id="
					+ samples[i].project.id
					+ "'>"
					+ samples[i].project.name
					+"</td></tr>"
		}
		document.getElementById("filterSamplesListTabletable").innerHTML = document
				.getElementById("filterSamplesListTabletable").innerHTML
				+ "</table>";
	}
	function Sampledeleter() {
		var id = document.getElementById("deleteSamplefield").value;
		deleteRequest(null, "/sample/" + id, SampledeleterCallback);
	}
	function SampledeleterCallback(responseText) {
		ListSamples();
	}

	/* ---------------------------------------- SubSample Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 function AddNewSubSampleToSample() {
			var name = document.getElementById("SubSampleName").value;
				var id = document.getElementById("deleteSamplefield").value;
				var description = document.getElementById("SubSampleDescription").value;
				var danger = document.getElementById("danger").value;
				var amount = document.getElementById("amount").value;
				var unit = document.getElementById("unit").value;
				var subSample = '{"name":"' + name + '", "description" : "'
						+ description + '" , "danger" : "' + danger + '", "amount" : "'
						+ amount + '", "unit" : "' + unit + '"}';
				console.log(subSample);

			postRequest(subSample ,"/addSubSampleToSample/" + id,AddNewSubSampleToSampleCallback);
		}
	function AddNewSubSampleToSampleCallback(responseText) {
			ListSubSamples();
		}
	function ListSubSamples() {
		getRequest(null,"/subsamplelist",ListSubSamplesCallback);
	}
	function ListSubSamplesCallback(responseText) {
		document.getElementById("SubSamplesListTable").innerHTML = "";
		console.log(responseText);
		var subsamples = JSON.parse(responseText);
		SubSamplesToTable(subsamples);
	}
	function SubSamplesToTable(subsamples) {
		document.getElementById("SubSamplesListTable").innerHTML = document
				.getElementById("SubSamplesListTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Description</th><th>Amount</th><th>Danger</th><th>Sample ID</th><th></th></tr>";
		for (i = 0; i < subsamples.length; i++) {
			document.getElementById("SubSamplesListTable").innerHTML = document
					.getElementById("SubSamplesListTable").innerHTML
					+ "<tr><td>"
					+ subsamples[i].id
					+ "</td><td>"
					+ subsamples[i].name
					+ "</td><td>"
					+ subsamples[i].description
					+ "</td><td>"
					+ subsamples[i].amount
					+ " "
					+ subsamples[i].unit
					+ "</td><td>"
					+ subsamples[i].danger
					+ "</td><td>"
					+ subsamples[i].sample.id
					+ "</td><td>"
					+ "<input id='"
					+ subsamples[i].id
					+ "' type='radio' name='SubSamplesListTableselector' onclick=\"genericIdPass(this.id, 'deleteSubSamplefield');\">"
					+ "</td></tr>"
		}
		document.getElementById("SubSamplesListTable").innerHTML = document
				.getElementById("SubSamplesListTable").innerHTML
				+ "</table>";
	}
	function FindSubSampleBySample(){
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("deleteSamplefield").value;
		postRequest(id, "/samplefiltersubsamplelist",FindSubSampleBySampleCallback);
	}
	function FindSubSampleBySampleCallback(responseText) {
		document.getElementById("SubSamplesBySampleTable").innerHTML = "";
		console.log(responseText);
		var subSamples = JSON.parse(responseText);
		SubSamplesBySampleToTable(subSamples);
	}
	function SubSamplesBySampleToTable(subsamples) {
		var id = document.getElementById("ProjectID").value;
		document.getElementById("SubSamplesBySampleTable").innerHTML = document
				.getElementById("SubSamplesBySampleTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Description</th><th>Amount</th><th>Danger</th><th>Sample ID</th></tr>";
		for (i = 0; i < subsamples.length; i++) {
			document.getElementById("SubSamplesBySampleTable").innerHTML = document
					.getElementById("SubSamplesBySampleTable").innerHTML
					+ "<tr><td>"
					+ subsamples[i].id
					+ "</td><td>"
					+ subsamples[i].name
					+ "</td><td>"
					+ subsamples[i].description
					+ "</td><td>"
					+ subsamples[i].amount
					+ " "
					+ subsamples[i].unit
					+ "</td><td>"
					+ subsamples[i].danger
					+ "</td><td>"
					+ subsamples[i].sample.id
					+"</td></tr>"
		}
		document.getElementById("SubSamplesBySampleTable").innerHTML = document
				.getElementById("SubSamplesBySampleTable").innerHTML
				+ "</table>";
	}
	function subSampledeleter() {
		var id = document.getElementById("deleteSubSamplefield").value;
		deleteRequest(null, "/subsample/" + id, subSampledeleterCallback);
	}

	function subSampledeleterCallback(responseText) {
		ListSubSamples();
	}

	/* ---------------------------------------- Experiment Handling -------------------------------------------------
	 --------------------------------------------------------------------------------------------------------- */
	 function AddNewExperiment() {
		 var name = document.getElementById("ExperimentName").value;
			var id = document.getElementById("ProjectID").value;
			var description = document.getElementById("ExperimentDescription").value;
			var experiment = '{"name":"' + name + '", "description" : "'
					+ description + '" }';
			console.log(experiment);

			postRequest(experiment ,"/addExperimentToProject/" + id, AddNewExperimentCallback);
		}
	function AddNewExperimentCallback(responseText) {
			ListExperiment();
		}
	function ListExperiment() {
		getRequest(null,"/experimentlist",ListExperimentCallback);
	}
	function ListExperimentCallback(responseText) {
		document.getElementById("experimentlist").innerHTML = "";
		console.log(this.responseText);
		var experiments = JSON.parse(responseText);
		ExperimentsToTable(experiments);
	}
	function ExperimentsToTable(experiments) {
		document.getElementById("experimentlist").innerHTML = document
				.getElementById("experimentlist").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Description</th><th>Project ID</th><th></th></tr>";
		for (i = 0; i < experiments.length; i++) {
			document.getElementById("experimentlist").innerHTML = document
					.getElementById("experimentlist").innerHTML
					+ "<tr><td>"
					+ experiments[i].id
					+ "</td><td>"
					+ experiments[i].name
					+ "</td><td>"
					+ experiments[i].description
					+ "</td><td>"
					+ experiments[i].project.id
					+ "</td><td>"
					+ "<input id='"
					+ experiments[i].id
					+ "' type='radio' name='experimentlistselector' onclick=\"genericIdPass(this.id, 'deleteExperimentField'), genericIdPass(this.id, 'deleteExperimentField2');\">"
					+ "</td></tr>"
		}
		document.getElementById("experimentlist").innerHTML = document
				.getElementById("experimentlist").innerHTML
				+ "</table>";
	}
	function FindExperimentByName() {
		var xhttp = new XMLHttpRequest();
		var name = document.getElementById("ExperimentName2").value;
		postRequest(name, "/filterExperimentList",FindExperimentByNameCallback);
	}
	function FindExperimentByNameCallback(responseText) {
		console.log(responseText);
		var experiments = JSON.parse(responseText);
		document.getElementById("ExperimentByNameTable").innerHTML = "";
		ExperimentByNameToTable(experiments);
	}

	function ExperimentByNameToTable(experiments) {
		
		document.getElementById("ExperimentByNameTable").innerHTML = document
				.getElementById("ExperimentByNameTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Project</th></tr>";
		for (i = 0; i < experiments.length; i++) {
			document.getElementById("ExperimentByNameTable").innerHTML = document
					.getElementById("ExperimentByNameTable").innerHTML
					+ "<tr><td>"
					+ experiments[i].id
					+ "</td><td>"
					+ "<a href='Experiment.html?id="
					+ experiments[i].project.id
					+"&experiment_id="
					+ experiments[i].id
					+ "'>"
					+ experiments[i].name
					+ "</a></td><td>"
					+ "<a href='Project2.html?id="
					+ experiments[i].project.id
					+ "'>"
					+ experiments[i].project.name
					+"</a></td></tr>"
		}
		document.getElementById("ExperimentByNameTable").innerHTML = document
				.getElementById("ExperimentByNameTable").innerHTML
				+ "</table>";
	}
	function FindExperimentByProject() {
		var xhttp = new XMLHttpRequest();
		var id = document.getElementById("deletefield").value;
		postRequest(id, "/projectFilterExperimentList",FindExperimentByProjectCallback);
	}
	function FindExperimentByProjectCallback(responseText) {
		document.getElementById("ExperimentsByProjectTable").innerHTML = "";
		console.log(this.responseText);
		var experiments = JSON.parse(responseText);
		ExperimentsByProjectToTable(experiments);
	}

	function ExperimentsByProjectToTable(experiments) {
		var id = document.getElementById("ProjectID").value;
		document.getElementById("ExperimentsByProjectTable").innerHTML = document
				.getElementById("ExperimentsByProjectTable").innerHTML
				+ "<Table><tr><th>ID</th><th>Name</th><th>Description</th><th>Project ID</th></tr>";
		for (i = 0; i < experiments.length; i++) {
			document.getElementById("ExperimentsByProjectTable").innerHTML = document
					.getElementById("ExperimentsByProjectTable").innerHTML
					+ "<tr><td>"
					+ experiments[i].id
					+ "</td><td>"
					+ experiments[i].name
					+ "</td><td>"
					+ experiments[i].description
					+ "</td><td>"
					+ experiments[i].project.id
					+"</td></tr>"
		}
		document.getElementById("ExperimentsByProjectTable").innerHTML = document
				.getElementById("ExperimentsByProjectTable").innerHTML
				+ "</table>";
	}
	function Experimentdeleter() {
		var id = document.getElementById("deleteExperimentField").value;
		deleteRequest(null, "/experiment/" + id, ExperimentdeleterCallback);
	}

	function ExperimentdeleterCallback(responseText) {
		ListExperiment();
	}
	/* ---------------------------------------- Operation Handling -------------------------------------------------
	--------------------------------------------------------------------------------------------------------- */
	 function AddNewOperationToExperiment() {
			var comment = document.getElementById("OperationComment").value;
			var id = document.getElementById("deleteExperimentField2").value;
			var instrument = document.getElementById("Instrument").value;
			var settings = document.getElementById("InstrumentSettings").value;
			var location = document.getElementById("Location").value;
			var person = document.getElementById("Person").value;
			var operation = '{"comment":"' + comment + '", "instrument" : "'
					+ instrument + '" , "settings" : "' + settings + '", "location" : "'
					+ location + '", "person" : "' + person + '"}';
			console.log(operation);

		postRequest(operation ,"/addOperationToExperiment/" + id,AddNewOperationToExperimentCallback);
	}
	function AddNewOperationToExperimentCallback(responseText) {
		ListOperations();
	}
	function ListOperations() {
		getRequest(null,"/operationlist",ListOperationsCallback);
	}
	function ListOperationsCallback(responseText) {
		document.getElementById("OperationListTable").innerHTML = "";
		console.log(responseText);
		var operations = JSON.parse(responseText);
		OperationsToTable(operations);
	}
	function OperationsToTable(operations) {
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
	
	

	/* ---------------------------------------- Selector Handling -------------------------------------------------
	--------------------------------------------------------------------------------------------------------- */
	function genericIdPass(idpass, fieldname){
		document.getElementById(fieldname).value = idpass;
	}
// 	function handleProjectSelector(idpass) {
// 		document.getElementById("deletefield").value = idpass;
// 		document.getElementById("ProjectID").value = idpass;
// 		document.getElementById("ProjectID2").value = idpass;

// 	}
// 	function handleSampleSelector(idpass) {
// 		document.getElementById("deleteSamplefield").value = idpass;

// 	}
// 	function handleSubsampleSelector(idpass) {
// 		document.getElementById("deleteSubSamplefield").value = idpass;

// 	}
// 	function handleExperimentSelector(idpass) {
// 		document.getElementById("deleteExamplefield").value = idpass;
// 	}
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}

	/* ---------------------------------------- Request Handling -------------------------------------------------
	--------------------------------------------------------------------------------------------------------- */
	function getRequest(data, url, callback) {
		xhttpRequest(data,url,callback,"GET");
	}
	function postRequest(data, url, callback) {
		xhttpRequest(data,url,callback,"POST");
	}
	function deleteRequest(data, url, callback) {
		xhttpRequest(data,url,callback,"DELETE");
	}
	function xhttpRequest(data, url, callback, type) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				callback(this.responseText);	
			}
		};
		xhttp.open(type, "http://localhost:8082"+url);
		xhttp.setRequestHeader("Content-type", "application/json");
		if(data == null) {//geen idee of dit ook anders kan (null opsturen?)
			xhttp.send();
		} else {
			xhttp.send(data);
		}
	}

	/* ----------------------------------------Data Loadrer -------------------------------------------------
	--------------------------------------------------------------------------------------------------------- */
	function dataLoader() {
	ListProjects();
	
	}
	

	