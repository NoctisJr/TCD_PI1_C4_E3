package dh.backend.mojarra_tours.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dh.backend.mojarra_tours.dto.CategoryDto;
import dh.backend.mojarra_tours.service.ICategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name = "Categorias", description = "Endpoints para gestionar las categorias")
public class CategoryController {

    private ICategoryService iCategoryService;
    private static Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    @PostMapping
    @Operation(
            summary = "Crear nueva categoría",
            description = "Crea una nueva categoría en el sistema",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Objeto para crear una nueva categoría",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = CategoryDto.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "201",
                            description = "Categoría creada exitosamente",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = CategoryDto.class)
                            )
                    )
            }
    )
    public ResponseEntity<CategoryDto> createCategory(
            @RequestParam(value="category") String categoryString,
            @RequestParam(value="image", required = false) MultipartFile image){
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            CategoryDto categoryDto = objectMapper.readValue(categoryString, CategoryDto.class);
            // If there's an image, set it in the DTO
            if (image != null && !image.isEmpty()) {
                categoryDto.setImage(image);
            }
            CategoryDto savedCategory = iCategoryService.createCategory(categoryDto);
            LOGGER.info("POST REQUEST CATEGORY CREATED");
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCategory);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping
    @Operation(
            summary = "Obtener todas las categorías",
            description = "Obtiene una lista de todas las categorías disponibles",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = CategoryDto.class)
                            )
                    )
            }
    )
    public ResponseEntity<List<CategoryDto>> getCategories() {
        LOGGER.info("GET ALL CATEGORIES");
        List<CategoryDto> response = iCategoryService.getCategories();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Obtener categoría por ID",
            description = "Obtiene una categoría específica utilizando su ID",
            parameters = {
                    @io.swagger.v3.oas.annotations.Parameter(
                            name = "id",
                            description = "ID de la categoría a buscar",
                            required = true,
                            in = io.swagger.v3.oas.annotations.enums.ParameterIn.PATH,
                            schema = @Schema(type = "integer", format = "int64")
                    )
            },
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = CategoryDto.class)
                            )
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Categoría no encontrada"
                    )
            }
    )
    public ResponseEntity<CategoryDto> getTourById(@PathVariable("id") Long id) {
        LOGGER.info("GET REQUEST CATEGORY WITH ID" + id);
        CategoryDto categoryDto = iCategoryService.getCategoryById(id);
        if (categoryDto != null) {
            return ResponseEntity.ok(categoryDto);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
