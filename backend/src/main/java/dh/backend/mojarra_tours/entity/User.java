package dh.backend.mojarra_tours.entity;

import dh.backend.mojarra_tours.enums.Grade;
import dh.backend.mojarra_tours.enums.Level;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Users") //Plural Name for table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name="email", nullable = false, unique = true)
    private String email;
    private String password;
    private String phone;
    @Enumerated(EnumType.STRING)
    private Grade grade;
    @Enumerated(EnumType.STRING)
    private Level level;
    @Column(name="is_admin")
    private Boolean isAdmin =false;

    public User(Long id, String name, String email, String phone, Grade grade, Level level, Boolean isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.grade = grade;
        this.level = level;
        this.isAdmin = isAdmin;
    }


}
