package com.example.CabsApp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cabDetails")
public class CabsEntity {

    @Id
    @Column(name="cab_registration_number")
    private String cabRegistrationNumber;

    @Column(name="cab_model")
    private String carModel;

    @Column(name="cab_colour")
    private String carColour;

    @Column(name="cab_id")
    private String id;

    public CabsEntity() {
    }

    public String getCabRegistrationNumber() {
        return cabRegistrationNumber;
    }

    public void setCabRegistrationNumber(String cabRegistrationNumber) {
        this.cabRegistrationNumber = cabRegistrationNumber;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public String getCarColour() {
        return carColour;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCarColour(String carColour) {
        this.carColour = carColour;
    }
}
