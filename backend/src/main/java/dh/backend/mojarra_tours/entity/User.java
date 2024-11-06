package dh.backend.mojarra_tours.entity;

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
    private String grade;
    @Column(name="is_admin")
    private Boolean isAdmin;

}
