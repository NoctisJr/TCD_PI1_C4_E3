package dh.backend.mojarra_tours.dto;

import dh.backend.mojarra_tours.enums.Grade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private String token; // Nuevo campo para el token
}
