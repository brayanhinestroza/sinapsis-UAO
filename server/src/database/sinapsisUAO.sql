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

CREATE IF NOT EXISTS DATABASE sinapsisdb;

USE sinapsisdb;

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `idadministrador` int NOT NULL AUTO_INCREMENT,
  `cedulaAd` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idadministrador`),
  KEY `fk_cedulaAd_idx` (`cedulaAd`),
  CONSTRAINT `fk_cedulaAd` FOREIGN KEY (`cedulaAd`) REFERENCES `usuario` (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostico`
--

DROP TABLE IF EXISTS `diagnostico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostico` (
  `iddiagnostico` int NOT NULL,
  `nombreIniciativa` varchar(300) NOT NULL,
  `idea` varchar(300) NOT NULL,
  `necesidad` varchar(300) NOT NULL,
  `cliente` varchar(300) NOT NULL,
  `desValidaciones` varchar(300) NOT NULL,
  `instrumentoValidacion` varchar(45) NOT NULL,
  `tiopEmprendimiento` varchar(45) DEFAULT NULL,
  `tipoEconomia` varchar(45) DEFAULT NULL,
  `idEmpDiag` int DEFAULT NULL,
  KEY `fk_idEmpDiag_idx` (`idEmpDiag`),
  CONSTRAINT `fk_idEmpDiag` FOREIGN KEY (`idEmpDiag`) REFERENCES `emprendedor` (`idemprendedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostico`
--

LOCK TABLES `diagnostico` WRITE;
/*!40000 ALTER TABLE `diagnostico` DISABLE KEYS */;
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
  `cedulaEm` varchar(45) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `celular` varchar(45) NOT NULL,
  `dirección` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `programa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idemprendedor`),
  KEY `fk_cedulaem_idx` (`cedulaEm`),
  CONSTRAINT `fk_cedulaem` FOREIGN KEY (`cedulaEm`) REFERENCES `usuario` (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprendedor`
--

LOCK TABLES `emprendedor` WRITE;
/*!40000 ALTER TABLE `emprendedor` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etapa`
--

LOCK TABLES `etapa` WRITE;
/*!40000 ALTER TABLE `etapa` DISABLE KEYS */;
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
  `cedulaMe` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmentor`),
  KEY `fk_cedulaMe_idx` (`cedulaMe`),
  CONSTRAINT `fk_cedulaMe` FOREIGN KEY (`cedulaMe`) REFERENCES `usuario` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (1,'123');
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
  `idMentorMP` int DEFAULT NULL,
  `idEmprenMP` int DEFAULT NULL,
  PRIMARY KEY (`idmentor_principal`),
  KEY `fk_idMentorMP_idx` (`idMentorMP`),
  KEY `fk_idEmprenMP_idx` (`idEmprenMP`),
  CONSTRAINT `fk_idEmprenMP` FOREIGN KEY (`idEmprenMP`) REFERENCES `emprendedor` (`idemprendedor`),
  CONSTRAINT `fk_idMentorMP` FOREIGN KEY (`idMentorMP`) REFERENCES `mentor` (`idmentor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_principal`
--

LOCK TABLES `mentor_principal` WRITE;
/*!40000 ALTER TABLE `mentor_principal` DISABLE KEYS */;
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
  `idEmpRuta` int NOT NULL,
  `idEtapaRuta` int NOT NULL,
  PRIMARY KEY (`idruta`),
  KEY `fk_idEmpRuta_idx` (`idEmpRuta`),
  KEY `fk_idEtapaRuta_idx` (`idEtapaRuta`),
  CONSTRAINT `fk_idEmpRuta` FOREIGN KEY (`idEmpRuta`) REFERENCES `emprendedor` (`idemprendedor`),
  CONSTRAINT `fk_idEtapaRuta` FOREIGN KEY (`idEtapaRuta`) REFERENCES `etapa` (`idetapa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `cedula` varchar(15) NOT NULL,
  `nombreCompleto` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `tipoUsuario` int DEFAULT NULL,
  `estado` int DEFAULT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('123','Sebastian','sebas@gmail.com','1234',1,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-28 13:44:28
