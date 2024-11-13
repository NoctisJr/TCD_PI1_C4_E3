# SpringBoot REST API with SpringBoot and PostgreSQL
Base Video
https://www.youtube.com/watch?v=v1IFQWzuSrw
## Initialize Project

Spring Iinitializr https://start.spring.io/

## Add Dependencies

  - Spring Web - REST MVC
  - Spring Data JPA - Hibernate ORM
  - PostgreSQL Driver - DB Connection
  - Lombok - AutoAnnotations
 
## Define Connection URL

 Go to Resources/application.properties to enter the connection URL
 ```properties
 spring.application.name=mojarra-tours  
spring.datasource.url=jdbc:postgresql://localhost:5432/mojarra-db  
spring.datasource.username=postgres  
spring.datasource.password=postgres  

spring.jpa.hibernate.ddl-auto=update
```

## Create Folder Structure
- entity
- service
- controller
- dto
- exception
- repository
- mapper

## Create Entities

Add  getters, setters, and constructors (no args, and all args) using lombok, define it as an entity, and table using Jakarta annotations.
Define primary key using special annotation.
```java
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
    private Boolean isAdmin;  
}
```

## Create Repositories
For each entity, create an interface called EntityNameRepository which extends from JpaRepository Interface with its respective <Entity, IdType>.

```java
package dh.backend.mojarra_tours.repository;  
  
import dh.backend.mojarra_tours.entity.User;  
import org.springframework.data.jpa.repository.JpaRepository;  

// Define the type <EntityClass, IdType>
public interface UserRepository extends JpaRepository<User, Long> {  
}
```

## Create DTOs
Dtos may not contain all the attributes of the entity. 
Create the Dto Clases as EntityNameDto. No need for @Anottations, just add the attributes you want on your dto, from the original entity.

```java
package dh.backend.mojarra_tours.dto;  
  
import jakarta.persistence.Column;  
import lombok.AllArgsConstructor;  
import lombok.Getter;  
import lombok.NoArgsConstructor;  
import lombok.Setter;  
  
import java.time.LocalDate;  
@Getter  
@Setter  
@NoArgsConstructor  
@AllArgsConstructor  
public class TourDto {  
    private Long id;  
    private String park;  
    private String climbingStyle;  
    private String difficulty;  
    private LocalDate date;  
    private String schedule;  
}
```

## Create Mappers between Entities and Dtos.

in order to transfer the information between the DTO and the entity, and viceVersa, define Two methods, with its respective constructors mapping the attributes from one to another.

Dto -> Entity; 
Entity -> Dto

```java
package dh.backend.mojarra_tours.mapper;  
  
import dh.backend.mojarra_tours.dto.TourDto;  
import dh.backend.mojarra_tours.entity.Tour;  
  
public class TourMapper {  
    public static TourDto mapToTourDto(Tour tour){ //receives a tour, returns a tourDto  
  return new TourDto(  
          tour.getId(),  
          tour.getPark(),  
          tour.getClimbingStyle(),  
          tour.getDifficulty(),  
          tour.getDate(),  
          tour.getSchedule()  
          );  
    }  
  
    public static Tour mapToTour(TourDto tourDto){ //receives a tourDto, returns a tour  
  return new Tour(  
                tourDto.getId(),  
                tourDto.getPark(),  
                tourDto.getClimbingStyle(),  
                tourDto.getDifficulty(),  
                tourDto.getDate(),  
                tourDto.getSchedule()  
        );  
    }  
}
```

# Create the REST API

## Define the Service Layer

### Define Service Interface
Create ServiceInterface, IClassNameService, or ClassNameServiceInterface the interface has the methods, whith Dto as input parameter.

```java
package dh.backend.mojarra_tours.service;  
  
import dh.backend.mojarra_tours.dto.TourDto;  
  
public interface TourServiceInterface {  
    TourDto createTour(TourDto tourDto);  
}
```

### Define the service Implementation
Inside a new package in services usually impl, create a file for each new service implementation.
ClassNameServiceImpl , this class implements the Service Interface previously Created.

- Use the @Service Annotation,
- Add the Repository as a private Attribute, 
- Create a Constructor that initializes the Repository. (You can use Lombok, @AllArgsConstructor)
- Implement the methods defined on the interface.
- The POST method, receives a Dto as parameter, with the information to create a Entry on the Database. Map the Dto to a Instance of the Class, save the class on the database using the Repository method .save, and finally, return te saved Element as a Dto.

```java
package dh.backend.mojarra_tours.service.impl;

import dh.backend.mojarra_tours.dto.TourDto;
import dh.backend.mojarra_tours.entity.Tour;
import dh.backend.mojarra_tours.mapper.TourMapper;
import dh.backend.mojarra_tours.repository.TourRepository;
import dh.backend.mojarra_tours.service.ITourService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TourServiceImpl implements ITourService {
    private static Logger LOGGER = LoggerFactory.getLogger(TourServiceImpl.class);

    private TourRepository tourRepository;

    @Override
    public TourDto createTour(TourDto tourDto) {
        Tour tour = TourMapper.mapToTour(tourDto);
        Tour savedTour = tourRepository.save(tour);
        LOGGER.info("Saved Tour " + savedTour);
        return TourMapper.mapToTourDto(savedTour);
    }
}
```

## Create Controllers

Create a file, ClassNameController con the controller folder. one for each entity. 
the class should be annotated with
@RestContoller
@RequestMapping("/api/baseEndpoint") 
@AllArgsConstructor

- Add the Dependencies: An instance of the service Interface, no need to instanciate it since Spring hanldes the Dependency Inyection.
```java
@AllArgsConstructor  
@RestController  
@RequestMapping("/api/tours")  
class TourController {  
    private TourServiceInterface tourService;
    }
```

### Create Endpoints
Now proceed to create all the needed endpoints for the controller. Each endpoint should return a ResponseEntity< Type > and handle the inputs either from the URL query, param or body element.
Each endpoint, has an annotationr for different Http methods, and calls a service using the service stored in the attribute and returns an Http status code and sometimes a body. 
```java
@PostMapping  
public ResponseEntity<TourDto> createTour(@RequestBody TourDto tourDto){  
    LOGGER.info("POST REQUEST SENT");  
    TourDto savedTour = tourService.createTour(tourDto);  
    return ResponseEntity.status(HttpStatus.CREATED).body(savedTour);  
    
@GetMapping("/working")  
public ResponseEntity<Map<String, String>> isWorking() {  
    Map<String, String> response = new HashMap<>();  
    LOGGER.info("GET REQUEST SENT");  
    response.put("message", "I'm Working just fine!");  
    return ResponseEntity.ok(response); // HTTP status 200 (OK)  
}
}
```