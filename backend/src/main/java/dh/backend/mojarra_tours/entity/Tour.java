package dh.backend.mojarra_tours.entity;

import dh.backend.mojarra_tours.enums.ClimbingStyle;
import dh.backend.mojarra_tours.enums.Day;
import dh.backend.mojarra_tours.enums.Destination;
import dh.backend.mojarra_tours.enums.Level;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalTime;

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

    @Enumerated(EnumType.STRING)
    private Destination destination; //Destino del tour: Macaguato, La Mojarra, Chicamocha

    private String description; // Tour de escalada Escalada Deportiva, alquiler de equipo, almuerzo/cena y belay o aseguramiento.

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false) // Specifies the foreign key column
    private Category category;

    @Enumerated(EnumType.STRING)
    @Column(name = "climbing_style") // Avoid Camel Case on DB

    private ClimbingStyle climbingStyle; // Tipo de escalada: Deportiva, Yoyo, Clásica, Via Ferrata

    @Enumerated(EnumType.STRING)
    private Level level; // Primera Vez, Principiante, Intermedio, Avanzado

    @Enumerated(EnumType.STRING)
    private Day day; // MON, TUE, FRI, día de la semana en que se realiza el tour.

    private LocalTime schedule; // 12:00, 14:00, 06:00 Hora de salida.
}
