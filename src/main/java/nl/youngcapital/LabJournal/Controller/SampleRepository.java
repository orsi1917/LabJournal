package nl.youngcapital.LabJournal.Controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import nl.youngcapital.LabJournal.Sample;

@Component
public interface SampleRepository extends CrudRepository<Sample, Long>{

}
