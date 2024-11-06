package dh.backend.mojarra_tours.service.impl;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.entity.Tour;
import dh.backend.mojarra_tours.exception.ResourceNotFoundException;
import dh.backend.mojarra_tours.mapper.TourMapper;
import dh.backend.mojarra_tours.repository.TourRepository;
import dh.backend.mojarra_tours.service.TourServiceInterface;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor
public class TourServiceImpl implements TourServiceInterface {
    private static Logger LOGGER = LoggerFactory.getLogger(TourServiceImpl.class);

    private TourRepository tourRepository;
    @Override
    public TourDto createTour(TourDto tourDto) {
        Tour tour = TourMapper.mapToTour(tourDto);
        Tour savedTour = tourRepository.save(tour);
        LOGGER.info("Saved Tour " + savedTour);
        return TourMapper.mapToTourDto(savedTour);
    }

    @Override
    public TourDto getTourById(Long id) {
        Tour tour = tourRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFoundException("No tour found with the given id: " + id));
        return TourMapper.mapToTourDto(tour);
    }
}
