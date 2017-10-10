package nl.youngcapital.LabJournal;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Experiment {
	private String description;
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	@OneToMany(mappedBy = "experiment", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List <Operation> operations;
	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project project;
	@ManyToMany
	List <Sample> samples;
	public Experiment() {
		super();
	}
	public String getDescription() {
		return description;
	}
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	public List<Operation> getOperations() {
		return operations;
	}
	public Project getProject() {
		return project;
	}
	public List<Sample> getSamples() {
		return samples;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setOperations(List<Operation> operations) {
		this.operations = operations;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public void setSamples(List<Sample> samples) {
		this.samples = samples;
	}
}
