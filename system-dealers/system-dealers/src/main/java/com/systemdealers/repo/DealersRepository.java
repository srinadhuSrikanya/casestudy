package com.systemdealers.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.systemdealers.model.DealersDetails;

@Repository
public interface DealersRepository extends MongoRepository<DealersDetails, String>{

	List<DealersDetails> findByDealerId(String dealerId);

}
