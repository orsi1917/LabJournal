package nl.youngcapital.LabJournal.Controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.LabJournal.Experiment;
import nl.youngcapital.LabJournal.Sample;

@Service
@Transactional
public class SampleService {
	@Autowired
	SampleRepository sampleRepository;
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
}
