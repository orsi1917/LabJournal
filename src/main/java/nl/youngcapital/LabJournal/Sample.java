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
public class Sample {
	private String description;
	@ManyToMany
	List <Experiment> experiments;
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project project;
	@OneToMany//(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List <SubSample> subSamples;
	public Sample() {
		super();
	}
	public String getDescription() {
		return description;
	}
	public List<Experiment> getExperiments() {
		return experiments;
	}
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public Project getProject() {
		return project;
	}
	public List<SubSample> getSubSamples() {
		return subSamples;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setExperiments(List<Experiment> experiments) {
		this.experiments = experiments;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public void setSubSamples(List<SubSample> subSamples) {
		this.subSamples = subSamples;
	}
	

}
