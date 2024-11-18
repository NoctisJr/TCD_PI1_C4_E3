package dh.backend.mojarra_tours.service;

import dh.backend.mojarra_tours.dto.UserDto;
import dh.backend.mojarra_tours.entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    UserDto createUser(User user);
    Optional<UserDto> getUserById(Long id);
    List<UserDto> getUsers();
    void updateUser(UserDto userDto);
    void deleteUser(Long id);
}
