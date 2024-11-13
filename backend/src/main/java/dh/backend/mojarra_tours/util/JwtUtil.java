package dh.backend.mojarra_tours.util;
import dh.backend.mojarra_tours.enums.Grade;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {
    private String SECRET_KEY = "your_secret_key"; // Clave secreta para firmar el token

    public String generateToken(String userId, boolean isAdmin, Grade grade) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("isAdmin", isAdmin);
        claims.put("grade", grade);
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 horas de expiración
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
    // Validación del token
    public boolean validateToken(String token, String userId) {
        String username = extractUsername(token);
        return (username.equals(userId) && !isTokenExpired(token));
    }

    // Extracto de información del token
    public String extractUsername(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Verificación de expiración
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Fecha de expiración
    private Date extractExpiration(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }
}
