package dh.backend.mojarra_tours.mapper;

import dh.backend.mojarra_tours.dto.UserDto;
import dh.backend.mojarra_tours.entity.User;

public class UserMapper {

    public static UserDto mapToDto(User user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getGrade(),
                user.getLevel(),
                user.getIsAdmin()
        );
    }

    public static User mapToUser(UserDto userDto) {
        User user = new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getEmail(),
                userDto.getPhone(),
                userDto.getGrade(),
                null,
                userDto.getIsAdmin()
        );

        user.setLevel(user.getGrade().getLevel());

        return user;
    }
}
