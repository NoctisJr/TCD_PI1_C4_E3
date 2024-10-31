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
                .csrf().disable() // Disable CSRF protection for testing purposes
                .authorizeRequests()
                .anyRequest().permitAll() // Allow all requests without authentication
                .and()
                .httpBasic().disable(); // Disable Basic Authentication
        return http.build();
    }
}
