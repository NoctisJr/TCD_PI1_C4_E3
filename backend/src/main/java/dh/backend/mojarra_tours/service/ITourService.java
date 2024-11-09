package dh.backend.mojarra_tours.service;

import dh.backend.mojarra_tours.dto.TourDto;

import java.util.List;

public interface ITourService {
    TourDto createTour(TourDto tourDto);

    TourDto getTourById(Long id);

    List<TourDto> getTours();

    void deleteTour(Long id);
}
