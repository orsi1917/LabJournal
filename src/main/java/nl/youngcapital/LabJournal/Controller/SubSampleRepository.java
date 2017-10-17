package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;


import nl.youngcapital.LabJournal.SubSample;

@Component
public interface SubSampleRepository extends CrudRepository<SubSample, Long>{
	@Transactional
  	@Modifying
	@Query("SELECT id, name, description, danger, amount, sample, s.unit FROM SubSample s where s.name=? ")
	public List<SubSample> filterSubSample(String name);
	
	
	@Transactional
	@Modifying
//@Query("SELECT id, name, description, project FROM Sample s where s.getProject().getId()=?")
	@Query("SELECT s  FROM SubSample s where s.sample.id=?")
	public List<SubSample> sampleFilterSubSample(long id);
}
