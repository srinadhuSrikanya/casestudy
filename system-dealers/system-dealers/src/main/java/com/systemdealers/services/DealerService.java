package com.systemdealers.services;
import com.systemdealers.model.DealersDetails;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.systemdealers.model.DealersDetails;
import com.systemdealers.repo.DealersRepository;

@Service
public class DealerService {

	@Autowired
	public DealersRepository DealerRepo;

	public <DealerRepo> List<DealersDetails> getAll() {
		// TODO Auto-generated method stub
		return DealerRepo.findAll();
	}

	public Optional<DealersDetails> findById(String id) {
		// TODO Auto-generated method stub
		return DealerRepo.findById(id);
	}

	
	public String deleteDealer(String id) {
		DealerRepo.deleteById(id);
		return "dealer deleted of id "+id;
	}

	

	public String update(DealersDetails dealer) {
		DealerRepo.save(dealer);
		return "dealer updated succesfully "+dealer.getEmailId();
	}
	public String updatebyusername(DealersDetails dealer) {
		Optional<DealersDetails> users = DealerRepo.findById(dealer.getEmailId());
		if(users!=null)
		{
			DealerRepo.save(dealer);
			return "updated ";
		}
		
		return "update Failed";
	}
	
	

	public List<DealersDetails> findAll() {
		// TODO Auto-generated method stub
		return DealerRepo.findAll();
	}
}
	

	
	