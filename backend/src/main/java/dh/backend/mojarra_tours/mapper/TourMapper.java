package dh.backend.mojarra_tours.mapper;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.entity.Category;
import dh.backend.mojarra_tours.entity.Tour;
public class TourMapper {
    // Receives a Tour and converts it to a TourDto
    public static TourDto mapToTourDto(Tour tour) {
        return new TourDto(
                tour.getId(),
                tour.getDestination(),
                tour.getDescription(),
                tour.getCategory().getId(), // Extracts categoryId from the Category entity
                tour.getClimbingStyle(),
                tour.getLevel(),
                tour.getDay(),
                tour.getSchedule()
        );
    }



    public static Tour mapToTour(TourDto tourDto, Category category) {
        return new Tour(
                tourDto.getId(),
                tourDto.getDestination(),
                tourDto.getDescription(),
                category, // Sets the full Category entity here
                tourDto.getClimbingStyle(),
                tourDto.getLevel(),
                tourDto.getDay(),
                tourDto.getSchedule()
        );
    }
}
