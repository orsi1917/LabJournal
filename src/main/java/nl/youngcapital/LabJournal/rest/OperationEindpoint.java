package nl.youngcapital.LabJournal.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Operation;
import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Controller.ExperimentRepository;
import nl.youngcapital.LabJournal.Controller.OperationRepository;
import nl.youngcapital.LabJournal.Controller.OperationService;
import nl.youngcapital.LabJournal.Controller.SampleService;

@RestController
public class OperationEindpoint {
	@Autowired
	OperationService operationService;
	@Autowired
	SampleService sampleService;
	@Autowired
	OperationRepository operationRepository;
	@Autowired
	ExperimentRepository experimentRepository;
	

	 @RequestMapping(value = "/addOperationToExperiment/{id}", method = RequestMethod.POST)
	 public void addOperationToExperiment(@RequestBody Operation operation, @PathVariable long id) {
		 operationService.saveOperation(operation);
		 Experiment experiment=experimentRepository.findOne(id);
		 sampleService.saveExperiment(experiment);
		 operation.setExperiment(experiment);
		 operationService.saveOperation(operation);
		 System.out.println(experiment.getId());
	 }

	 @RequestMapping(value = "/operationlist", method = RequestMethod.GET)
	 public List<Operation> findAll() {
		 return (List<Operation>)operationRepository.findAll();
	 }
 
	 @RequestMapping(value = "/experimentfilteroperationlist", method = RequestMethod.POST)
	 public List<Operation> experimentfilterOperation(@RequestBody long id) {
	 return operationService.experimentfilterOperation(id);
	 }
	 @RequestMapping(value = "/findOperaton/{id}", method = RequestMethod.GET)
	 public Operation findOneOperaton(@PathVariable long id) {		
		 return (Operation)operationRepository.findOne(id);
	 }
	 @RequestMapping(value = "/updateOperation/{id}", method = RequestMethod.POST)
	 public void updateSample(@RequestBody Operation operation, @PathVariable long id) {
		 operationService.updateOperation(operation.getComment(), operation.getInstrument(), operation.getLocation(), operation.getPerson(), operation.getSettings(), id);
			 
	 }
 
}
