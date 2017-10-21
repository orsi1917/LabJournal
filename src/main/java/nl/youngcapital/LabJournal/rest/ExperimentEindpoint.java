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
import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.Controller.ExperimentRepository;
import nl.youngcapital.LabJournal.Controller.ProjectService;
import nl.youngcapital.LabJournal.Controller.SampleService;

@RestController
public class ExperimentEindpoint {
	@Autowired
	SampleService sampleService;
	@Autowired
	ExperimentRepository experimentRepository;
	@Autowired
	ProjectService projectService;
	
	@ResponseBody
	@RequestMapping(value = "/experiment", method = RequestMethod.GET)
	public Sample getsample2() {
		Sample sample = new Sample();
		System.out.println(sample);
		sampleService.saveSample(sample);
		return sample;
	}

		
	@ResponseBody
	@RequestMapping(value = "/experimentpost", method = RequestMethod.POST)
	public void postEntity(@RequestBody Experiment experiment) {
		System.out.println(experiment.getName());
		sampleService.saveExperiment(experiment);
	}
	 @RequestMapping(value = "/experimentlist", method = RequestMethod.GET)
	 public List<Experiment> findAll() {
	    return (List<Experiment>)experimentRepository.findAll();
	  }

	 @RequestMapping(value = "/filterExperimentList", method = RequestMethod.POST)
	 public List<Experiment> filterfindAll(@RequestBody String name) {
		 return sampleService.filterExperiment(name);

	  }
	 @RequestMapping(value = "/projectFilterExperimentList", method = RequestMethod.POST)
	 public List<Experiment> filterfindAll(@RequestBody long id) {
		 return sampleService.projectfilterExperiment(id);

	  }
	 
	 @ResponseBody
	  @RequestMapping(value = "/experiment/{id}", method = RequestMethod.DELETE)
	  public void updatesample(@PathVariable  long id) {
	    experimentRepository.delete(id);
	  } 
	 @RequestMapping(value = "/findExperiment/{id}", method = RequestMethod.GET)
	 public Experiment findOneExperiment(@PathVariable long id) {
		
		 return (Experiment)experimentRepository.findOne(id);
	 }
	 @RequestMapping(value = "/updateExperiment/{id}", method = RequestMethod.POST)
	 public void updateSample(@RequestBody Experiment experiment, @PathVariable long id) {
		sampleService.updateExperiment(experiment.getName(), experiment.getDescription(), id);
			 
	 }
}

