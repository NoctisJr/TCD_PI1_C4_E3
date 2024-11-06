package dh.backend.mojarra_tours.exception;

// Extiende de la clase padre Exception,
// se añade un constructor con mensaje personalizado. Exception(message.String)

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    //Constructor con mensaje
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
