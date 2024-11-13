package dh.backend.mojarra_tours.mapper;

import dh.backend.mojarra_tours.entity.Category;
import dh.backend.mojarra_tours.dto.CategoryDto;
public class CategoryMapper {

    public static CategoryDto mapToCategoryDto(Category category){
        return new CategoryDto(
                category.getId(),
                category.getName(),
                category.getImgUrl(),
                null
        );
    }

    public static Category mapToCategory(CategoryDto categoryDto){
        return new Category(
                categoryDto.getId(),
                categoryDto.getName(),
                categoryDto.getImgUrl()
        );
    }
}
