package com.systemdealers.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Dealerslist")
public class DealersDetails {
	
	@Id
	private String DealerId;
	private String UserName;
	private String EmailId;
	private String Password;
	private String PhoneNumber;
	
	
	public DealersDetails(String DealerId, String UserName, String EmailId, String Password, String PhoneNumber) {
		super();
		this.DealerId = DealerId;
		this.UserName = UserName;
		this.EmailId = EmailId;
		this.Password = Password;
		this.PhoneNumber = PhoneNumber;
	}


	public String getDealerId() {
		return DealerId;
	}


	public void setDealerId(String DealerId) {
		this.DealerId = DealerId;
	}


	public String getUserName() {
		return UserName;
	}


	public void setUserName(String UserName) {
		this.UserName = UserName;
	}


	public String getEmailId() {
		return EmailId;
	}


	public void setEmailId(String EmailId) {
		this.EmailId = EmailId;
	}


	public String getPassword() {
		return Password;
	}


	public void setPassword(String Password) {
		this.Password = Password;
	}


	public String getPhoneNumber() {
		return PhoneNumber;
	}


	public void setPhoneNumber(String PhoneNumber) {
		this.PhoneNumber = PhoneNumber;
	}
	
	
	
	
	
	

}
