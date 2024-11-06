package dh.backend.mojarra_tours.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="Tours") //Plural Name for table
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //Primary Key
    private String park; //Destino del tour: Macaguato, La Mojarra, Chicamocha

    @Column(name = "climbing_style") // Avoid Camel Case on DB
    private String climbingStyle; // Tipo de escalada: Deportiva, Yoyo, Clásica, Via Ferrata
    private String difficulty; // Primera Vez, Principiante, Intermedio, Avanzado
    private LocalDate date; // Fecha del tour
    private String schedule; // Mañana o tarde

}
