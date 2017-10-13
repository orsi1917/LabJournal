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

	@Transactional
  	@Modifying
	@Query("SELECT id, name, description, project FROM Sample s where s.name=? ")
	public List<Sample> filtersample(String name);
	
	}
