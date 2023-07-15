package com.example.CabsApp.repository;

import com.example.CabsApp.entity.CabsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CabsRepository extends JpaRepository<CabsEntity,String> {
    @Query(value = "Select * from cab_details where cab_registration_number=:cabRegistrationNumber",nativeQuery = true)
    CabsEntity findByCabRegistrationNumber(String cabRegistrationNumber);

    @Query(value="delete from drivers_details where cab_registration_number=:cabRegistrationNumber",nativeQuery = true)
    CabsEntity deleteCabByCabRegistrationNumber( String cabRegistrationNumber);

}
