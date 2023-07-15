package com.example.CabsApp;

import com.example.CabsApp.entity.CabsEntity;
import com.example.CabsApp.repository.CabsRepository;
import com.example.CabsApp.service.impl.CabsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
@ComponentScan({"com.example.CabsApp.controller"})
@ComponentScan({"com.example.CabsApp.service"})
@EntityScan("com.example.CabsApp.entity")
@EnableJpaRepositories("com.example.CabsApp.repository")
public class CabsAppApplication {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		System.out.println("Hello");
		SpringApplication.run(CabsAppApplication.class, args);
//		CabsEntity cabsEntity=new CabsEntity();
//		cabsEntity.setCabRegistrationNumber("MH 12 UC 1234");
//		cabsEntity.setCarColour("White");
//		cabsEntity.setCarModel("ABC");
//		CabsRepository cabsRepository;
//		CabsServiceImpl cabsService=new CabsServiceImpl(cabsRepository);
//		cabsService.addCab(cabsEntity);

	}

}
