package dh.backend.mojarra_tours.repository;

import dh.backend.mojarra_tours.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour,Long> {
}
