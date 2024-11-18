package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.UserDto;
import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.service.impl.UserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@Tag(name = "Usuario", description = "Endpoints para CRUD de usuario")
public class UserController {
    @Autowired
    private UserServiceImpl userService;
    private static Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @GetMapping
    @Operation(
            summary = "Todos los usuarios",
            description = "Regresa un arreglo con todos los usuarios",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = UserDto.class)
                            )
                    )
            }
    )
    public ResponseEntity<List<UserDto>> getAllUsers() {
        LOGGER.info("GET ALL USERS");
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Obtener usuario por ID",
            description = "Buscar un usuario mediante un ID",
            parameters = {
                    @Parameter(
                            name = "id",
                            description = "ID del usuario",
                            required = true,
                            in = ParameterIn.PATH,
                            schema = @Schema(type = "integer", format = "int64")
                    )
            },
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = UserDto.class)
                            )
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Usuario no encontrado"
                    )
            }
    )
    public ResponseEntity<Optional<UserDto>> getUserById(@PathVariable Long id) {
        LOGGER.info("GET REQUEST USER WITH ID " + id);
        Optional<UserDto> userDto = userService.getUserById(id);
        if (userDto.isPresent()) {
            return ResponseEntity.ok(userDto);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    @Operation(
            summary = "Ingresar Usuario",
            description = "Ingresa un usuario pasando todo el objeto",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Usuario requiere objeto (name, email, password, phone, grade, isAdmin)",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = UserDto.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = UserDto.class)
                            )
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Datos inválidos"
                    )
            }
    )
    public ResponseEntity<UserDto> createUser(@RequestBody User user) {
        LOGGER.info("POST REQUEST USER CREATED");
        return ResponseEntity.ok(userService.createUser(user));
    }

    @PutMapping
    @Operation(
            summary = "Actualizar Usuario",
            description = "Actualiza los datos de un usuario existente",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Usuario requiere objeto (name, email, password, phone, grade, isAdmin)",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = UserDto.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa"
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Usuario no encontrado"
                    )
            }
    )
    public ResponseEntity<String> updateUser(@RequestBody UserDto userDto) {
        LOGGER.info("PUT REQUEST USER UPDATED");
        Optional<UserDto> user = userService.getUserById(userDto.getId());
        if (user.isPresent()) {
            userService.updateUser(userDto);
            return ResponseEntity.ok("User updated");
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Eliminar usuario por ID",
            description = "Elimina un usuario mediante su ID",
            parameters = {
                    @Parameter(
                            name = "id",
                            description = "ID del usuario",
                            required = true,
                            in = ParameterIn.PATH,
                            schema = @Schema(type = "integer", format = "int64")
                    )
            },
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa"
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Usuario no encontrado"
                    )
            }
    )
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        LOGGER.info("DELETE REQUEST USER WITH ID: " + id);
        Optional<UserDto> user = userService.getUserById(id);
        if (user.isPresent()) {
            userService.deleteUser(id);
            return ResponseEntity.ok("User deleted");
        }
        return ResponseEntity.badRequest().body("User not found");
    }
}
