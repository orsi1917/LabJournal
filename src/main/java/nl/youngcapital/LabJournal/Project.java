package nl.youngcapital.LabJournal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Project {
	@Id
	@GeneratedValue
	private Long id;
	
	
	private String comment;
	@OneToMany//(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List <Experiment> experiment;

	private String name;
	@OneToMany(mappedBy = "project") //, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	List <Sample> samples = new ArrayList();
	public Project(String name) {
		super();
		this.name = name;
	}
	public Project() {
		super();
	}
	public String getComment() {
		return comment;
	}
	
	public Project(String name, String comment) {
		super();
		this.comment = comment;
		this.name = name;
	}
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	
	public void setComment(String comment) {
		this.comment = comment;
	}
	public void setExperiment(List<Experiment> experiment) {
		this.experiment = experiment;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setSamples(List<Sample> samples) {
		this.samples = samples;
	}
	public void addSample (Sample sample) {
		samples.add(sample);
	}

}
