package dh.backend.mojarra_tours.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageStorageService {
    String saveImage(MultipartFile imageFile, String folder, String identifier) throws IOException;

}
