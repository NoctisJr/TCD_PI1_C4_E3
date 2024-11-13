package dh.backend.mojarra_tours.mapper;

import dh.backend.mojarra_tours.dto.UserRegisterDTO;
import dh.backend.mojarra_tours.dto.UserLoginDTO;
import dh.backend.mojarra_tours.dto.UserResponseDTO;
import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapperRL {
    @Autowired
    private JwtUtil jwtUtil;

    // Mapea UserRegisterDTO a User (para registrar usuario)
    public User toEntity(UserRegisterDTO userRegisterDTO) {
        User user = new User();
        user.setName(userRegisterDTO.getName());
        user.setEmail(userRegisterDTO.getEmail());
        user.setPassword(userRegisterDTO.getPassword());  // Recuerda encriptar la contraseña
        user.setPhone(userRegisterDTO.getPhone());
        user.setGrade(userRegisterDTO.getGrade());
        user.setIsAdmin(false);  // Valor predeterminado para un usuario no admin
        return user;
    }

    // Mapea UserLoginDTO a User (para verificar login)
    public User toEntity(UserLoginDTO userLoginDTO) {
        User user = new User();
        user.setEmail(userLoginDTO.getEmail());
        user.setPassword(userLoginDTO.getPassword()); // Recuerda encriptar la contraseña
        return user;
    }

    // Mapea User a UserResponseDTO (para devolver la respuesta al usuario)
    public UserResponseDTO toResponseDTO(User user) {
        UserResponseDTO responseDTO = new UserResponseDTO();

        // Genera el token JWT
        String token = jwtUtil.generateToken(user.getId().toString(), user.getIsAdmin(), user.getGrade());
        responseDTO.setToken(token);
        return responseDTO;
    }
}