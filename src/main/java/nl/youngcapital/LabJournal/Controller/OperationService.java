package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Operation;
import nl.youngcapital.LabJournal.Sample;

@Service
@Transactional
public class OperationService {
	@Autowired
	OperationRepository operationRepository;
	
	
	public Operation saveOperation(Operation operation) {
		operationRepository.save(operation);
		return operation;
	}
	
	public List<Operation> experimentfilterOperation(long id) {
		return operationRepository.experimentfilteroperation(id);
	}
}
