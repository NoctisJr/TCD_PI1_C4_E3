package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.service.ITourService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/api/tours")
class TourController {
    private ITourService tourService;
    private static Logger LOGGER = LoggerFactory.getLogger(TourController.class);

    //Add new Tour
    @PostMapping
    public ResponseEntity<TourDto> createTour(@RequestBody TourDto tourDto){
        LOGGER.info("POST REQUEST TOUR");
        TourDto savedTour = tourService.createTour(tourDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTour);
    }

    @GetMapping
    public ResponseEntity<List<TourDto>> getTours(){
        LOGGER.info("GET ALL TOURS");
        List<TourDto> response = tourService.getTours();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TourDto> getTourById(@PathVariable("id") Long id){
        LOGGER.info("GET REQUEST TOUR WITH ID "+ id);
        TourDto tourDto = tourService.getTourById(id);
        return ResponseEntity.ok(tourDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTourById(@PathVariable("id") Long id){
        LOGGER.info("DELETE REQUEST: TOUR WITH ID "+ id);
        tourService.deleteTour(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/working")
    public ResponseEntity<Map<String, String>> isWorking() {
        Map<String, String> response = new HashMap<>();
        LOGGER.info("GET REQUEST SENT");
        response.put("message", "I'm Working just fine!");
        return ResponseEntity.ok(response); // HTTP status 200 (OK)
    }
}
