package com.jccz25.catalogo.controller;

import com.jccz25.catalogo.model.Continente;
import com.jccz25.catalogo.repository.ContinenteRepository;     
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;



@RestController
@RequestMapping("c")
@CrossOrigin(origins = "http://localhost:4200")
public class ContinenteController {

    private final ContinenteRepository repo;

    public ContinenteController(ContinenteRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Continente> listar() {
        return repo.findAll();
    }
}