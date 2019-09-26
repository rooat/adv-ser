-- MySQL dump 10.13  Distrib 5.7.25, for osx10.14 (x86_64)
--
-- Host: localhost    Database: adv_db
-- ------------------------------------------------------
-- Server version	5.7.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advdatas`
--

DROP TABLE IF EXISTS `advdatas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ad_board_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_id` int(11) NOT NULL ,
  `parent_id` int(11) NOT NULL,
  `owner_address` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `deposit` varchar(100) NOT NULL,
  `last_tax_pay_timestamp` varchar(100) NOT NULL,
  `content` text(50) NOT NULL,
  `taxRate` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `advdatas`
--

LOCK TABLES `advdatas` WRITE;
/*!40000 ALTER TABLE `advdatas` DISABLE KEYS */;
INSERT INTO `advdatas` VALUES (78,'0x52dfb0bf4b4b72c3067c23866146f9a5bf75bf6d','21.6','1560596786105','Get well soon.'),(79,'0x52dfb0bf4b4b72c3067c23866146f9a5bf75bf6a','11.2','1560596786105','hello hello hello'),(80,'0x52dfb0bf4b4b72c3067c23866146f9a5bf75bfdd','13.2','1560596786105','shello hello hello');
/*!40000 ALTER TABLE `advdatas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-17 14:36:38
