package com.jccz25.catalogo.controller;

import com.jccz25.catalogo.model.Pais;
import com.jccz25.catalogo.repository.PaisRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
@RequestMapping("/api/paises")
@CrossOrigin(origins = "http://localhost:4200")
public class PaisController {

    private final PaisRepository repo;

    public PaisController(PaisRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/por-continente/{idContinente}")
    public List<Pais> porContinente(@PathVariable Long idContinente) {
        return repo.findByContinenteId(idContinente);
    }
}