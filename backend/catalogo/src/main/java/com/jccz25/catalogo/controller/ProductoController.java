package com.jccz25.catalogo.controller;

import com.jccz25.catalogo.model.Producto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductoController {

    @GetMapping("/api/productos")
    public List<Producto> listarProductos() {

        List<Producto> productos = new ArrayList<>();

        productos.add(new Producto(
                1L,
                "Playera Azul",
                "Playera algodón talla M",
                new BigDecimal("199.99"),
                "Ropa",
                20,
                true
        ));

        productos.add(new Producto(
                2L,
                "Pantalón Negro",
                "Pantalón de mezclilla",
                new BigDecimal("399.50"),
                "Ropa",
                15,
                true
        ));

        return productos;
    }
}
