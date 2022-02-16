package com.hamitmizrak;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

//Auditing aktif etmek için // Update/insert kim ve ne zaman yaptını kayıtını tutan Entity sınıfı
@EnableJpaAuditing
//security dahil etmemek icin
@SpringBootApplication(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class}
)
public class BlogReactSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlogReactSpringApplication.class, args);
    }


//    @Bean
//    public ModelMapper modelMapper(){
//        return new ModelMapper();
//    }

}
