package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.UserRegisterDTO;
import dh.backend.mojarra_tours.dto.UserLoginDTO;
import dh.backend.mojarra_tours.dto.UserResponseDTO;
import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.mapper.UserMapperRL;
import dh.backend.mojarra_tours.repository.UserRepository;
import dh.backend.mojarra_tours.util.JwtUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@Tag(name = "Autenticación", description = "Endpoints para autenticación y registro de usuario")
public class UserControllerRL {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapperRL userMapper;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    @Operation(
            summary = "Registrar usuario",
            description = "Registra un nuevo usuario en el sistema",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Objeto para registrar un nuevo usuario",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = UserRegisterDTO.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Usuario registrado exitosamente"
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "El email ya está registrado"
                    )
            }
    )
    public ResponseEntity<String> registerUser(@RequestBody UserRegisterDTO userRegisterDTO) {
        // Aquí se valida y registra el usuario
        if (userRepository.existsByEmail(userRegisterDTO.getEmail())) {
            return ResponseEntity.badRequest().body("El email ya está registrado");
        }

        User user = userMapper.toEntity(userRegisterDTO);
        userRepository.save(user);

        return ResponseEntity.ok("Usuario registrado exitosamente");
    }

    @PostMapping("/login")
    @Operation(
            summary = "Iniciar sesión",
            description = "Permite a un usuario autenticarse con su email y contraseña",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Objeto para iniciar sesión con email y contraseña",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = UserLoginDTO.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Operación exitosa. Devuelve el token y los detalles del usuario",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = UserResponseDTO.class)
                            )
                    ),
                    @ApiResponse(
                            responseCode = "401",
                            description = "Credenciales incorrectas"
                    )
            }
    )
    public ResponseEntity<UserResponseDTO> loginUser(@RequestBody UserLoginDTO userLoginDTO) {
        // Buscar usuario por email
        User user = userRepository.findByEmail(userLoginDTO.getEmail());

        if (user == null || !user.getPassword().equals(userLoginDTO.getPassword())) { // Verificar password sin hashing solo para pruebas
            return ResponseEntity.status(401).body(null);  // Error en login
        }

        // Generar el token JWT
        String token = jwtUtil.generateToken(user.getId().toString(), user.getIsAdmin(), user.getGrade());

        // Mapea el usuario autenticado a UserResponseDTO
        UserResponseDTO responseDTO = userMapper.toResponseDTO(user);
        responseDTO.setToken(token); // Asigna el token generado

        return ResponseEntity.ok(responseDTO);
    }
}
