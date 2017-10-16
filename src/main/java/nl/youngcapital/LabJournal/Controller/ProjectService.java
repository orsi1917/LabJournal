package nl.youngcapital.LabJournal.Controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import nl.youngcapital.LabJournal.Project;

@Service
@Transactional
public class ProjectService {
	@Autowired
	ProjectRepository projectRepository;
	
	public Project saveProject(Project project) {
		projectRepository.save(project);
		return project;
	}
	public void updateProject(String name, String comment, long id) {
		projectRepository.updateProject(name, comment, id);
		
	}
}
