package nl.youngcapital.LabJournal.rest;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Project;
import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.Controller.ExperimentRepository;
import nl.youngcapital.LabJournal.Controller.ProjectService;
import nl.youngcapital.LabJournal.Controller.SampleRepository;
import nl.youngcapital.LabJournal.Controller.SampleService;


@RestController
public class SampleEindpoint {
	@Autowired
	SampleService sampleService;
	@Autowired
	SampleRepository sampleRepository;
	@Autowired
	ProjectService projectService;
	@Autowired
	ExperimentRepository experimentRepository;

		
	@ResponseBody
	@RequestMapping(value = "/samplepost", method = RequestMethod.POST)
	public void postEntity(@RequestBody Sample sample) {
		System.out.println(sample.getName());
		sampleService.saveSample(sample);
	}
	 @RequestMapping(value = "/samplelist", method = RequestMethod.GET)
	 public List<Sample> findAll() {
	    return (List<Sample>)sampleRepository.findAll();
	  }

	 @RequestMapping(value = "/filtersamplelist", method = RequestMethod.POST)
	 public List<Sample> filterfindAll(@RequestBody String name) {
		 return sampleService.filterSample(name);

	  }
	 @RequestMapping(value = "/projectfiltersamplelist", method = RequestMethod.POST)
	 public List<Sample> filterfindAll(@RequestBody long id) {
		 return sampleService.projectfilterSample(id);
	  }
	 @RequestMapping(value = "/experimentfiltersamplelist/{id}", method = RequestMethod.POST)
	 public List<Sample> experimentfilterfindAll(@PathVariable long id) {
		 return sampleService.experimentfilterSample(id);
	  }
	 
	 @RequestMapping(value = "/findSample/{id}", method = RequestMethod.GET)
	 public Sample findOneSample(@PathVariable long id) {		
		 return (Sample)sampleRepository.findOne(id);
	 }
	 @RequestMapping(value = "/updateSample/{id}", method = RequestMethod.POST)
	 public void updateSample(@RequestBody Sample sample, @PathVariable long id) {
		 sampleService.updateSample(sample.getName(), sample.getDescription(), id);
			 
	 }
	 @RequestMapping(value = "/addExperimentToSample/{sid}/{eid}", method = RequestMethod.GET)
	 public void addExperimentToSample(@PathVariable long sid, @PathVariable long eid) {
		 System.out.println("we got to eindpoint");
		 Sample sample = (Sample)sampleRepository.findOne(sid);
		 sampleService.saveSample(sample);
		 Experiment experiment = (Experiment)experimentRepository.findOne(eid);
		 sampleService.saveExperiment(experiment);
		 
		 for (int i=0; i<(sample.getExperiments()).size(); i++) {			
			 if ( ( (sample.getExperiments()).get(i)).getId() ==eid ) {
				 return;
			 }
		 }	 
		 sample.addExperiment(experiment);
		 sampleService.saveSample(sample);
	 }
	 @RequestMapping(value = "/removeExperimentFroomSample/{sid}/{eid}", method = RequestMethod.GET)
	 public void removeExperimentFroomSample(@PathVariable long sid, @PathVariable long eid) {
		 Sample sample = (Sample)sampleRepository.findOne(sid);
		 sampleService.saveSample(sample);
		 Experiment experiment = (Experiment)experimentRepository.findOne(eid);
		 sampleService.saveExperiment(experiment);		 
		 for (int i=0; i<(sample.getExperiments()).size(); i++) {			
			 if ( ( (sample.getExperiments()).get(i)).getId() ==eid ) {
				 sample.removeExperiment(experiment);
				 break;
			 }
		 }	 
		 
		 sampleService.saveSample(sample);
	 }
	 
	 @ResponseBody
	  @RequestMapping(value = "/sample/{id}", method = RequestMethod.DELETE)
	  public void updatesample(@PathVariable  long id) {
	    sampleRepository.delete(id);
	  } 
}

