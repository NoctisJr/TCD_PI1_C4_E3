package dh.backend.mojarra_tours.service.impl;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.entity.Category;
import dh.backend.mojarra_tours.entity.Tour;
import dh.backend.mojarra_tours.exception.ResourceNotFoundException;
import dh.backend.mojarra_tours.mapper.TourMapper;
import dh.backend.mojarra_tours.repository.CategoryRepository;
import dh.backend.mojarra_tours.repository.TourRepository;
import dh.backend.mojarra_tours.service.ITourService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class TourServiceImpl implements ITourService {
    private static Logger LOGGER = LoggerFactory.getLogger(TourServiceImpl.class);

    private TourRepository tourRepository;
    private CategoryRepository categoryRepository;
    @Override
    public TourDto createTour(TourDto tourDto) {
        Category category = categoryRepository.findById(tourDto.getCategoryId())
                .orElseThrow(()->
                        new ResourceNotFoundException("Category not found."));
        Tour tour = TourMapper.mapToTour(tourDto, category);
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

    @Override
    public List<TourDto> getTours() {
        List<Tour> tours = tourRepository.findAll();
        List<TourDto> tourDtoResponse = new ArrayList<>();
        for (Tour tour: tours) {
            tourDtoResponse.add(TourMapper.mapToTourDto(tour));
        }
        return tourDtoResponse;
    }

    @Override
    public void deleteTour(Long id) {
        Tour tour = tourRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFoundException("No tour found with the given id: " + id));
        // Si no se arroja ningún error, entonces quiere decir que el tour existe, se procede a eliminarlo.
        tourRepository.delete(tour);
        LOGGER.info("Tour With id " + id + " deleted");
    }
}
