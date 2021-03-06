package nl.youngcapital.LabJournal.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Project;
import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.Controller.ProjectRepository;
import nl.youngcapital.LabJournal.Controller.ProjectService;
import nl.youngcapital.LabJournal.Controller.SampleService;

@RestController
public class ProjectEindpoint {
	@Autowired
	ProjectService projectService;
	@Autowired
	ProjectRepository projectRepository;
	@Autowired
	SampleService sampleService;


	@ResponseBody
	@RequestMapping(value = "/projectpost", method = RequestMethod.POST)
	public void postEntity(@RequestBody Project project) {
		
		System.out.println(project.getName());
		projectService.saveProject(project);
	}
	
	 @RequestMapping(value = "/projectlist", method = RequestMethod.GET)
	 public List<Project> findAll() {
		  return (List<Project>)projectRepository.findAll();
	 }
	 
	 @RequestMapping(value = "/findProject/{id}", method = RequestMethod.GET)
	 public Project findOne(@PathVariable long id) {
		
		 return (Project)projectRepository.findOne(id);
	 }
	 @RequestMapping(value = "/updateProject/{id}", method = RequestMethod.POST)
	 public void updateProject(@RequestBody Project project, @PathVariable long id) {
		 System.out.println(project.getName());
			 projectService.updateProject(project.getName(), project.getComment(), id);
			 
	 }
	 
	 @RequestMapping(value = "/addSampleToProject/{id}", method = RequestMethod.POST)
	 public void addSampleToProject(@RequestBody Sample sample, @PathVariable long id) {
		 sampleService.saveSample(sample);
		 Project project=projectRepository.findOne(id);
		 projectService.saveProject(project);
		 sample.setProject(project);
		 sampleService.saveSample(sample);
		 System.out.println(project.getId());
	 }
	 @RequestMapping(value = "/addExperimentToProject/{id}", method = RequestMethod.POST)
	 public void addSampleToProject(@RequestBody Experiment experiment, @PathVariable long id) {
		 sampleService.saveExperiment(experiment);
		 Project project=projectRepository.findOne(id);
		 projectService.saveProject(project);
		 experiment.setProject(project);
		 sampleService.saveExperiment(experiment);
		 System.out.println(project.getId());
	 }

	 @ResponseBody
	 //@ResponseStatus(value = HttpStatus.OK)
	 @RequestMapping(value = "/project/{id}", method = RequestMethod.DELETE)
	 public void updateProject(@PathVariable long id) {
		System.out.println("delete request");
	    projectRepository.delete(id);
	  } 
}
