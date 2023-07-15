package com.example.CabsApp.repository;

import com.example.CabsApp.entity.DriverEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface DriverRepository  extends JpaRepository<DriverEntity, String> {
//    @Query(value = "Select * from drivers_details where email=:email",nativeQuery = true)
//    DriverEntity findByEmail(String email);

//    @Query(value="delete from drivers_details where email=:drivermail",nativeQuery = true)
//    DriverEntity deleteDriverByEmail( String drivermail);

//    ResponseEntity<String> saveInformation(@RequestBody DriverEntity data);
}
