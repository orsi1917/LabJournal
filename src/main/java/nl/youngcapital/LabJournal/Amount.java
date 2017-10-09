package nl.youngcapital.LabJournal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Amount {
	@Id
	@GeneratedValue
	private Long id;
	private long amount;
	private String unit;
	@ManyToOne
	@JoinColumn(name = "bank_id")
	private SubSample subSample;
	public Amount() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
}
