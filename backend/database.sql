-- MySQL Script generated by MySQL Workbench
-- Wed Jul 20 10:22:17 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio`.`category`;
DROP TABLE IF EXISTS `portfolio`.`project`;


-- -----------------------------------------------------
-- Table `portfolio`.`profil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`profil` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NULL,
  `parcours` TEXT NULL,
  `description` TEXT NULL,
  `objectif` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `portfolio`.`profil` (`image`, `parcours`, `description`, `objectif`) 
VALUES
('https://i.ibb.co/N63f954/290780516-2958180501140097-3639419242792474478-n.jpg',
'test',
'test',
'test')
;

-- -----------------------------------------------------
-- Table `portfolio`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO
`category` (`category`)
VALUES
('Projet personel'),
('Projet professionnel'),
('Projet ecole')
;
-- -----------------------------------------------------
-- Table `portfolio`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `description` TEXT NULL,
  `image` VARCHAR(255) NULL,
  `repot` VARCHAR(255) NULL,
  `date` DATE NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  INDEX `fk_project_category_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `portfolio`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
INSERT INTO `portfolio`.`project` (`title`,`description`,`image`,`repot`,`date`,`category_id`)
VALUES
('Projet 2 earthKeeper','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','https://i.ibb.co/FsWHpb4/earthkeeper.png','https://github.com/WildCodeSchool/2022-03-RemoteJS-Erreur404-miditrente','2022-05-09',3)
;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
