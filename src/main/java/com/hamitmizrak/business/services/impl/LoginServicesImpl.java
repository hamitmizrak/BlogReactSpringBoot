package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.business.dto.LoginDto;
import com.hamitmizrak.business.services.LoginServices;
import com.hamitmizrak.data.entity.LoginEntity;
import com.hamitmizrak.data.repository.LoginRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class LoginServicesImpl implements LoginServices {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private ModelMapper modelMapper;

    //Bcryped: password şifreleme
    @Autowired
    PasswordEncoder passwordEncoder;

    //Autowired yaptığımızda hemen hazır olsun ama parametresiz constructorda new yapsak nullpointer gelir
    //1.YOL
    @PostConstruct
    public void init() {
        passwordEncoder = new BCryptPasswordEncoder();
    }

    //2.YOL
    //    public LoginServicesImpl() {
    //        this.passwordEncoder=new BCryptPasswordEncoder();
    //    }

    @Override
    public void save(LoginDto loginDto) {
        String encrpytedPass = this.passwordEncoder.encode(loginDto.getPassword());
        loginDto.setPassword(encrpytedPass);
        LoginEntity loginEntity = DtoToEntity(loginDto);
        loginRepository.save(loginEntity);
    }

    @Override
    public void delete(Long loginId) {

    }

    @Override
    public LoginDto find(Long loginId) {
        return null;
    }

    @Override
    public List<LoginDto> list() {
        return null;
    }

    //model mapper
    @Override
    public LoginDto EntityToDto(LoginEntity loginEntity) {
        LoginDto loginDto = modelMapper.map(loginEntity, LoginDto.class);
        return loginDto;
    }

    @Override
    public LoginEntity DtoToEntity(LoginDto loginDto) {
        LoginEntity loginEntity = modelMapper.map(loginDto, LoginEntity.class);
        return loginEntity;
    }
}
