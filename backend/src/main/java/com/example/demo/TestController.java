package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/app")
public class TestController {

    @GetMapping("/home")
    public String sayHello() {
        return "Hello World!";
    }
}
