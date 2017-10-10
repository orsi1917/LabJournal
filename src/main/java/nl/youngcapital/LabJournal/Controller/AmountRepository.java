package nl.youngcapital.LabJournal.Controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.LabJournal.Amount;
import nl.youngcapital.LabJournal.Project;
@Component
public interface AmountRepository extends CrudRepository<Amount, Long>{

}
