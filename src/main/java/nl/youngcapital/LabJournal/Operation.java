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
	@Id
	@GeneratedValue
	private Long id;
	private String location;
	private String time;
	private String insrument;
	private String settings;
	private String comment;
	private String person;
	@ManyToOne
	@JoinColumn(name = "experiment_id")
	private Experiment experiment;
	@ManyToMany
	List <SubSample> subSamples;
	public List<SubSample> getSubSamples() {
		return subSamples;
	}
	public void setSubSamples(List<SubSample> subSamples) {
		this.subSamples = subSamples;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getInsrument() {
		return insrument;
	}
	public void setInsrument(String insrument) {
		this.insrument = insrument;
	}
	public String getSettings() {
		return settings;
	}
	public void setSettings(String settings) {
		this.settings = settings;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getPerson() {
		return person;
	}
	public void setPerson(String person) {
		this.person = person;
	}
	public Operation() {
		super();
	}
	
}
