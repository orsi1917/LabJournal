package nl.youngcapital.LabJournal;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Operation {
	private String comment;
	@ManyToOne
	@JoinColumn(name = "experiment_id")
	private Experiment experiment;
	@Id
	@GeneratedValue
	private Long id;
	private String insrument;
	private String location;
	private String person;
	private String settings;
	@ManyToMany
	List <SubSample> subSamples;
	private String time;
	public Operation() {
		super();
	}
	public String getComment() {
		return comment;
	}
	public Experiment getExperiment() {
		return experiment;
	}
	public long getId() {
		return id;
	}
	public String getInsrument() {
		return insrument;
	}
	public String getLocation() {
		return location;
	}
	
	public String getPerson() {
		return person;
	}
	public String getSettings() {
		return settings;
	}
	public List<SubSample> getSubSamples() {
		return subSamples;
	}
	public String getTime() {
		return time;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public void setExperiment(Experiment experiment) {
		this.experiment = experiment;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setInsrument(String insrument) {
		this.insrument = insrument;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public void setPerson(String person) {
		this.person = person;
	}
	public void setSettings(String settings) {
		this.settings = settings;
	}
	public void setSubSamples(List<SubSample> subSamples) {
		this.subSamples = subSamples;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
}
