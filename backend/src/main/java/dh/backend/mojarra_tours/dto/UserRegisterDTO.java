package dh.backend.mojarra_tours.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterDTO {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String grade;
    private Boolean isAdmin;
}
