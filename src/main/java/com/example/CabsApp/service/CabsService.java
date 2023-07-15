package com.example.CabsApp.service;

import com.example.CabsApp.entity.CabsEntity;
import com.example.CabsApp.repository.CabsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface CabsService {


    List<CabsEntity> findAllCabs();

    public Object[] findCabById(String id);
    ResponseEntity<String> addCab(CabsEntity cabsEntity);
    ResponseEntity<String> updateCabDetails(String cabRegistrationNumber,CabsEntity cabsEntity);
    ResponseEntity<String> deleteCab(String cabRegistrationNumber);
}
