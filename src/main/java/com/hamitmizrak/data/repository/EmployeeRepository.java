package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.EmployeeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<EmployeeEntity,Long> {

}
