package com.javaboy;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.javaboy.mapper")
public class VhrfromzeroApplication {

	public static void main(String[] args) {
		SpringApplication.run(VhrfromzeroApplication.class, args);
	}

}
