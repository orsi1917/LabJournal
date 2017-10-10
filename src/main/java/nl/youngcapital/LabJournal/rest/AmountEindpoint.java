package nl.youngcapital.LabJournal.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Amount;
import nl.youngcapital.LabJournal.Project;
import nl.youngcapital.LabJournal.Controller.AmountService;
@RestController
public class AmountEindpoint {
	@Autowired
	AmountService projectService;
	@GetMapping("/Amount")
	public String getAmount() {
		return "Hallo";
	}
	@GetMapping("/Amount2")
	public Amount getAmount2() {
		Amount amount = new Amount();
		System.out.println(amount);
		projectService.test(amount);
		return amount;
	}
}
