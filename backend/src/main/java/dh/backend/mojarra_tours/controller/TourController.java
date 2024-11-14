package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.service.ITourService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/api/tours")
@Tag(name = "Tours", description = "Endpoints para gestionar los tours")
class TourController {
    private ITourService tourService;
    private static Logger LOGGER = LoggerFactory.getLogger(TourController.class);

    @PostMapping
    @Operation(
            summary = "Crear nuevo tour",
            description = "Crea un nuevo tour en el sistema",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Objeto para crear un nuevo tour",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = TourDto.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "201",
                            description = "Tour creado exitosamente",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = TourDto.class)
                            )
                    )
            }
    )
    public ResponseEntity<TourDto> createTour(@RequestBody TourDto tourDto) {
        LOGGER.info("POST REQUEST TOUR");
        TourDto savedTour = tourService.createTour(tourDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTour);
    }

    @GetMapping
    @Operation(
            summary = "Obtener todos los tours",
            description = "Obtiene una lista de todos los tours disponibles",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = TourDto.class)
                            )
                    )
            }
    )
    public ResponseEntity<List<TourDto>> getTours() {
        LOGGER.info("GET ALL TOURS");
        List<TourDto> response = tourService.getTours();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Obtener tour por ID",
            description = "Obtiene un tour específico utilizando su ID",
            parameters = {
                    @io.swagger.v3.oas.annotations.Parameter(
                            name = "id",
                            description = "ID del tour a buscar",
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
                                    schema = @Schema(implementation = TourDto.class)
                            )
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Tour no encontrado"
                    )
            }
    )
    public ResponseEntity<TourDto> getTourById(@PathVariable("id") Long id) {
        LOGGER.info("GET REQUEST TOUR WITH ID " + id);
        TourDto tourDto = tourService.getTourById(id);
        if (tourDto != null) {
            return ResponseEntity.ok(tourDto);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Eliminar tour",
            description = "Elimina un tour del sistema mediante su ID",
            parameters = {
                    @io.swagger.v3.oas.annotations.Parameter(
                            name = "id",
                            description = "ID del tour a eliminar",
                            required = true,
                            in = io.swagger.v3.oas.annotations.enums.ParameterIn.PATH,
                            schema = @Schema(type = "integer", format = "int64")
                    )
            },
            responses = {
                    @ApiResponse(
                            responseCode = "204",
                            description = "Operación exitosa, tour eliminado"
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Tour no encontrado"
                    )
            }
    )
    public ResponseEntity<Void> deleteTourById(@PathVariable("id") Long id) {
        LOGGER.info("DELETE REQUEST: TOUR WITH ID " + id);
        tourService.deleteTour(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/working")
    @Operation(
            summary = "Verificar funcionamiento",
            description = "Verifica que el servicio de tours esté funcionando correctamente",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Servicio funcionando correctamente",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = Map.class)
                            )
                    )
            }
    )
    public ResponseEntity<Map<String, String>> isWorking() {
        Map<String, String> response = new HashMap<>();
        LOGGER.info("GET REQUEST SENT");
        response.put("message", "I'm Working just fine!");
        return ResponseEntity.ok(response); // HTTP status 200 (OK)
    }
}
