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

DROP DATABASE IF EXISTS `sinapsisdb`;

CREATE DATABASE sinapsisdb;

USE sinapsisdb;

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
-- Table structure for table `diagnostico`
--

DROP TABLE IF EXISTS `diagnostico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostico` (
  `iddiagnostico` int NOT NULL AUTO_INCREMENT,
  `nombreIniciativa` varchar(300) DEFAULT NULL,
  `idea` varchar(300) DEFAULT NULL,
  `necesidad` varchar(300) DEFAULT NULL,
  `cliente` varchar(300) DEFAULT NULL,
  `desValidaciones` varchar(300) DEFAULT NULL,
  `instrumentoValidacion` varchar(45) DEFAULT NULL,
  `tipoEmprendimiento` varchar(45) DEFAULT NULL,
  `tipoEconomia` varchar(45) DEFAULT NULL,
  `idEmpDiag` varchar(15) DEFAULT NULL,
  `revisado` int DEFAULT '0',
  `archivoDiagnostico` blob,
  PRIMARY KEY (`iddiagnostico`),
  KEY `fk_cedula_idx` (`idEmpDiag`),
  KEY `fk_cedula_10245` (`idEmpDiag`),
  CONSTRAINT `fk_cedula_10245` FOREIGN KEY (`idEmpDiag`) REFERENCES `emprendedor` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `fk_cedulaEm` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `fk_idEmprenME` FOREIGN KEY (`idEmprenME`) REFERENCES `emprendedor` (`cedula`),
  CONSTRAINT `fk_idMentorME` FOREIGN KEY (`idMentorME`) REFERENCES `mentor` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-29 15:26:08
