package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.UserRegisterDTO;
import dh.backend.mojarra_tours.dto.UserLoginDTO;
import dh.backend.mojarra_tours.dto.UserResponseDTO;
import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.mapper.UserMapperRL;
import dh.backend.mojarra_tours.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/auth")
public class UserControllerRL {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapperRL userMapper;

    @PostMapping("/register")
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
    public ResponseEntity<UserResponseDTO> loginUser(@RequestBody UserLoginDTO userLoginDTO) {
        // Buscar usuario por email
        User user = userRepository.findByEmail(userLoginDTO.getEmail());

        if (user == null || !user.getPassword().equals(userLoginDTO.getPassword())) { // Verificar password sin hashing solo para pruebas
            return ResponseEntity.status(401).body(null);  // Error en login
        }

        // Mapea el usuario autenticado a UserResponseDTO
        UserResponseDTO responseDTO = userMapper.toResponseDTO(user);

        return ResponseEntity.ok(responseDTO);
    }
}
