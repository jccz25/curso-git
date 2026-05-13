package com.jccz25.catalogo.repository;

import com.jccz25.catalogo.model.Continente;
import com.jccz25.catalogo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContinenteRepository extends JpaRepository<Continente, Long> {
}