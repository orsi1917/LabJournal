package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import nl.youngcapital.LabJournal.Sample;

@Component
public interface SampleRepository extends CrudRepository<Sample, Long>{
	
//	@Query("UPDATE Game SET high_score = ? where ? > high_score and type_game = ?")
//  	"SELECT id, title FROM todos t WHERE " +
//    "LOWER(t.title) LIKE LOWER(CONCAT('%',:searchTerm, '%')) OR " +
//    "LOWER(t.description) LIKE LOWER(CONCAT('%',:searchTerm, '%')) " +
//    "ORDER BY t.title ASC"

	@Transactional
  	@Modifying
	@Query("SELECT id, name, description, project FROM Sample s where s.name=? ")
	public List<Sample> filtersample(String name);
	
	
	@Transactional
	@Modifying
//@Query("SELECT id, name, description, project FROM Sample s where s.getProject().getId()=?")
	@Query("SELECT id, name, description, project FROM Sample s where s.project.id=?")
	public List<Sample> projectfiltersample(long id);
	
}
