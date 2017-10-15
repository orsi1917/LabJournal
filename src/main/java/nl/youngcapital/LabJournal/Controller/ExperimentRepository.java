package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Sample;

@Component
public interface ExperimentRepository extends CrudRepository<Experiment, Long>{
	@Transactional
  	@Modifying
	@Query("SELECT id, name, project FROM Experiment e where e.name=? ")
	public List<Experiment> filtersample(String name);
	
	
	@Transactional
	@Modifying
//@Query("SELECT id, name, description, project FROM Sample s where s.getProject().getId()=?")
	@Query("SELECT id, name, project FROM Experiment e where e.project.id=?")
	public List<Experiment> projectfiltersample(long id);

}
