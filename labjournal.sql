-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2017 at 12:57 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `labjournal`
--

-- --------------------------------------------------------

--
-- Table structure for table `experiment`
--

CREATE TABLE `experiment` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experiment`
--

INSERT INTO `experiment` (`id`, `description`, `name`, `project_id`) VALUES
(1, 'We will need a tiny razor', 'Shaving papa smurf', 2),
(2, 'We need to find more smurfberries', 'Applying smurfberry jam', 2),
(3, 'We are already bored', 'Going clothes shopping with smurfette', 2);

-- --------------------------------------------------------

--
-- Table structure for table `operation`
--

CREATE TABLE `operation` (
  `id` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `instrument` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `person` varchar(255) DEFAULT NULL,
  `settings` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `experiment_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operation`
--

INSERT INTO `operation` (`id`, `comment`, `instrument`, `location`, `person`, `settings`, `time`, `experiment_id`) VALUES
(1, 'applying shaving foam', 'shaving foam', 'n/a', 'Baltazar', 'fluffy', NULL, 1),
(2, 'trying to shave papa smurf', 'tiny razor', 'n/a', 'Willie', 'sharp but small', NULL, 1),
(3, 'applying aftershave', 'Old Spice', 'n/a', 'Gargamel', 'just a drop will do', NULL, 1),
(4, 'Picking smurfberries', 'your hands', 'n/a', 'Everyone!', 'quick and nimble', NULL, 2),
(5, 'Washing jam pots', 'diswasher', 'n/a', 'Willie', 'high temperature', NULL, 2),
(6, 'washing smurf berries', 'sink', 'n/a', 'Willie', 'cold water', NULL, 2),
(7, 'brewing jam', 'couldron', 'n/a', 'Little Chef', 'over the fire, with a lot of sugar', NULL, 2),
(8, 'Feeding jam to smurfs', 'spoon', 'n/a', 'Baltazaar', 'tiny and shiny', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `comment`, `name`) VALUES
(1, 'Superwillans are on the rise', 'Saving the world'),
(2, 'gargamel needs help to get it done', 'Turning Smurfs into gold'),
(3, 'How many licks does it take to get to the center of a tootsie pop', 'Lollypop quest'),
(4, 'Trying to replicate OZ', 'Giving the Screcrow a brain'),
(5, 'and giving a concert', 'Collecting air-guitars'),
(6, 'or maybe pink', 'Painting the sky blue');

-- --------------------------------------------------------

--
-- Table structure for table `sample`
--

CREATE TABLE `sample` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sample`
--

INSERT INTO `sample` (`id`, `description`, `name`, `project_id`) VALUES
(1, 'With a red hat', 'Papa smurf', 2),
(2, 'Careful with the high heels', 'Smurfette', 2),
(3, 'including mirror', 'Vanity', 2),
(4, 'including explosive surprise boxes', 'Jokey smurf', 2),
(5, 'including glasses, books, and ductape on the mouth', 'Brainy', 2),
(6, 'including a pile of diapers', 'Baby smurf', 2),
(7, 'not very super villans', 'Beagle boys', 1),
(8, 'Long nails, bad attitude!', 'Evil step-mother', 1),
(9, 'comes with a hundred dalmatian puppies', 'Cruella de Ville', 1),
(10, 'comes with slep spells and roses', 'Maleficent', 1),
(11, 'hunting for faries', 'Captain Hook', 1),
(12, 'a bad tempered tiger', 'Shir Kahn', 1),
(13, 'malicious', 'Evil step sister', 1),
(14, 'malicious', 'Scary clown', 1),
(15, 'malicious', 'Evil Smureter', 1),
(16, '', 'Rasberry Lollypop', 3),
(17, '', 'Melon Lollypop', 3),
(18, '', 'Grape Lollypop', 3),
(19, '', 'Smuchy Lollypop', 3),
(20, '', 'Scrarecrow', 4),
(21, '', 'Brains', 4),
(22, '', 'diploma', 4);

-- --------------------------------------------------------

--
-- Table structure for table `sample_experiment`
--

