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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
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
	@RequestMapping(value = "/project", method = RequestMethod.GET)
	public Project getProject2() {
		Project project = new Project();
		System.out.println(project);
		projectService.saveProject(project);
		return project;
	}
	@ResponseBody
	@RequestMapping(value = "/projectpost", method = RequestMethod.POST)
	public void postEntity(@RequestBody Project project) {
		System.out.println("Jojo");
		System.out.println(project.getName());
		projectService.saveProject(project);
	}
	 @RequestMapping(value = "/list", method = RequestMethod.GET)
	 public List<Project> findAll() {
	    return (List<Project>)projectRepository.findAll();
	 }
	 @RequestMapping(value = "/findProject", method = RequestMethod.GET)
	 public Project findOne() {
	    return (Project)projectRepository.findOne((long) 1);
	 }
	 @RequestMapping(value = "/addSampleToProject", method = RequestMethod.GET)
	 public void addSampleToProject(@RequestBody Sample sample) {
		 sampleService.saveSample(sample);
		 Project project=projectRepository.findOne((long) 1);
		 project.addSample(sample);
		 projectService.saveProject(project);
	 }
	 @RequestMapping(value = "/addSampleToProject2", method = RequestMethod.GET)
	 public void addSampleToProject() {
		 Project project=projectRepository.findOne((long) 1);
		 Sample sample = new Sample();
		 sampleService.saveSample(sample);
		 sample.setName("example");
		 project.addSample(sample);
		 projectService.saveProject(project);
	 }
	  @ResponseStatus(value = HttpStatus.OK)
	  @RequestMapping(value = "/project/{id}", method = RequestMethod.DELETE)
	  public void updateProject(@PathVariable  long id) {
	    projectRepository.delete(id);
	    
	  } 
}
