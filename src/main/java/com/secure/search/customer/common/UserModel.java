package com.secure.search.customer.common;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserModel {

	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private String mobile_number;
	private String address;
	private String pincode;

	
}
