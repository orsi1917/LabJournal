package nl.youngcapital.LabJournal.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Operation;
import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.SubSample;
import nl.youngcapital.LabJournal.Controller.OperationRepository;
import nl.youngcapital.LabJournal.Controller.OperationService;
import nl.youngcapital.LabJournal.Controller.SampleRepository;
import nl.youngcapital.LabJournal.Controller.SampleService;
import nl.youngcapital.LabJournal.Controller.SubSampleRepository;

@RestController
public class SubSampleEindpoint {
	@Autowired
	SampleService sampleService;
	@Autowired
	SubSampleRepository subSampleRepository;
	@Autowired
	SampleRepository sampleRepository;
	@Autowired
	OperationService operationService;
	@Autowired
	OperationRepository operationRepository;

	
	@ResponseBody
	@RequestMapping(value = "/subsamplepost", method = RequestMethod.POST)
	public void postEntity(@RequestBody SubSample subSample) {
		System.out.println(subSample.getName());
		sampleService.saveSubSample(subSample);
	}

	 @RequestMapping(value = "/addSubSampleToSample/{id}", method = RequestMethod.POST)
	 public void addSampleToProject(@RequestBody SubSample subSample, @PathVariable long id) {
		 sampleService.saveSubSample(subSample);
		 Sample sample = sampleRepository.findOne(id);
		 sampleService.saveSample(sample);
		 subSample.setSample(sample);
		 sampleService.saveSubSample(subSample);
		 System.out.println(subSample.getId());
	 }	 
	 @RequestMapping(value = "/subsamplelist", method = RequestMethod.GET)
	 public List<SubSample> findAll() {
	    return (List<SubSample>)subSampleRepository.findAll();
	  }

	 @RequestMapping(value = "/filtersubsamplelist", method = RequestMethod.POST)
	 public List<SubSample> filterfindAll(@RequestBody String name) {
		 return sampleService.filterSubSample(name);

	  }
	 @RequestMapping(value = "/samplefiltersubsamplelist", method = RequestMethod.POST)
	 public List<SubSample> filterfindAll(@RequestBody long id) {
		 return sampleService.sampleFilterSubSample(id);
	  }
	 @RequestMapping(value = "/findSubSample/{id}", method = RequestMethod.GET)
	 public SubSample findOneSubSample(@PathVariable long id) {		
		 return (SubSample)subSampleRepository.findOne(id);
	 }
	 @RequestMapping(value = "/updateSubSample/{id}", method = RequestMethod.POST)
	 public void updateSample(@RequestBody SubSample subsample, @PathVariable long id) {
		 sampleService.updateSubSample(subsample.getName(), subsample.getDescription(), subsample.getDanger(), subsample.getAmount(), subsample.getUnit(), id);
			 
	 }
	 @ResponseBody
	  @RequestMapping(value = "/subsample/{id}", method = RequestMethod.DELETE)
	  public void updatesample(@PathVariable  long id) {
	    subSampleRepository.delete(id);
	  } 
	 @RequestMapping(value = "/addOperationToSubSample/{sid}/{oid}", method = RequestMethod.GET)
	 public void addExperimentToSample(@PathVariable long sid, @PathVariable long oid) {
		 SubSample subSample = subSampleRepository.findOne(sid);
		 subSampleRepository.save(subSample);
		 Operation operation = (Operation)operationRepository.findOne(oid);
		 operationService.saveOperation(operation);
		 
		 for (int i=0; i<(subSample.getOperations()).size(); i++) {			
			 if ( ( (subSample.getOperations()).get(i)).getId() ==oid ) {
				 return;
			 }
		 }	 
		 subSample.addOperation(operation);
		 subSampleRepository.save(subSample);
	 }
	 @RequestMapping(value = "/removeExperimentFroomSample/{sid}/{oid}", method = RequestMethod.GET)
	 public void removeExperimentFroomSample(@PathVariable long sid, @PathVariable long oid) {
		 SubSample subSample = subSampleRepository.findOne(sid);
		 subSampleRepository.save(subSample);
		 Operation operation = (Operation)operationRepository.findOne(oid);
		 operationService.saveOperation(operation);		 
		 for (int i=0; i<(subSample.getOperations()).size(); i++) {			
			 if ( ( (subSample.getOperations()).get(i)).getId() ==oid ) {
				 subSample.removeOperation(operation);
				 break;
			 }
		 }	 
		 
		 subSampleRepository.save(subSample);
	 }

}
