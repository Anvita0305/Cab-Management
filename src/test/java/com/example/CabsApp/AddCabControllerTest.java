package com.example.CabsApp;


import com.example.CabsApp.controller.CabsContoller;
import com.example.CabsApp.entity.CabsEntity;
import com.example.CabsApp.service.CabsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class AddCabControllerTest {

    private MockMvc mockMvc;

    @Mock
    private CabsService cabsService;

    @InjectMocks
    private CabsContoller cabsContoller;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(cabsContoller).build();
    }

    @Test
    public void testCreateDriver() throws Exception {
        CabsEntity cabsEntity = new CabsEntity();
        // Set the properties of the driverData object

        ObjectMapper objectMapper = new ObjectMapper();
        String driverDataJson = objectMapper.writeValueAsString(cabsEntity);

        mockMvc.perform(post("/addCab")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(driverDataJson))
                .andExpect(status().isOk());
    }
}
