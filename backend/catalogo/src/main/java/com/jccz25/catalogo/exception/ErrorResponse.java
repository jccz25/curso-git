package com.jccz25.catalogo.exception;

import java.time.LocalDateTime;
import java.util.Map;

public class ErrorResponse {

    private LocalDateTime timestamp;
    private int status;
    private String error;
    private Map<String, String> errores;

    public ErrorResponse(int status, String error, Map<String, String> errores) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.error = error;
        this.errores = errores;
    }

    // getters
    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public int getStatus() {
        return status;
    }

    public String getError() {
        return error;
    }

    public Map<String, String> getErrores() {
        return errores;
    }
}