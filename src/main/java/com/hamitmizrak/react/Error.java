package com.hamitmizrak.react;

import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
public class Error {

    private String message;
    private String path;
    private int status;
    private long timestamp = new Date().getTime();

    private Map<String, String> validationError;

    public Error(int status, String message, String path) {
        this.status = status;
        this.message = message;
        this.path = path;
    }

}
