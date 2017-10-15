package nl.youngcapital.LabJournal.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.LabJournal.Sample;
import nl.youngcapital.LabJournal.SubSample;
import nl.youngcapital.LabJournal.Controller.SampleRepository;
import nl.youngcapital.LabJournal.Controller.SampleService;
import nl.youngcapital.LabJournal.Controller.SubSampleRepository;

@RestController
public class SubSampleEindpoint {
	@Autowired
	SampleService sampleService;
	@Autowired
	SubSampleRepository subSampleRepository;
	@Autowired
	SampleRepository sampleRepository;
	
	@ResponseBody
	@RequestMapping(value = "/subsamplepost", method = RequestMethod.POST)
	public void postEntity(@RequestBody SubSample subSample) {
		System.out.println(subSample.getName());
		sampleService.saveSubSample(subSample);
	}
	 @RequestMapping(value = "/addSubSampleToSample/{id}", method = RequestMethod.POST)
	 public void addSampleToProject(@RequestBody SubSample subSample, @PathVariable long id) {
		 sampleService.saveSubSample(subSample);
		 Sample sample = sampleRepository.findOne(id);
		 sampleService.saveSample(sample);
		 subSample.setSample(sample);
		 sampleService.saveSubSample(subSample);
		 System.out.println(subSample.getId());
	 }	 
	 @RequestMapping(value = "/subsamplelist", method = RequestMethod.GET)
	 public List<SubSample> findAll() {
	    return (List<SubSample>)subSampleRepository.findAll();
	  }

	 @RequestMapping(value = "/filtersubsamplelist", method = RequestMethod.POST)
	 public List<SubSample> filterfindAll(@RequestBody String name) {
		 return sampleService.filterSubSample(name);

	  }
	 @RequestMapping(value = "/samplefiltersubsamplelist", method = RequestMethod.POST)
	 public List<SubSample> filterfindAll(@RequestBody long id) {
		 return sampleService.sampleFilterSubSample(id);

	  }
	 
	 @ResponseBody
	  @RequestMapping(value = "/subsample/{id}", method = RequestMethod.DELETE)
	  public void updatesample(@PathVariable  long id) {
	    subSampleRepository.delete(id);
	  } 

}
