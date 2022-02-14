package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.LoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository  extends JpaRepository<LoginEntity,Long> {
}
