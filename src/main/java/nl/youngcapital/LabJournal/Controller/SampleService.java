package nl.youngcapital.LabJournal.Controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.LabJournal.Sample;

@Service
@Transactional
public class SampleService {
	@Autowired
	SampleRepository sampleRepository;
	
	public Sample saveSample(Sample sample) {
		sampleRepository.save(sample);
		return sample;
	}
}