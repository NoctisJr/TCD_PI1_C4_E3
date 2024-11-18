package dh.backend.mojarra_tours.service;

import dh.backend.mojarra_tours.dto.UserRegisterDTO;
import dh.backend.mojarra_tours.dto.UserLoginDTO;
import dh.backend.mojarra_tours.dto.UserResponseDTO;

public interface UserService {

    String register(UserRegisterDTO userRegisterDTO);

    UserResponseDTO login(UserLoginDTO userLoginDTO);
}