//package com.example.CabsApp;
//
//import com.example.CabsApp.entity.CabsEntity;
//import com.example.CabsApp.repository.CabsRepository;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import java.util.Optional;
//
//@SpringBootTest(classes = CabsEntity.class)
//@AutoConfigureMockMvc
//public class DeleteCabControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private CabsRepository cabsRepository;
//
//    @Test
//    public void testDeleteDriver() throws Exception {
//        // Mock the existing driver data
//        CabsEntity existingCab = new CabsEntity();
//        existingCab.setCabRegistrationNumber("MH 12 AB 1234");
//        existingCab.setCarColour("White");
//        existingCab.setCarModel("Honda City");
//
//        // Mock the repository's findById method to return the existing driver data
//        Mockito.when(cabsRepository.findByCabRegistrationNumber("MH 12 AB 1234")).thenReturn((existingCab));
//
//        // Perform the DELETE request to delete the driver
//        mockMvc.perform(MockMvcRequestBuilders
//                        .delete("/deleteCab/MH 12 AB 1234")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.content().string("Cab deleted successfully!"));
//
//
//        Mockito.verify(cabsRepository, Mockito.times(1)).delete(existingCab);
//    }
//}