package nl.youngcapital.LabJournal.Controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


import nl.youngcapital.LabJournal.Project;

@Component
public interface ProjectRepository extends CrudRepository<Project, Long>{

}
