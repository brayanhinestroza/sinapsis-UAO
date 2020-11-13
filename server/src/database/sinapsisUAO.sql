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

CREATE DATABASE `sinapsisdb`;

USE `sinapsisdb`;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (6,'1'),(7,'9');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`iddiagnostico`),
  KEY `fk_cedula_idx` (`idEmpDiag`),
  KEY `fk_cedula_10245` (`idEmpDiag`),
  CONSTRAINT `fk_cedula_10245` FOREIGN KEY (`idEmpDiag`) REFERENCES `emprendedor` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostico`
--

LOCK TABLES `diagnostico` WRITE;
/*!40000 ALTER TABLE `diagnostico` DISABLE KEYS */;
INSERT INTO `diagnostico` VALUES (23,'Prueba','123','1231121','32131231','sadasdas','dasdasdasdasd','Dinamico','Digital','1005943951',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprendedor`
--

LOCK TABLES `emprendedor` WRITE;
/*!40000 ALTER TABLE `emprendedor` DISABLE KEYS */;
INSERT INTO `emprendedor` VALUES (6,'1005943951','2020-11-13','Prueba','Prueba','Masculino','Ingeniera Ambiental'),(7,'123','2020-11-06','301255469831','Calle 1a2','Masculino','Ingenieria Multimedia'),(8,'1234','2020-10-29','301233454698','Calle 12a','Otro','Ingenieria Multimedia');
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
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmentor`),
  KEY `fk_cedulaMe_idx` (`cedula`),
  CONSTRAINT `fk_cedulaMe` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (4,'9999','Juan Esteban'),(6,'123456','Camilo');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_principal`
--

LOCK TABLES `mentor_principal` WRITE;
/*!40000 ALTER TABLE `mentor_principal` DISABLE KEYS */;
INSERT INTO `mentor_principal` VALUES (4,'9999','1005943951'),(5,'9999','123'),(6,'9999','1005943951'),(7,'9999','1005943951'),(8,'9999','1005943951'),(9,'9999','1005943951'),(10,'9999','1005943951'),(12,'9999','1005943951');
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
  `idEmpRuta` varchar(15) NOT NULL,
  `idEtapaRuta` int NOT NULL,
  PRIMARY KEY (`idruta`),
  KEY `fk_idEmpRuta_idx` (`idEmpRuta`),
  KEY `fk_idEtapaRuta_idx` (`idEtapaRuta`),
  CONSTRAINT `fk_idEmprendedor` FOREIGN KEY (`idEmpRuta`) REFERENCES `emprendedor` (`cedula`),
  CONSTRAINT `fk_idEtapaRuta` FOREIGN KEY (`idEtapaRuta`) REFERENCES `etapa` (`idetapa`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` VALUES (1,'1005943951',1),(2,'1005943951',1),(3,'123',2),(4,'1005943951',1),(5,'1005943951',1),(6,'1005943951',1),(7,'1005943951',1),(8,'1005943951',1),(14,'1005943951',1);
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;
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
INSERT INTO `usuarios` VALUES ('1','admin','admin','202cb962ac59075b964b07152d234b70','Administrador',1),('1005943951','Brayan','brayan.hinestroza@uao.edu.co','202cb962ac59075b964b07152d234b70','Emprendedor',1),('123','Juan','juan@uao.edu.co','81dc9bdb52d04dc20036dbd8313ed055','Emprendedor',1),('1234','Daniel','Daniel@uao.edu.co','202cb962ac59075b964b07152d234b70','Emprendedor',1),('123456','Mentor','mentor@gmail.com','202cb962ac59075b964b07152d234b70','Mentor',0),('9','Prueba','Prueba','202cb962ac59075b964b07152d234b70','Administrador',0),('9999','Juan Esteban','juan@uao.edu.co','202cb962ac59075b964b07152d234b70','Mentor',0);
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

-- Dump completed on 2020-11-13 12:54:31
