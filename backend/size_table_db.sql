-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Ned 03. bře 2024, 15:14
-- Verze serveru: 10.4.32-MariaDB
-- Verze PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `size_table_db`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order_status` varchar(50) DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `order_date`, `order_status`, `total_amount`) VALUES
(1, 1, '2024-02-01 09:00:00', 'Нове', 799.98),
(2, 2, '2024-02-02 14:30:00', 'В обробці', 199.99),
(3, 3, '2024-02-03 11:45:00', 'Доставлено', 599.99);

-- --------------------------------------------------------

--
-- Struktura tabulky `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 2),
(2, 2, 1, 1),
(3, 3, 2, 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `products`
--

INSERT INTO `products` (`product_id`, `name`, `brand`, `description`, `price`, `size`, `category`) VALUES
(1, 'Футболка Basic', 'BrandA', 'Зручна чоловіча футболка', 199.99, 'M', 'Одяг'),
(2, 'Джинси Classic', 'BrandB', 'Стандартні чоловічі джинси', 599.99, '32', 'Одяг'),
(3, 'Сукня Summer', 'BrandC', 'Літня сукня для жінок', 799.99, 'S', 'Одяг');

-- --------------------------------------------------------

--
-- Struktura tabulky `shoe_sizes`
--

CREATE TABLE `shoe_sizes` (
  `ID` int(11) NOT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Brand` varchar(50) DEFAULT NULL,
  `European_Size` int(11) DEFAULT NULL,
  `American_Size` int(11) DEFAULT NULL,
  `UK_Size` int(11) DEFAULT NULL,
  `Foot_Length` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `shoe_sizes`
--

INSERT INTO `shoe_sizes` (`ID`, `Gender`, `Brand`, `European_Size`, `American_Size`, `UK_Size`, `Foot_Length`) VALUES
(8, 'Female', 'Nike', 35, 5, NULL, 22.5),
(9, 'Female', 'Adidas', 36, 6, NULL, 23.4),
(10, 'Female', 'Puma', 37, 7, NULL, 24),
(11, 'Male', 'Nike', 39, 6, 5, 25.3),
(12, 'Male', 'Adidas', 40, 7, 6, 25.8),
(13, 'Child', 'Nike', NULL, NULL, NULL, 8.6),
(14, 'Child', 'Adidas', NULL, NULL, NULL, 9.3);

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'Іван Іваненко', 'ivan@example.com', 'password1'),
(2, 'Петро Петренко', 'petro@example.com', 'password2'),
(3, 'Олена Олененко', 'olena@example.com', 'password3');

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexy pro tabulku `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexy pro tabulku `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexy pro tabulku `shoe_sizes`
--
ALTER TABLE `shoe_sizes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexy pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `shoe_sizes`
--
ALTER TABLE `shoe_sizes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Omezení pro tabulku `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
