package com.example.CabsApp.controller;

import com.example.CabsApp.entity.CabsEntity;
import com.example.CabsApp.service.CabsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Component
@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
public class CabsContoller {

    private final CabsService cabsService;

    public CabsContoller(CabsService cabsService) {
        this.cabsService = cabsService;

    }

    @GetMapping(value="/cabDetails")
    public List<CabsEntity> findAllCabs(){
        return cabsService.findAllCabs();
    }
    @GetMapping(value="/cabDetails/{cab_id}")
    public Object[] findCabById(@RequestParam  String id){

        return cabsService.findCabById(id);
    }

    @PostMapping(value="/addCab")
    public void addCab(@RequestBody CabsEntity cabsEntity){
        cabsService.addCab(cabsEntity);
    }

    @PutMapping(value="/updateCab/{cabRegistrationNumber}")
    public void updateCab(@PathVariable String cabRegistrationNumber, @RequestBody CabsEntity cabsEntity){
        cabsService.updateCabDetails(cabRegistrationNumber,cabsEntity);
    }

    @DeleteMapping(value="/deleteCab/{cabRegistrationNumber}")
    public void deleteCab(@PathVariable String cabRegistrationNumber){
        cabsService.deleteCab(cabRegistrationNumber);
    }
}
