-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: sinapsisdb
-- ------------------------------------------------------
-- Server version	8.0.19

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
  CONSTRAINT `fk_cedulaAd` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (12,'99999');
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
  `nombreConsultoria` varchar(45) NOT NULL,
  `asuntoConsultoria` varchar(45) NOT NULL,
  `fechaConsultoria` date NOT NULL,
  `comentarioConsultoria` varchar(45) DEFAULT NULL,
  `idEmpConsultoria` varchar(45) NOT NULL,
  `idMentorConsultoria` varchar(45) NOT NULL,
  `horaInicio` time DEFAULT NULL,
  `horaFin` time DEFAULT NULL,
  PRIMARY KEY (`idConsultoria`),
  KEY `idEmpConsultoria_idx` (`idEmpConsultoria`),
  KEY `idMentorConsultoria_idx` (`idMentorConsultoria`),
  CONSTRAINT `idEmpConsultoria` FOREIGN KEY (`idEmpConsultoria`) REFERENCES `emprendedor` (`cedula`),
  CONSTRAINT `idMentorConsultoria` FOREIGN KEY (`idMentorConsultoria`) REFERENCES `mentor` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `programa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddiagnostico`),
  UNIQUE KEY `idEmpDiag_UNIQUE` (`idEmpDiag`),
  KEY `fk_cedula_idx` (`idEmpDiag`),
  KEY `fk_cedula_10245` (`idEmpDiag`),
  CONSTRAINT `fk_cedula_10245` FOREIGN KEY (`idEmpDiag`) REFERENCES `emprendedor` (`cedula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostico`
--

LOCK TABLES `diagnostico` WRITE;
/*!40000 ALTER TABLE `diagnostico` DISABLE KEYS */;
INSERT INTO `diagnostico` VALUES (28,'Prueba','Prueba','Prueba','Prueba','Prueba','Prueba','Dinamico','Digital','777777',1,NULL,'Estudiante',NULL);
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
  `ciudad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idemprendedor`),
  KEY `fk_cedulaEm_idx` (`cedula`),
  CONSTRAINT `fk_cedulaEm` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprendedor`
--

LOCK TABLES `emprendedor` WRITE;
/*!40000 ALTER TABLE `emprendedor` DISABLE KEYS */;
INSERT INTO `emprendedor` VALUES (23,'777777','2020-11-11','12345','Prueba','Femenino','Ingeniera Ambiental','Prueba'),(24,'7777777',NULL,NULL,NULL,NULL,NULL,NULL),(26,'777777777',NULL,NULL,NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etapa`
--

LOCK TABLES `etapa` WRITE;
/*!40000 ALTER TABLE `etapa` DISABLE KEYS */;
INSERT INTO `etapa` VALUES (1,'Soñar'),(2,'Pensar'),(3,'Testear'),(4,'Arrancar');
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
  PRIMARY KEY (`idmentor`),
  KEY `fk_cedulaMe_idx` (`cedula`),
  CONSTRAINT `fk_cedulaMe` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (8,'88888');
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_emprendedor`
--

DROP TABLE IF EXISTS `mentor_emprendedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor_emprendedor` (
  `idmentor_emprendedor` int NOT NULL AUTO_INCREMENT,
  `idMentorME` varchar(45) DEFAULT NULL,
  `idEmprenME` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmentor_emprendedor`),
  KEY `fk_idMentorME_idx` (`idMentorME`),
  KEY `fk_idEmprenME_idx` (`idEmprenME`),
  CONSTRAINT `fk_idEmprenME` FOREIGN KEY (`idEmprenME`) REFERENCES `emprendedor` (`cedula`) ON DELETE CASCADE,
  CONSTRAINT `fk_idMentorME` FOREIGN KEY (`idMentorME`) REFERENCES `mentor` (`cedula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_emprendedor`
--

LOCK TABLES `mentor_emprendedor` WRITE;
/*!40000 ALTER TABLE `mentor_emprendedor` DISABLE KEYS */;
INSERT INTO `mentor_emprendedor` VALUES (4,'88888','777777');
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
  CONSTRAINT `fk_idEmprenMP` FOREIGN KEY (`idEmprenMP`) REFERENCES `emprendedor` (`cedula`) ON DELETE CASCADE,
  CONSTRAINT `fk_idMentorMP` FOREIGN KEY (`idMentorMP`) REFERENCES `mentor` (`cedula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_principal`
--

LOCK TABLES `mentor_principal` WRITE;
/*!40000 ALTER TABLE `mentor_principal` DISABLE KEYS */;
INSERT INTO `mentor_principal` VALUES (17,'88888','777777');
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
  `idEmpRuta` varchar(45) NOT NULL,
  `idEtapaRuta` int NOT NULL,
  PRIMARY KEY (`idruta`),
  KEY `fk_idEmpRuta_idx` (`idEmpRuta`),
  KEY `fk_idEtapaRuta_idx` (`idEtapaRuta`),
  CONSTRAINT `fk_idEmpRuta` FOREIGN KEY (`idEmpRuta`) REFERENCES `emprendedor` (`cedula`) ON DELETE CASCADE,
  CONSTRAINT `fk_idEtapaRuta` FOREIGN KEY (`idEtapaRuta`) REFERENCES `etapa` (`idetapa`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` VALUES (32,'777777',1);
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
  `fechaTarea` datetime DEFAULT NULL,
  `fechaEntrega` date DEFAULT NULL,
  `entregada` int DEFAULT '0',
  `comentario` varchar(100) DEFAULT NULL,
  `idEtapaTarea` int DEFAULT NULL,
  `idEmpTarea` varchar(45) DEFAULT NULL,
  `idMenTarea` varchar(45) DEFAULT NULL,
  `archivoM` blob,
  `ArchivoE` blob,
  `Revisada` int DEFAULT '0',
  PRIMARY KEY (`idTarea`),
  KEY `idEmpEtapa_idx` (`idEmpTarea`),
  KEY `idMenEtapa_idx` (`idMenTarea`),
  KEY `idEtapaTarea_idx` (`idEtapaTarea`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
INSERT INTO `usuarios` VALUES ('777777','Daniel Hoyos','Daniel_hoyos@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',1),('7777777','Juan Esteban','Juan_Esteban@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',1),('777777777','Brayan Hinestroza','Brayan_Hinestroza@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',0),('88888','Mentor','mentor@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Mentor',0),('99999','Admin','admin@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Administrador',1);
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

-- Dump completed on 2020-11-30 20:38:34
