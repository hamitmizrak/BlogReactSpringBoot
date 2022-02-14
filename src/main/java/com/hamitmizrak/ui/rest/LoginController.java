package com.hamitmizrak.ui.rest;

import com.hamitmizrak.business.dto.LoginDto;
import com.hamitmizrak.business.services.LoginServices;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//    @RequestMapping("/api")
//    @RequestBody: gelen body içindeki datayı almak için
//    Jackson String json ==> objeye dönüştüren yapıya

@RestController
@RequestMapping("/api")
@Log4j2
public class LoginController {

    @Autowired
    public LoginServices loginServices;


    // http://localhost:8080/api/logins/create
    // @CrossOrigin //webpack proxy yaparsan(package.json proxy ) @CrossOrigin yazmana gerek yok
    @PostMapping(value = "/logins/create")
    public void createLogin(@RequestBody LoginDto loginDto) {
        loginServices.save(loginDto);
        log.info(loginDto);
    }
}
