package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/")
public class HelloController {
  @GetMapping("/message")
  public ResponseEntity index() {
    return ResponseEntity.ok("Greetings from Spring Boot");
  }

}
