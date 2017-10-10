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
	@GetMapping("/Amount")
	public String getAmount() {
		return "Hallo";
	}
	@GetMapping("/Amount2")
	public Amount getAmount2() {
		Amount amount = new Amount();
		System.out.println(amount);
		amountService.test(amount);
		return amount;
	}
	@PostMapping("/amountpost")
	public void postEntiteit(@RequestBody Amount amount) {
		System.out.println("Jojo");
		System.out.println(amount.getAmount());
		amountService.test(amount);
	}
}
