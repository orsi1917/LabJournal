package nl.youngcapital.LabJournal.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Amount;
import nl.youngcapital.LabJournal.Project;
import nl.youngcapital.LabJournal.Controller.AmountService;
import nl.youngcapital.LabJournal.Controller.ProjectService;

@RestController
public class ProjectEindpoint {
	@Autowired
	ProjectService projectService;
	@GetMapping("/Project")
	public String getProject() {
		return "Hallo";
	}
	@GetMapping("/Project2")
	public Project getProject2() {
		Project project = new Project();
		System.out.println(project);
		projectService.test(project);
		return project;
	}
	@PostMapping("/projectpost")
	public void postEntity(@RequestBody Project project) {
		System.out.println("Jojo");
		System.out.println(project.getName());
		projectService.test(project);
	}
}
