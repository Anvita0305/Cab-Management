package com.example.CabsApp.service;

import com.example.CabsApp.entity.DriverEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface DriverService {
    public List<DriverEntity> findAllDrivers();
    public Object[] findDriverById(String id);
    public ResponseEntity<String> saveInformation(DriverEntity DriverDataTable);
    public ResponseEntity<String> updateInformation(String email, DriverEntity DriverDataTable);
    public ResponseEntity<String> deleteDriver(String email,DriverEntity DriverDataTable);
}
