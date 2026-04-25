package com.jccz25.catalogo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

    @GetMapping("/holaMundo")
    public String holaMundo() {
        return "Hola mundo cruel!";
    }
}