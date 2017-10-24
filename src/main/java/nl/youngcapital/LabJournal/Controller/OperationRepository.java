package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import nl.youngcapital.LabJournal.Operation;
import nl.youngcapital.LabJournal.Sample;

public interface OperationRepository extends CrudRepository<Operation, Long>{
	@Transactional
	@Modifying
//@Query("SELECT id, name, description, project FROM Sample s where s.getProject().getId()=?")
	@Query("SELECT o FROM Operation o where o.experiment.id=?")
	public List<Operation> experimentfilteroperation(long id);
	
	@Transactional
	@Modifying
	@Query("UPDATE Operation SET comment = ?, instrument=?, location=?, person=?, settings=?  where id = ?")
	public void updateOperation(String comment, String instrument, String location, String person, String settings, long id);
	
}


