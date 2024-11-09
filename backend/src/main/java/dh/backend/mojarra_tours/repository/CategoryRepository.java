package dh.backend.mojarra_tours.repository;

import dh.backend.mojarra_tours.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
