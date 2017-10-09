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
	@OneToOne
	private SubSample subSample;
	private String unit;
	public Amount() {
		super();
	}
	public long getAmount() {
		return amount;
	}
	public long getId() {
		return id;
	}
	public SubSample getSubSample() {
		return subSample;
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
	public void setSubSample(SubSample subSample) {
		this.subSample = subSample;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
}
