package com.jccz25.catalogo.repository;

import com.jccz25.catalogo.model.Pais;
import com.jccz25.catalogo.model.Producto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaisRepository extends JpaRepository<Pais, Long> {

    List<Pais> findByContinenteId(Long idContinente);
}
