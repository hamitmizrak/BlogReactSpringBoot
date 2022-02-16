package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.services.EmployeeServices;
import com.hamitmizrak.data.entity.EmployeeEntity;
import com.hamitmizrak.data.repository.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeServices {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ModelMapper modelMapper;

    //SAVE
    @Override
    public void save(@RequestBody  EmployeeDto employeeDto) { //@RequestBody
        EmployeeEntity employeeEntity = DtoToEntity(employeeDto);//ModelMapper
        employeeRepository.save(employeeEntity);
    }

    //DELETE
    @Override
    public void delete(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }

    //LIST
    @Override
    public List<EmployeeDto> getAllEmployess() {
        List<EmployeeDto> listDto = new ArrayList<>();
        Iterable<EmployeeEntity> teacherList = employeeRepository.findAll();
        for (EmployeeEntity entity : teacherList) {
            EmployeeDto teacherDto = EntityToDto(entity);//model
            listDto.add(teacherDto);
        }
        return listDto;
    }

    //FIND
    @Override
    public EmployeeDto find(Long employeeId) {
        EmployeeDto employeeDto = new EmployeeDto();
        Optional<EmployeeEntity> optional = employeeRepository.findById(employeeId);
        if (optional.isPresent()) {
            EmployeeEntity teacherEntity = optional.get();
            employeeDto = EntityToDto(teacherEntity);//ModelMapper
        } else {
            employeeDto = EmployeeDto
                    .builder()
                    .id(0L)
                    .firstName("adınız")
                    .lastName("soyadınız")
                    .emailId("email")
                    .build();
        }
        return employeeDto;
    }


    ////////////////////////////////////
    //Model Mapper Entity ==> Dto
    @Override
    public EmployeeDto EntityToDto(EmployeeEntity employeeEntity) {
        EmployeeDto employeeDto = modelMapper.map(employeeEntity, EmployeeDto.class);
        return employeeDto;
    }

    //Model Mapper Dto  ==> Entity
    @Override
    public EmployeeEntity DtoToEntity(EmployeeDto employeeDto) {
        EmployeeEntity employeeEntity = modelMapper.map(employeeDto, EmployeeEntity.class);
        return employeeEntity;
    }
}
