package dh.backend.mojarra_tours.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Desactivar la protección CSRF para fines de prueba
                .authorizeRequests()

                // Permitir el acceso sin autenticación a las rutas de Swagger
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()

                // Permitir todas las demás solicitudes sin autenticación (ajustar según sea necesario)
                .anyRequest().permitAll()

                .and()
                .httpBasic().disable(); // Desactivar la autenticación básica
        return http.build();
    }
}