CREATE TABLE `sample_experiment` (
  `sample_id` bigint(20) NOT NULL,
  `experiment_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sample_experiment`
--

INSERT INTO `sample_experiment` (`sample_id`, `experiment_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sample_sub_samples`
--

CREATE TABLE `sample_sub_samples` (
  `sample_id` bigint(20) NOT NULL,
  `sub_samples_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sub_sample`
--

CREATE TABLE `sub_sample` (
  `id` bigint(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `danger` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `sample_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_sample`
--

INSERT INTO `sub_sample` (`id`, `amount`, `danger`, `description`, `name`, `unit`, `sample_id`) VALUES
(1, 1, 'do not get it into your eye', 'tiny little hat made red cloth', 'Red hat', 'hat', 1),
(2, 345, 'it itches', 'shaving the beard', 'Beard', 'beard-hair(s)', 1),
(3, 1, 'the feet are dirty', '', 'Red pants', 'pair (of pants)', 1),
(4, 1, 'fragile', 'Harry Potter style', 'Glasses', 'pair (of glasses)', 5),
(5, 315, 'deadly boring', 'written by Brainy. Full of nonsense', 'Books', 'books', 5),
(6, 1, 'do not get it into your eye', 'made of white cloth', 'hat', 'hat', 5);

-- --------------------------------------------------------

--
-- Table structure for table `sub_sample_operation`
--

CREATE TABLE `sub_sample_operation` (
  `sub_sample_id` bigint(20) NOT NULL,
  `operation_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `experiment`
--
ALTER TABLE `experiment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7jrvhtcg9e30kgafpl6nn1c25` (`project_id`);

--
-- Indexes for table `operation`
--
ALTER TABLE `operation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcbtdt5yge09vgjbyquia5fyxe` (`experiment_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sample`
--
ALTER TABLE `sample`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKeytsctv5b8stbijub6yeil5ie` (`project_id`);

--
-- Indexes for table `sample_experiment`
--
ALTER TABLE `sample_experiment`
  ADD KEY `FKtcky2rmdsvj5t8aofydhxgwtt` (`experiment_id`),
  ADD KEY `FKtqn18qmd2r3ytapxtokvttwp4` (`sample_id`);

--
-- Indexes for table `sample_sub_samples`
--
ALTER TABLE `sample_sub_samples`
  ADD UNIQUE KEY `UK_s02946ruvjx9x0x275ie6aa15` (`sub_samples_id`),
  ADD KEY `FKid41xx6a6pm09ua17dt2eytdw` (`sample_id`);

--
-- Indexes for table `sub_sample`
--
ALTER TABLE `sub_sample`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcgefo8pwtglispka688cs85vf` (`sample_id`);

--
-- Indexes for table `sub_sample_operation`
--
ALTER TABLE `sub_sample_operation`
  ADD KEY `FKkv4rl7t24dp38y2i2fdohhoal` (`operation_id`),
  ADD KEY `FKqaf0j5yasu6cdowp4og2equpn` (`sub_sample_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `experiment`
--
ALTER TABLE `experiment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `operation`
--
ALTER TABLE `operation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `sample`
--
ALTER TABLE `sample`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `sub_sample`
--
ALTER TABLE `sub_sample`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `experiment`
--
ALTER TABLE `experiment`
  ADD CONSTRAINT `FK7jrvhtcg9e30kgafpl6nn1c25` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

--
-- Constraints for table `operation`
--
ALTER TABLE `operation`
  ADD CONSTRAINT `FKcbtdt5yge09vgjbyquia5fyxe` FOREIGN KEY (`experiment_id`) REFERENCES `experiment` (`id`);

--
-- Constraints for table `sample`
--
ALTER TABLE `sample`
  ADD CONSTRAINT `FKeytsctv5b8stbijub6yeil5ie` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

--
-- Constraints for table `sample_experiment`
--
ALTER TABLE `sample_experiment`
  ADD CONSTRAINT `FKtcky2rmdsvj5t8aofydhxgwtt` FOREIGN KEY (`experiment_id`) REFERENCES `experiment` (`id`),
  ADD CONSTRAINT `FKtqn18qmd2r3ytapxtokvttwp4` FOREIGN KEY (`sample_id`) REFERENCES `sample` (`id`);

--
-- Constraints for table `sample_sub_samples`
--
ALTER TABLE `sample_sub_samples`
  ADD CONSTRAINT `FKid41xx6a6pm09ua17dt2eytdw` FOREIGN KEY (`sample_id`) REFERENCES `sample` (`id`),
  ADD CONSTRAINT `FKsqc4pfk5x35vki1ur73rfajv` FOREIGN KEY (`sub_samples_id`) REFERENCES `sub_sample` (`id`);

--
-- Constraints for table `sub_sample`
--
ALTER TABLE `sub_sample`
  ADD CONSTRAINT `FKcgefo8pwtglispka688cs85vf` FOREIGN KEY (`sample_id`) REFERENCES `sample` (`id`);

--
-- Constraints for table `sub_sample_operation`
--
ALTER TABLE `sub_sample_operation`
  ADD CONSTRAINT `FKkv4rl7t24dp38y2i2fdohhoal` FOREIGN KEY (`operation_id`) REFERENCES `operation` (`id`),
  ADD CONSTRAINT `FKqaf0j5yasu6cdowp4og2equpn` FOREIGN KEY (`sub_sample_id`) REFERENCES `sub_sample` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
