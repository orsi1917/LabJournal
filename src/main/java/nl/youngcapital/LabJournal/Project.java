package nl.youngcapital.LabJournal;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Project {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String comment;
	@ManyToOne
	List <Experiment> experiment;
	@ManyToOne
	List <Sample> samples;
	public List<Sample> getSamples() {
		return samples;
	}
	public void setSamples(List<Sample> samples) {
		this.samples = samples;
	}
	public Project() {
		super();
	}
	public long getId() {
		return id;
	}
	public List<Experiment> getExperiment() {
		return experiment;
	}
	public void setExperiment(List<Experiment> experiment) {
		this.experiment = experiment;
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
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}

}
