package com.example.CabsApp.service.impl;

import com.example.CabsApp.entity.DriverEntity;
import com.example.CabsApp.repository.DriverRepository;
import com.example.CabsApp.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
class DriverServiceImpl implements DriverService, CommandLineRunner {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private DriverRepository driverRepository;

    public boolean validate(DriverEntity data)
    {
        System.out.println(data.getName()+" "+data.getEmail()+" "+data.getContact()+"\n");
        if(data.getName().length()<2 || data.getName().length()>80)
        {
            System.out.println("Name");
            return false;
        }
        if (data.getEmail() == null || !data.getEmail().matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,6}$"))
        {
            System.out.println("Email");
            return false;
        }
        if (data.getContact() == null || !data.getContact().matches("^\\d{10}$"))
        {
            System.out.println("Contact");
            return false;
        }
        return true;
    }
    @Override
    public List<DriverEntity> findAllDrivers(){
        return driverRepository.findAll();
    }
    @Override
    public Object[] findDriverById(String id)
    {
        String query="SELECT driver_id, contact_number, email, name\n" +
                "\tFROM public.drivers_details where driver_id=?;";
        Object[] obj=new Object[10];
        obj=jdbcTemplate.queryForList(query,new Object[]{id}).toArray();
        return obj;
    }
    @Override
    public ResponseEntity<String> saveInformation(@RequestBody DriverEntity data) {
        System.out.println(data);
        DriverEntity temp=new DriverEntity();
        temp.setName(data.getName());
        temp.setContact(data.getContact());
        temp.setEmail(data.getEmail());
        if(validate(data))
            driverRepository.save(data);
        else {
            System.out.println("Not Valid!\n");
            return ResponseEntity.badRequest().body("The driver details are not valid.");
        }
        return ResponseEntity.ok().body("Data added successfully!");
    }




    public ResponseEntity<String> updateInformation(@PathVariable String email, @RequestBody DriverEntity data)
    {
//        DriverEntity updatedData= driverRepository.findById(email);
//        updatedData.setName(data.getName());
//        updatedData.setEmail(data.getEmail());
//        updatedData.setContact(data.getContact());
        if(validate(data))
            driverRepository.save(data);
        else
            return ResponseEntity.badRequest().body("The driver details are not valid.");
        return ResponseEntity.ok().body("Data added successfully!");
    }

    public ResponseEntity<String> deleteDriver(@PathVariable String email,@RequestBody DriverEntity data)
    {
        driverRepository.deleteById(email);
        return ResponseEntity.ok().body("Data deleted successfully!");
    }




    @Override
    public void run(String... args) throws Exception {

    }
}