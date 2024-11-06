package dh.backend.mojarra_tours.mapper;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.entity.Tour;

public class TourMapper {
    public static TourDto mapToTourDto(Tour tour){ //receives a tour, returns a tourDto
        return new TourDto(
          tour.getId(),
          tour.getPark(),
          tour.getClimbingStyle(),
          tour.getDifficulty(),
          tour.getDate(),
          tour.getSchedule()
          );
    }

    public static Tour mapToTour(TourDto tourDto){ //receives a tourDto, returns a tour
        return new Tour(
                tourDto.getId(),
                tourDto.getPark(),
                tourDto.getClimbingStyle(),
                tourDto.getDifficulty(),
                tourDto.getDate(),
                tourDto.getSchedule()
        );
    }
}
