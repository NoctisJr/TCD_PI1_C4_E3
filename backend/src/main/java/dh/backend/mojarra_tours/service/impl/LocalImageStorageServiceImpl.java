package dh.backend.mojarra_tours.service.impl;

import dh.backend.mojarra_tours.service.ImageStorageService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@Profile("local")
public class LocalImageStorageServiceImpl implements ImageStorageService {

    private static final String BASE_DIRECTORY = "src/main/resources/static/images";
    @Override
    public String saveImage(MultipartFile imageFile, String folder, String identifier) throws IOException {
        Path uploadPath = Paths.get(BASE_DIRECTORY, folder);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String fileName = identifier + "-" + imageFile.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(imageFile.getInputStream(), filePath);

        return "images/" + folder + "/" + fileName;
    }
}
