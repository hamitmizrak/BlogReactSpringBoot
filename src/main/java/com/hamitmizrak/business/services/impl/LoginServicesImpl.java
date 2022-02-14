package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.business.dto.LoginDto;
import com.hamitmizrak.business.services.LoginServices;
import com.hamitmizrak.data.entity.LoginEntity;
import com.hamitmizrak.data.repository.LoginRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServicesImpl implements LoginServices {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void save(LoginDto loginDto) {
        LoginEntity loginEntity=DtoToEntity(loginDto);
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
