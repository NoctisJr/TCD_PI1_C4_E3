package dh.backend.mojarra_tours.controller;

import dh.backend.mojarra_tours.dto.UserDto;
import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.repository.UserRepository;
import dh.backend.mojarra_tours.service.impl.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;
    private static Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        LOGGER.info("GET ALL USERS");
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserDto>> getUserById(@PathVariable Long id) {
        LOGGER.info("GET REQUEST USER WITH ID"+ id);
        Optional<UserDto> userDto = userService.getUserById(id);
        if (userDto.isPresent()) {
            return ResponseEntity.ok(userService.getUserById(id));
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody User user) {
        LOGGER.info("POST REQUEST USER CREATED");
        return ResponseEntity.ok(userService.createUser(user));
    }

    @PutMapping
    public ResponseEntity<String> updateUser(@RequestBody UserDto userDto) {
        LOGGER.info("PUT REQUEST USER CREATED");
        Optional<UserDto> user = userService.getUserById(userDto.getId());
        if (user.isPresent()) {
            userService.updateUser(userDto);
            return ResponseEntity.ok("User updated");
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        LOGGER.info("DELET REQUEST USER WITH ID: "+ id);
        Optional<UserDto> user = userService.getUserById(id);
        if (user.isPresent()) {
            userService.deleteUser(id);
            return ResponseEntity.ok("User deleted");
        }
        return ResponseEntity.badRequest().body("User not found");
    }
}
