package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.CategoryDto;
import dh.backend.mojarra_tours.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private ICategoryService iCategoryService;
    private static Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    @PostMapping
    public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto){
        LOGGER.info("POST REQUEST CATEGORY CREATED");
        CategoryDto savedCategory = iCategoryService.createCategory(categoryDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCategory);
    }

    @GetMapping
    public ResponseEntity<List<CategoryDto>> getCategories(){
        LOGGER.info("GET ALL CATEGORIES");
        List<CategoryDto> response = iCategoryService.getCategories();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDto> getTourById(@PathVariable("id") Long id){
        LOGGER.info("GET REQUEST CATEGORY WITH ID"+ id);
        CategoryDto categoryDto = iCategoryService.getCategoryById(id);
        return ResponseEntity.ok(categoryDto);
    }
}
