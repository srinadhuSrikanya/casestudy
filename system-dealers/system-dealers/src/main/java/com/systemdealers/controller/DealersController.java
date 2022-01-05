package com.systemdealers.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.systemdealers.model.DealersDetails;
import com.systemdealers.repo.DealersRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DealersController {


	
	@Autowired
	DealersRepository repo;

	 @RequestMapping(value="/dealers",method=RequestMethod.GET)
	  public List<DealersDetails> getDealers() {
		return repo.findAll();
	  }
	  @RequestMapping(value="/dealers/{DealerId}",method=RequestMethod.GET)
	  public List<DealersDetails> getDealersDetails(@PathVariable String DealerId) {
		return repo.findByDealerId(DealerId);
	  }

	  @RequestMapping(value="/adddealers",method=RequestMethod.POST)
	  public void addDealersDetails(@RequestBody DealersDetails dealers) {
		  repo.insert(dealers);
	  }

	  @RequestMapping(value="/dealers/{DealerId}",method=RequestMethod.PUT)
	  public void updateDealersDetails(@PathVariable String DealerId, @RequestBody DealersDetails dealers) {
		  repo.save(dealers);
	  }

	  @RequestMapping(value="/dealers/{DealerId}",method=RequestMethod.DELETE)
	  public void deleteDealersDetails(@PathVariable String DealerId) {
	    repo.deleteById(DealerId);
	  }
	
	

}
