-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sinapsisdb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `idadministrador` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idadministrador`),
  KEY `fk_cedulaAd_idx` (`cedula`),
  CONSTRAINT `fk_cedulaAd` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `administrador` VALUES (6,'1'),(7,'9'),(8,'99999'),(9,'999999');
=======
INSERT INTO `administrador` VALUES (12,'99999');
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultoria`
--

DROP TABLE IF EXISTS `consultoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultoria` (
  `idConsultoria` int NOT NULL AUTO_INCREMENT,
  `nombreConsultoria` varchar(45) DEFAULT NULL,
  `asuntoConsultoria` varchar(45) DEFAULT NULL,
  `fechaConsultoria` date DEFAULT NULL,
  `comentarioConsultoria` varchar(45) DEFAULT NULL,
  `idEmpConsultoria` int DEFAULT NULL,
  `idMentorConsultoria` int DEFAULT NULL,
  PRIMARY KEY (`idConsultoria`),
  KEY `idEmpConsultoria_idx` (`idEmpConsultoria`),
  KEY `idMentorConsultoria_idx` (`idMentorConsultoria`),
  CONSTRAINT `idEmpConsultoria` FOREIGN KEY (`idEmpConsultoria`) REFERENCES `emprendedor` (`idemprendedor`),
  CONSTRAINT `idMentorConsultoria` FOREIGN KEY (`idMentorConsultoria`) REFERENCES `mentor` (`idmentor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultoria`
--

LOCK TABLES `consultoria` WRITE;
/*!40000 ALTER TABLE `consultoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostico`
--

DROP TABLE IF EXISTS `diagnostico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostico` (
  `iddiagnostico` int NOT NULL AUTO_INCREMENT,
  `nombreIniciativa` varchar(100) DEFAULT NULL,
  `idea` varchar(500) DEFAULT NULL,
  `necesidad` varchar(500) DEFAULT NULL,
  `cliente` varchar(500) DEFAULT NULL,
  `desValidaciones` varchar(500) DEFAULT NULL,
  `instrumentoValidacion` varchar(300) DEFAULT NULL,
  `tipoEmprendimiento` varchar(20) DEFAULT NULL,
  `tipoEconomia` varchar(20) DEFAULT NULL,
  `idEmpDiag` varchar(45) NOT NULL,
  `revisado` int DEFAULT '0',
  `archivoDiagnostico` blob,
  `vinculoConU` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddiagnostico`),
  UNIQUE KEY `idEmpDiag_UNIQUE` (`idEmpDiag`),
  KEY `fk_cedula_idx` (`idEmpDiag`),
  KEY `fk_cedula_10245` (`idEmpDiag`),
  CONSTRAINT `fk_cedula_10245` FOREIGN KEY (`idEmpDiag`) REFERENCES `emprendedor` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostico`
--

LOCK TABLES `diagnostico` WRITE;
/*!40000 ALTER TABLE `diagnostico` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `diagnostico` VALUES (23,'Prueba','123','1231121','32131231','sadasdas','dasdasdasdasd','Dinamico','Digital','1005943951',0,NULL),(24,'Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Alto Impacto','Creativo y Cultural','123123123',1,NULL),(25,'Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Lorem ipsum dolor sit ame','Dinamico','Digital','567890',1,NULL);
=======
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `diagnostico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprendedor`
--

DROP TABLE IF EXISTS `emprendedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprendedor` (
  `idemprendedor` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `celular` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `genero` varchar(45) DEFAULT NULL,
  `programa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idemprendedor`),
  KEY `fk_cedulaEm_idx` (`cedula`),
  CONSTRAINT `fk_cedulaEm` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`)
<<<<<<< Updated upstream
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
=======
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
>>>>>>> Stashed changes
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprendedor`
--

LOCK TABLES `emprendedor` WRITE;
/*!40000 ALTER TABLE `emprendedor` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `emprendedor` VALUES (6,'1005943951','2020-11-13','Prueba','Prueba','Masculino','Ingeniera Ambiental'),(7,'123','2020-11-06','301255469831','Calle 1a2','Masculino','Ingenieria Multimedia'),(8,'1234','2020-10-29','301233454698','Calle 12a','Otro','Ingenieria Multimedia'),(16,'9090',NULL,NULL,NULL,NULL,NULL),(18,'123123123','2020-11-20','3125652342','Lorem ipsum dolor ','Femenino','Ingeniera Ambiental'),(19,'567890','2020-12-04','3125652342','Lorem ipsum dolor sit ame','Femenino','Ingeniera Ambiental'),(20,'54321',NULL,NULL,NULL,NULL,NULL);
=======
INSERT INTO `emprendedor` VALUES (22,'77777','2020-10-26','12345','Prueba','Masculino','Ingenieria Multimedia','Prueba'),(23,'777777',NULL,NULL,NULL,NULL,NULL,NULL),(24,'7777777',NULL,NULL,NULL,NULL,NULL,NULL),(25,'77777777',NULL,NULL,NULL,NULL,NULL,NULL),(26,'777777777',NULL,NULL,NULL,NULL,NULL,NULL);
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `emprendedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etapa`
--

DROP TABLE IF EXISTS `etapa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etapa` (
  `idetapa` int NOT NULL AUTO_INCREMENT,
  `etapa` varchar(45) NOT NULL,
  PRIMARY KEY (`idetapa`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etapa`
--

LOCK TABLES `etapa` WRITE;
/*!40000 ALTER TABLE `etapa` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `etapa` VALUES (1,'Soñar'),(2,'Pensar'),(3,'Testear'),(4,'Arrancar');
=======
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `etapa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor` (
  `idmentor` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmentor`),
  KEY `fk_cedulaMe_idx` (`cedula`),
  CONSTRAINT `fk_cedulaMe` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`)
<<<<<<< Updated upstream
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
=======
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
>>>>>>> Stashed changes
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `mentor` VALUES (4,'9999','Juan Esteban'),(6,'123456','Camilo');
=======
INSERT INTO `mentor` VALUES (8,'88888',NULL);
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_emprendedor`
--

DROP TABLE IF EXISTS `mentor_emprendedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor_emprendedor` (
  `idmentor_emprendedor` int NOT NULL,
  `idMentorME` int DEFAULT NULL,
  `idEmprenME` int DEFAULT NULL,
  PRIMARY KEY (`idmentor_emprendedor`),
  KEY `fk_idMentorME_idx` (`idMentorME`),
  KEY `fk_idEmprenME_idx` (`idEmprenME`),
  CONSTRAINT `fk_idEmprenME` FOREIGN KEY (`idEmprenME`) REFERENCES `emprendedor` (`idemprendedor`),
  CONSTRAINT `fk_idMentorME` FOREIGN KEY (`idMentorME`) REFERENCES `mentor` (`idmentor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_emprendedor`
--

LOCK TABLES `mentor_emprendedor` WRITE;
/*!40000 ALTER TABLE `mentor_emprendedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `mentor_emprendedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_principal`
--

DROP TABLE IF EXISTS `mentor_principal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor_principal` (
  `idmentor_principal` int NOT NULL AUTO_INCREMENT,
  `idMentorMP` varchar(45) DEFAULT NULL,
  `idEmprenMP` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idmentor_principal`),
  KEY `fk_idEmprenMP_idx` (`idEmprenMP`),
  KEY `fk_idMentorMP_idx` (`idMentorMP`),
  CONSTRAINT `fk_idEmprenMP` FOREIGN KEY (`idEmprenMP`) REFERENCES `emprendedor` (`cedula`),
  CONSTRAINT `fk_idMentorMP` FOREIGN KEY (`idMentorMP`) REFERENCES `mentor` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_principal`
--

LOCK TABLES `mentor_principal` WRITE;
/*!40000 ALTER TABLE `mentor_principal` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `mentor_principal` VALUES (4,'9999','1005943951'),(5,'9999','123'),(6,'9999','1005943951'),(7,'9999','1005943951'),(8,'9999','1005943951'),(9,'9999','1005943951'),(10,'9999','1005943951'),(12,'9999','1005943951'),(13,'9999','123123123'),(14,'9999','567890');
=======
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `mentor_principal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruta`
--

DROP TABLE IF EXISTS `ruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruta` (
  `idruta` int NOT NULL AUTO_INCREMENT,
  `idEmpRuta` int DEFAULT NULL,
  `idEtapaRuta` int DEFAULT NULL,
  PRIMARY KEY (`idruta`),
  KEY `fk_idEmpRuta_idx` (`idEmpRuta`),
  KEY `fk_idEtapaRuta_idx` (`idEtapaRuta`),
  CONSTRAINT `fk_idEtapaRuta` FOREIGN KEY (`idEtapaRuta`) REFERENCES `etapa` (`idetapa`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `ruta` VALUES (1,1005943951,1),(2,1005943951,1),(3,123,2),(4,1005943951,1),(5,1005943951,1),(6,1005943951,1),(7,1005943951,1),(8,1005943951,1),(14,1005943951,1),(16,16,1),(17,123123123,2),(18,567890,3);
=======
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarea`
--

DROP TABLE IF EXISTS `tarea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarea` (
  `idTarea` int NOT NULL AUTO_INCREMENT,
  `nombreTarea` varchar(45) DEFAULT NULL,
  `descripcionTarea` varchar(100) DEFAULT NULL,
  `fechaTarea` varchar(45) DEFAULT NULL,
  `entregada` int DEFAULT '0',
  `comentario` varchar(100) DEFAULT NULL,
  `idEtapaTarea` int DEFAULT NULL,
  `idEmpTarea` int DEFAULT NULL,
  `idMenTarea` int DEFAULT NULL,
  `archivoM` blob,
  `ArchivoE` blob,
  `Revisada` int DEFAULT '0',
  PRIMARY KEY (`idTarea`),
  KEY `idEmpEtapa_idx` (`idEmpTarea`),
  KEY `idMenEtapa_idx` (`idMenTarea`),
  KEY `idEtapaTarea_idx` (`idEtapaTarea`),
  CONSTRAINT `idEmpTarea` FOREIGN KEY (`idEmpTarea`) REFERENCES `emprendedor` (`idemprendedor`),
  CONSTRAINT `idEtapaTarea` FOREIGN KEY (`idEtapaTarea`) REFERENCES `etapa` (`idetapa`),
  CONSTRAINT `idMenTarea` FOREIGN KEY (`idMenTarea`) REFERENCES `mentor` (`idmentor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarea`
--

LOCK TABLES `tarea` WRITE;
/*!40000 ALTER TABLE `tarea` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `cedula` varchar(15) NOT NULL,
  `nombreCompleto` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `tipoUsuario` varchar(45) DEFAULT NULL,
  `estado` int DEFAULT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
<<<<<<< Updated upstream
INSERT INTO `usuarios` VALUES ('1','admin','admin','202cb962ac59075b964b07152d234b70','Administrador',1),('1005943951','Brayan','brayan.hinestroza@uao.edu.co','202cb962ac59075b964b07152d234b70','Emprendedor',1),('123','Juan','juan@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',1),('123123123','Epson Cortes','epson@gmail.com','25d55ad283aa400af464c76d713c07ad','Emprendedor',0),('1234','Daniel','Daniel@uao.edu.co','202cb962ac59075b964b07152d234b70','Emprendedor',1),('123456','Mentor','mentor@gmail.com','202cb962ac59075b964b07152d234b70','Mentor',0),('54321','luis','sebas@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Emprendedor',0),('567890','Daniel Hoyos','daniel@gmail.com','25d55ad283aa400af464c76d713c07ad','Emprendedor',0),('9','Prueba','Prueba','202cb962ac59075b964b07152d234b70','Administrador',1),('9090','Sinis',NULL,NULL,NULL,NULL),('9999','Juan Esteban','juan@uao.edu.co','202cb962ac59075b964b07152d234b70','Mentor',0),('99999','Administrador','admind@gmail.com','12345678','administrador',1),('999999','Admin','admin2@gmail.com','25d55ad283aa400af464c76d713c07ad','Administrador',1);
=======
INSERT INTO `usuarios` VALUES ('77777','Emprendedor','emprnededor@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',0),('777777','Daniel Hoyos','Daniel_hoyos@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',1),('7777777','Juan Esteban','Juan_Esteban@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',1),('77777777','Juan Sebastian','Juan_Sebastian@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',0),('777777777','Brayan Hinestroza','Brayan_Hinestroza@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',0),('88888','Mentor','mentor@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Mentor',0),('99999','Admin','admin@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Administrador',1);
>>>>>>> Stashed changes
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

<<<<<<< Updated upstream
-- Dump completed on 2020-11-27 20:16:42
=======
-- Dump completed on 2020-11-30  9:29:53
>>>>>>> Stashed changes
