package com.jccz25.catalogo.controller;

import com.jccz25.catalogo.model.Producto;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private List<Producto> productos = new ArrayList<>();

    public ProductoController() {
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

    // 1️⃣ LISTAR
    @GetMapping
    public List<Producto> listarProductos() {
        return productos;
    }
    
    //// 2️⃣ OBTENER POR ID
    //@GetMapping("/{id}")
    //public Producto obtenerPorId(@PathVariable Long id) {
//
  //      return productos.stream()
    //            .filter(p -> p.getId().equals(id))
      //          .findFirst()
        //        .orElse(null);
   // }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerPorId(@PathVariable Long id) {

    return productos.stream()
            .filter(p -> p.getId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }



    
    // 3️⃣ CREAR PRODUCTO
    @PostMapping
    public Producto crearProducto(@RequestBody Producto producto) {

        producto.setId((long) (productos.size() + 1));
        productos.add(producto);

        return producto;
    }


    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(
            @PathVariable Long id,
            @RequestBody Producto productoActualizado) {

        for (Producto p : productos) {
            if (p.getId().equals(id)) {
                p.setNombre(productoActualizado.getNombre());
                p.setDescripcion(productoActualizado.getDescripcion());
                p.setPrecio(productoActualizado.getPrecio());
                p.setCategoria(productoActualizado.getCategoria());
                p.setStock(productoActualizado.getStock());
                p.setActivo(productoActualizado.getActivo());

                return ResponseEntity.ok(p);
            }
        }

        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {

        boolean eliminado = productos.removeIf(p -> p.getId().equals(id));

        if (eliminado) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }




}