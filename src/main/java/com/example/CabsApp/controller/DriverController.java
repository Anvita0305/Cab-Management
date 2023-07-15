package com.example.CabsApp.controller;

import com.example.CabsApp.entity.CabsEntity;
import com.example.CabsApp.entity.DriverEntity;
import com.example.CabsApp.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Component
@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
public class DriverController {
    @Autowired
    private DriverService studinf;

    @GetMapping(value="/driverDetails")
    public List<DriverEntity> findAllDrivers(){

        return studinf.findAllDrivers();
    }

    @GetMapping(value="/driverDetails/{Id}")
    public Object[] findDriverById(@RequestParam  String id){

        return studinf.findDriverById(id);
    }
    @PostMapping(value = "/createDriver")
    public void createPerson(DriverEntity data) {
        studinf.saveInformation(data);
    }

    @PostMapping(value = "/updateDriver/{email}")
    public void updateDriver(String email, DriverEntity data) {
//        response.setHeader("Location", ServletUriComponentsBuilder.fromCurrentContextPath().path("/findDriver/" + data.getDriverId()).toUriString());
        studinf.updateInformation(email,data);
    }

    @DeleteMapping(value="/deleteDriver/{email}")
    public void deleteDriver(String email,DriverEntity data)
    {
        studinf.deleteDriver(email,data);
    }
}
