package com.secure.search.customer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "CUSTOMER")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Customer implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String mobile_number;
    private String address;
    private String pincode;
    private int status;
}
