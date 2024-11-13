package dh.backend.mojarra_tours.dto;
import com.fasterxml.jackson.annotation.JsonFormat;
import dh.backend.mojarra_tours.enums.ClimbingStyle;
import dh.backend.mojarra_tours.enums.Destination;
import dh.backend.mojarra_tours.enums.Level;
import lombok.*;
import dh.backend.mojarra_tours.enums.Day;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TourDto {
    private Long id;
    private Destination destination;
    private String description;
    private Long categoryId;
    private ClimbingStyle climbingStyle;
    private Level level;
    private Day day;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime schedule;

}
