package com.example.CabsApp.service.impl;

import com.example.CabsApp.entity.CabsEntity;
import com.example.CabsApp.repository.CabsRepository;
import com.example.CabsApp.service.CabsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CabsServiceImpl implements CabsService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final CabsRepository cabsRepository;


    public CabsServiceImpl(CabsRepository cabsRepository) {
        this.cabsRepository = cabsRepository;
    }

    public boolean validate(CabsEntity cabsEntity){
        if(cabsEntity.getCabRegistrationNumber()==null || !cabsEntity.getCabRegistrationNumber().matches("^[A-Z]{2}[\\\\ -]{0,1}[0-9]{2}[\\\\ -]{0,1}[A-Z]{1,2}[\\\\ -]{0,1}[0-9]{4}$")){
            if(cabsEntity.getCabRegistrationNumber()==null) System.out.println("null");
            else System.out.println("other");
            System.out.println("Cab Registration number is invalid");
            return false;
        }
        if(cabsEntity.getCarColour().length()<2 || cabsEntity.getCarColour().length()>80)
        {
            System.out.println("Color");
            return false;
        }
        if(cabsEntity.getCarModel().length()<2 || cabsEntity.getCarModel().length()>80){
            System.out.println("Model");
            return false;
        }
        System.out.println("Validated");
        return true;
    }
    @Override
    public List<CabsEntity> findAllCabs(){
        return cabsRepository.findAll();
    }

    @Override
    public Object[] findCabById(String id)
    {
        String query="SELECT cab_registration_number, cab_colour, cab_model, cab_id\n" +
                "\tFROM public.cab_details where cab_id=?;";
        Object[] obj=new Object[10];
        obj=jdbcTemplate.queryForList(query,new Object[]{id}).toArray();
        return obj;
    }
    @Override
    public ResponseEntity<String> addCab(CabsEntity cabsEntity){

        if(validate(cabsEntity))  cabsRepository.save(cabsEntity);
        else {
            System.out.println("Not Valid!\n");
            return ResponseEntity.badRequest().body("Cab details are not valid");
        }
        return ResponseEntity.ok().body("Cab added successfully!");

    }
    @Override
    public ResponseEntity<String> updateCabDetails(String cabRegistrationNumber,CabsEntity cabsEntity){
        if(validate(cabsEntity))  cabsRepository.save(cabsEntity);
        else {
            System.out.println("Not Valid!\n");
            return ResponseEntity.badRequest().body("Cab details are not valid");
        }
        return ResponseEntity.ok().body("Cab added successfully!");

    }
    @Override
    public ResponseEntity<String> deleteCab(String cabRegistrationNumber){
        cabsRepository.deleteById(cabRegistrationNumber);
        return ResponseEntity.ok().body("Cab deleted successfully!");
    }
}
