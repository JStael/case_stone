
CREATE DATABASE marvel_stone;
USE marvel_stone;

CREATE TABLE `historia_quadrinhos` (
  `hqs_id` int unsigned NOT NULL AUTO_INCREMENT,
  `hqs_titulo` varchar(255) NOT NULL,
  `hqs_descricao` text,
  `hqs_img` varchar(255) DEFAULT NULL,
  `hqs_status` tinyint NOT NULL DEFAULT '1',
  `hqs_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hqs_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`hqs_id`),
  UNIQUE KEY `hqs_id_UNIQUE` (`hqs_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `personagens` (
  `per_id` int unsigned NOT NULL AUTO_INCREMENT,
  `per_nome` varchar(100) NOT NULL,
  `per_descricao` text,
  `per_img` varchar(255) DEFAULT NULL,
  `per_status` tinyint NOT NULL DEFAULT '1',
  `per_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `per_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`per_id`),
  UNIQUE KEY `per_id_UNIQUE` (`per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuarios` (
  `usu_id` int unsigned NOT NULL AUTO_INCREMENT,
  `usu_nome` varchar(30) DEFAULT NULL,
  `usu_sobrenome` varchar(45) DEFAULT NULL,
  `usu_email` varchar(100) NOT NULL,
  `usu_senha` varchar(255) NOT NULL,
  `usu_status` tinyint(1) DEFAULT '1',
  `usu_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usu_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usu_id`),
  UNIQUE KEY `usu_id_UNIQUE` (`usu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuarios_historia_quadrinhos` (
  `uhq_id` int unsigned NOT NULL AUTO_INCREMENT,
  `uhq_id_usuarios` int unsigned NOT NULL,
  `uhq_id_historia_quadrinhos` int unsigned NOT NULL,
  `uhq_status` tinyint(1) NOT NULL DEFAULT '1',
  `uhq_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uhq_id`),
  KEY `usuarios_historia_quadrinhos_fk1_idx` (`uhq_id_usuarios`),
  KEY `usuarios_historia_quadrinhos_fk2_idx` (`uhq_id_historia_quadrinhos`),
  CONSTRAINT `usuarios_historia_quadrinhos_fk1` FOREIGN KEY (`uhq_id_usuarios`) REFERENCES `usuarios` (`usu_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `usuarios_historia_quadrinhos_fk2` FOREIGN KEY (`uhq_id_historia_quadrinhos`) REFERENCES `historia_quadrinhos` (`hqs_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuarios_personagens` (
  `upe_id` int unsigned NOT NULL AUTO_INCREMENT,
  `upe_id_usuarios` int unsigned NOT NULL,
  `upe_id_personagens` int unsigned NOT NULL,
  `upe_status` tinyint NOT NULL DEFAULT '1',
  `upe_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`upe_id`),
  KEY `usuarios_personagens_fk1_idx` (`upe_id_usuarios`),
  KEY `usuarios_personagens_fk2_idx` (`upe_id_personagens`),
  CONSTRAINT `usuarios_personagens_fk1` FOREIGN KEY (`upe_id_usuarios`) REFERENCES `usuarios` (`usu_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `usuarios_personagens_fk2` FOREIGN KEY (`upe_id_personagens`) REFERENCES `personagens` (`per_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


