package nl.youngcapital.LabJournal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Amount {
	private long amount;
	@Id
	@GeneratedValue
	private Long id;

	private String unit;
	public Amount() {
		super();
	}
	public long getAmount() {
		return amount;
	}
	public Long getId() {
		return id;
	}

	public String getUnit() {
		return unit;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}
}
