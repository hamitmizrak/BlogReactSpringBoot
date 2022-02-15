package com.hamitmizrak.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name= "login")
public class LoginEntity extends BaseEntity implements Serializable {

    @Column(name = "user_name")
    private String username;

    @Column(name = "email_address")
    private String emailaddres;

    @Column(name = "password")
    private String password;

}
