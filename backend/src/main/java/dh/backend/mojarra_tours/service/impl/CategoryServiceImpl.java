package dh.backend.mojarra_tours.service.impl;

import dh.backend.mojarra_tours.dto.CategoryDto;
import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.entity.Category;
import dh.backend.mojarra_tours.entity.Tour;
import dh.backend.mojarra_tours.exception.ResourceNotFoundException;
import dh.backend.mojarra_tours.mapper.CategoryMapper;
import dh.backend.mojarra_tours.mapper.TourMapper;
import dh.backend.mojarra_tours.repository.CategoryRepository;
import dh.backend.mojarra_tours.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements ICategoryService {
    private static Logger LOGGER = LoggerFactory.getLogger(CategoryServiceImpl.class);

    private CategoryRepository categoryRepository;

    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = CategoryMapper.mapToCategory(categoryDto);
        Category savedCategory = categoryRepository.save(category);
        LOGGER.info("Saved Category " + savedCategory);
        return CategoryMapper.mapToCategoryDto(savedCategory);
    }

    @Override
    public CategoryDto getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFoundException("No category found with the given id: " + id));
        return CategoryMapper.mapToCategoryDto(category);
    }

    @Override
    public List<CategoryDto> getCategories() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDto> categoryDtoResponse = new ArrayList<>();
        for (Category category: categories) {
            categoryDtoResponse.add(CategoryMapper.mapToCategoryDto(category));
        }
        return categoryDtoResponse;
    }
}
