package dh.backend.mojarra_tours.service.impl;

import dh.backend.mojarra_tours.dto.UserDto;
import dh.backend.mojarra_tours.entity.User;
import dh.backend.mojarra_tours.exception.ResourceNotFoundException;
import dh.backend.mojarra_tours.mapper.UserMapper;
import dh.backend.mojarra_tours.repository.UserRepository;
import dh.backend.mojarra_tours.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static dh.backend.mojarra_tours.mapper.UserMapper.mapToDto;

@Service
public class UserServiceImpl implements IUserService {
    private static Logger LOGGER = LoggerFactory.getLogger(TourServiceImpl.class);
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto createUser(User user) {
        user.setLevel(user.getGrade().getLevel());
        User savedUser = userRepository.save(user);
        return UserMapper.mapToDto(savedUser);
    }

    @Override
    public Optional<UserDto> getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserMapper::mapToDto)
                .or(() -> {
                    throw new ResourceNotFoundException("User not found!");
                });
    }

    @Override
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(UserMapper::mapToDto).collect(Collectors.toList());
    }

    @Override
    public void updateUser(UserDto userDto) {
        Optional<User> optionalUser = userRepository.findById(userDto.getId());
        if (optionalUser.isPresent()) {
            userRepository.save(UserMapper.mapToUser(userDto));
        }
    }

    @Override
    public void deleteUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            userRepository.deleteById(id);
        }
    }
}
