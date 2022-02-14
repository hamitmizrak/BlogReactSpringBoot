package com.hamitmizrak.business.services;

import com.hamitmizrak.business.dto.LoginDto;
import com.hamitmizrak.data.entity.LoginEntity;

import java.util.List;

public interface LoginServices{

    public void save(LoginDto loginDto);
    public void delete(Long loginId);
    public LoginDto find(Long loginId);
    public List<LoginDto> list();


    //model mapper
    public LoginDto EntityToDto(LoginEntity loginEntity);
    public LoginEntity DtoToEntity(LoginDto loginDto);
}
