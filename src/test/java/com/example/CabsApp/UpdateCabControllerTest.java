//package com.example.CabsApp;
//
//import com.example.CabsApp.controller.CabsContoller;
//import com.example.CabsApp.entity.CabsEntity;
//import com.example.CabsApp.service.CabsService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import static org.springframework.http.RequestEntity.put;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@ExtendWith(MockitoExtension.class)
//public class UpdateCabControllerTest {
//
//    private MockMvc mockMvc;
//
//    @Mock
//    private CabsService cabsService;
//
//    @InjectMocks
//    private CabsContoller cabsContoller;
//
//    @BeforeEach
//    public void setup() {
//        mockMvc = MockMvcBuilders.standaloneSetup(cabsContoller).build();
//    }
//
//    @Test
//    public void testUpdateDriver() throws Exception {
//        CabsEntity cabsEntity = new CabsEntity();
//        cabsEntity.setCabRegistrationNumber("MH 12 AB 1234");
//        cabsEntity.setCarColour("Red");
//        cabsEntity.setCarModel("Honda");
//
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String cabDataJson = objectMapper.writeValueAsString(cabsEntity);
//
//        mockMvc.perform(put("/updateCab/MH 12 AB 1234")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .andExpect(status().isOk());
//
//
//
//
//    }
//}
