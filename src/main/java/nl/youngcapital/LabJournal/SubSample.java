package nl.youngcapital.LabJournal;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;



@Entity

public class SubSample {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;
	@OneToMany(mappedBy = "SubSample", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private	Amount amount;
	@ManyToMany
	private List <Operation> operations;
	private String danger;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Amount getAmount() {
		return amount;
	}
	public void setAmount(Amount amount) {
		this.amount = amount;
	}
	public String getDanger() {
		return danger;
	}
	public void setDanger(String danger) {
		this.danger = danger;
	}

}
