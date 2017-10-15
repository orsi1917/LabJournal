package nl.youngcapital.LabJournal.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Amount;
import nl.youngcapital.LabJournal.Controller.AmountService;
@RestController
public class AmountEindpoint {
	@Autowired
	AmountService amountService;

	@PostMapping("/amountpost")
	public void postEntiteit(@RequestBody Amount amount) {
		amountService.save(amount);
	}
}
