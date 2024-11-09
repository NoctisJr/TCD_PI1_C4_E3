package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.repository.UserRepository;
import dh.backend.mojarra_tours.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.regex.Pattern;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // Patrón de expresión regular para validar el email
    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO) {
        // Validar que el email tenga el formato correcto
        if (!EMAIL_PATTERN.matcher(userDTO.getEmail()).matches()) {
            return ResponseEntity.badRequest().body("Email inválido");
        }

        // Validar que el password tenga una longitud mínima
        if (userDTO.getPassword().length() < 6) {
            return ResponseEntity.badRequest().body("El password debe tener al menos 6 caracteres");
        }

        // Validar que el email no esté registrado
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            return ResponseEntity.badRequest().body("El email ya está registrado");
        }

        // Crear y guardar el usuario
        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword()); // Asegúrate de encriptar la contraseña en un entorno real
        user.setPhone(userDTO.getPhone());
        user.setGrade(userDTO.getGrade());
        user.setIsAdmin(false); // Valor por defecto

        userRepository.save(user);

        return ResponseEntity.ok("Usuario registrado exitosamente");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO) {
        // Buscar usuario por email
        User user = userRepository.findByEmail(userDTO.getEmail());

        if (user == null || !user.getPassword().equals(userDTO.getPassword())) { // Verificar password sin hashing solo para pruebas
            return ResponseEntity.status(401).body("Email o contraseña incorrectos");
        }

        return ResponseEntity.ok("Login exitoso");
    }
}