package nl.youngcapital.LabJournal.Controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.LabJournal.Amount;

@Service
@Transactional
public class AmountService {
	@Autowired
	AmountRepository amountRepository;
	
	public Amount test(Amount amount) {
		amountRepository.save(amount);
		return amount;
	}
}
