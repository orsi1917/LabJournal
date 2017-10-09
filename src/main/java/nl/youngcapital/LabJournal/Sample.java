package nl.youngcapital.LabJournal;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Sample {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;
	@ManyToOne
	List <SubSample> subSamples;
	@ManyToMany
	List <Experiment> experiments;
	public List<Experiment> getExperiments() {
		return experiments;
	}
	public void setExperiments(List<Experiment> experiments) {
		this.experiments = experiments;
	}
	public List<SubSample> getSubSamples() {
		return subSamples;
	}
	public void setSubSamples(List<SubSample> subSamples) {
		this.subSamples = subSamples;
	}
	public long getId() {
		return id;
	}
	public Sample() {
		super();
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
	

}
