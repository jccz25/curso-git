package com.jccz25.catalogo.service;

import java.io.InputStream;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jccz25.catalogo.model.Producto;
import com.jccz25.catalogo.repository.ProductoRepository;

import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class ReporteService {

    private final ProductoRepository productoRepository;

    public ReporteService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public byte[] generarReporteProductos(String categoria) throws Exception {

        InputStream reportStream =
                this.getClass().getResourceAsStream("/reportes/productos.jrxml");

        JasperReport jasperReport =
                JasperCompileManager.compileReport(reportStream);

        List<Producto> productos = productoRepository.findAll();

        // ✅ FILTRO CORRECTO EN JAVA
        if (categoria != null && !categoria.trim().isEmpty()) {
            String filtro = categoria.trim();

            productos = productos.stream()
                    .filter(p -> p.getCategoria() != null)
                    .filter(p -> p.getCategoria().trim().equalsIgnoreCase(filtro))
                    .toList();
        }

        JRBeanCollectionDataSource dataSource =
                new JRBeanCollectionDataSource(productos);

        JasperPrint jasperPrint =
                JasperFillManager.fillReport(
                        jasperReport,
                        null,   // ✅ NO parámetros
                        dataSource
                );

        return JasperExportManager.exportReportToPdf(jasperPrint);
    }
}