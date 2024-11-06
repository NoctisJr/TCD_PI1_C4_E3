package dh.backend.mojarra_tours.service;

import dh.backend.mojarra_tours.dto.TourDto;

public interface TourServiceInterface {
    TourDto createTour(TourDto tourDto);

    TourDto getTourById(Long id);
}
