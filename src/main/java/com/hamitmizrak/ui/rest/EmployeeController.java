package com.hamitmizrak.ui.rest;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.services.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    public EmployeeServices employeeServices;

    //GET LIST
    // http://localhost:8080/api/v1/employees/list
    @GetMapping("/employees/list")
    public List<EmployeeDto> getAllEmployees() {
        List<EmployeeDto> teacherDto = (List<EmployeeDto>) employeeServices.getAllEmployess();
        return teacherDto;
    }

    //GET
    // http://localhost:8080/api/v1/employees/1
    @GetMapping("/employees/{id}")
    public EmployeeDto selectRestTeacher(@PathVariable(value = "id") Long id) {
        EmployeeDto teacherDto = employeeServices.find(id);
        return teacherDto;
    }


    //POST
    // http://localhost:8080/api/v1/post/employees
    @PostMapping(path = "/post/employees")
    public EmployeeDto postRestTeacher(@RequestBody EmployeeDto teacherDto) {
        employeeServices.save(teacherDto);
        return teacherDto;
    }

    //PUT
    // http://localhost:8080/api/v1/put/employees
    @PutMapping("/put/employees")
    public void updateRestTeacher(EmployeeDto teacherDto) {
        employeeServices.save(teacherDto);
    }

    //DELETE
    // http://localhost:8080/api/v1/delete/employees/1
    @DeleteMapping("/delete/employees/{id}")
    public void deleteRestTeacher(@PathVariable(value = "id") Long id) {
        employeeServices.delete(id);
    }


}
