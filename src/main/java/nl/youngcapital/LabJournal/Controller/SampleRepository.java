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
	@Query("SELECT s FROM Sample s where s.name like ? ")
	public List<Sample> filtersample(String name);
	
	
	@Transactional
	@Modifying
//@Query("SELECT id, name, description, project FROM Sample s where s.getProject().getId()=?")
	@Query("SELECT s FROM Sample s where s.project.id=?")
	public List<Sample> projectfiltersample(long id);
	
	@Transactional
	@Modifying
	@Query("UPDATE Sample SET name = ?, description=?  where id = ?")
	public void updateSample(String name,  String description, long id);
	
	@Transactional
	@Modifying
//@Query("SELECT id, name, description, project FROM Sample s where s.getProject().getId()=?")
	@Query("SELECT s FROM Sample s join s.experiments e join e.samples e where e.id =?")
	public List<Sample> samplesByExperiment(long id);
	
	
//	Select distinct d from Distributor d join d.towns t join t.district t where t.name = :name
	
}
