package com.jccz25.catalogo.service;

import com.jccz25.catalogo.model.Producto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private List<Producto> productos = new ArrayList<>();

    public ProductoService() {
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
    }

    public List<Producto> listar() {
        return productos;
    }

    public Optional<Producto> obtenerPorId(Long id) {
        return productos.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();
    }

    public Producto crear(Producto producto) {
        producto.setId((long) (productos.size() + 1));
        productos.add(producto);
        return producto;
    }

    public Optional<Producto> actualizar(Long id, Producto datos) {
        for (Producto p : productos) {
            if (p.getId().equals(id)) {
                p.setNombre(datos.getNombre());
                p.setDescripcion(datos.getDescripcion());
                p.setPrecio(datos.getPrecio());
                p.setCategoria(datos.getCategoria());
                p.setStock(datos.getStock());
                p.setActivo(datos.getActivo());
                return Optional.of(p);
            }
        }
        return Optional.empty();
    }

    public boolean eliminar(Long id) {
        return productos.removeIf(p -> p.getId().equals(id));
    }
}

