package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.SubSample;

@Service
@Transactional
public class SampleService {
	@Autowired
	SampleRepository sampleRepository;
	@Autowired
	SubSampleRepository subSampleRepository;
	@Autowired
	ExperimentRepository experimentRepository;
	
	public Experiment saveExperiment(Experiment experiment) {
		experimentRepository.save(experiment);
		return experiment;
	}
	public List<Experiment> filterExperiment(String name) {
		return experimentRepository.filtersample(name);
	}
	public List<Experiment> projectfilterExperiment(long id) {
		return experimentRepository.projectfiltersample(id);
	}
	public void updateSample(String name, String description, long id) {
		sampleRepository.updateSample(name, description, id);
		
	}

	
	public Sample saveSample(Sample sample) {
		sampleRepository.save(sample);
		return sample;
	}

	public List<Sample> filterSample(String name) {
		return sampleRepository.filtersample(name);
	}
	public List<Sample> projectfilterSample(long id) {
		return sampleRepository.projectfiltersample(id);
	}
	public SubSample saveSubSample(SubSample subSample) {
		subSampleRepository.save(subSample);
		return subSample;
	}

	public List<SubSample> filterSubSample(String name) {
		return subSampleRepository.filterSubSample(name);
	}
	public List<SubSample> sampleFilterSubSample(long id) {
		return subSampleRepository.sampleFilterSubSample(id);
	}
}
