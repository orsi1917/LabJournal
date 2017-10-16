package nl.youngcapital.LabJournal.Controller;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import nl.youngcapital.LabJournal.Project;

@Component
public interface ProjectRepository extends CrudRepository<Project, Long>{
	
	@Transactional
	@Modifying
	@Query("UPDATE Project SET name = ?, comment=?  where id = ?")
	public void updateProject(String name,  String comment, long id);

}
