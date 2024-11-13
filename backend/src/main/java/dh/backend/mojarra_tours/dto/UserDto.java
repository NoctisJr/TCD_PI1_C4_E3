package dh.backend.mojarra_tours.dto;

import dh.backend.mojarra_tours.enums.Grade;
import dh.backend.mojarra_tours.enums.Level;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private Grade grade;
    private Level level;
    private Boolean isAdmin;
}

