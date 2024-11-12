package dh.backend.mojarra_tours.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dh.backend.mojarra_tours.dto.CategoryDto;
import dh.backend.mojarra_tours.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private ICategoryService iCategoryService;
    private static Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    @PostMapping
    public ResponseEntity<CategoryDto> createCategory(
            @RequestParam(value="category") String categoryString,
            @RequestParam(value="image", required = false) MultipartFile image){
        try{
            ObjectMapper objectMapper = new ObjectMapper();
            CategoryDto categoryDto = objectMapper.readValue(categoryString, CategoryDto.class);
            // If there's an image, set it in the DTO
            if (image != null && !image.isEmpty()) {
                categoryDto.setImage(image);
            }
            CategoryDto savedCategory = iCategoryService.createCategory(categoryDto);
            LOGGER.info("POST REQUEST CATEGORY CREATED");
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCategory);
        }catch(Exception e){
            LOGGER.error(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
