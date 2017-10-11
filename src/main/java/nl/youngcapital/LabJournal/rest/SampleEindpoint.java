package nl.youngcapital.LabJournal.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Project;
import nl.youngcapital.LabJournal.Sample;
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
	
	
	@ResponseBody
	@RequestMapping(value = "/sample", method = RequestMethod.GET)
	public Sample getsample2() {
		Sample sample = new Sample();
		System.out.println(sample);
		sampleService.saveSample(sample);
		return sample;
	}
	@ResponseBody
	@RequestMapping(value = "/jojoKLM", method = RequestMethod.POST)
	public Sample postSample(@RequestBody Sample sample) {
		sampleService.saveSample(sample);
		Project project = new Project();
		projectService.saveProject(project);
		project.setName("Auto-generated");
		project.setComment("comment");
		projectService.saveProject(project);
		sample.setProject(project);
		System.out.println(sample);
		sampleService.saveSample(sample);
		return sample;
	}



	
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
	  @ResponseStatus(value = HttpStatus.OK)
	  @RequestMapping(value = "/sample/{id}", method = RequestMethod.DELETE)
	  public void updatesample(@PathVariable  long id) {
	    sampleRepository.delete(id);
	  } 
}


