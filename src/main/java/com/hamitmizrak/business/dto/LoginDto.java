package com.hamitmizrak.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2

// NEMM :  @NotEmpty @Email @Min @Max @Size
public class LoginDto {

    //@NotEmpty(message = "adı alanını boş geçemezsiniz")
    //@Size(min=1,max=250)
    private String username;

    @NotEmpty(message = "email alanını boş geçemezsiniz")
    @Email(message = "uygun formatta mail giriniz")
    private String emailaddres;

//    @Min(value=8,message = "8 sayısından küçük ")
//    @Max(value=15,message = "15 yaşından büyük")
    private String password;
}
