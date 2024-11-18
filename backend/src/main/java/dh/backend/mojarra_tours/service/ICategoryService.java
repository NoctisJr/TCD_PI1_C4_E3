package dh.backend.mojarra_tours.service;

import dh.backend.mojarra_tours.dto.CategoryDto;

import java.util.List;

public interface ICategoryService {

    CategoryDto createCategory(CategoryDto categoryDto);
    CategoryDto getCategoryById(Long id);
    List<CategoryDto> getCategories();

}
