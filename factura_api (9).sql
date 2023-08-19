-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-08-2023 a las 12:08:51
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `factura_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ayudantes`
--

CREATE TABLE `ayudantes` (
  `id` int(11) NOT NULL,
  `nombreApellido` text NOT NULL,
  `cedula` int(11) NOT NULL,
  `telefono` text NOT NULL,
  `idUsuario` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ayudantes`
--

INSERT INTO `ayudantes` (`id`, `nombreApellido`, `cedula`, `telefono`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(3, 'MICHELDYS NATERA', 18073922, '2222222', 'root', '2023-04-08 15:07:32', '2023-04-08 15:07:32'),
(5, 'leonardo sdsdsd', 18073923, 'ewewe', '', '2023-08-07 23:21:55', '2023-08-07 23:21:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categorias` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `categorias`, `createdAt`, `updatedAt`) VALUES
(1, 'COMPACTADORA', '2023-02-20 18:50:05', '2023-02-20 18:50:05'),
(2, 'SUPERVISORA', '2023-02-20 18:50:05', '2023-02-20 18:50:05'),
(3, 'CISTERNA', '2023-02-20 18:50:49', '2023-02-20 18:50:49'),
(4, 'AUXILIO VIAL', '2023-02-20 18:50:49', '2023-02-20 18:50:49'),
(27, 'JEFE DE CONTRATO', '2023-02-20 19:17:12', '2023-02-20 19:17:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `choferes`
--

CREATE TABLE `choferes` (
  `id` int(11) NOT NULL,
  `nombreApellido` text NOT NULL,
  `cedula` int(11) NOT NULL,
  `telefono` text NOT NULL,
  `idUsuario` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `choferes`
--

INSERT INTO `choferes` (`id`, `nombreApellido`, `cedula`, `telefono`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(3, 'PEDRO PEREZ', 123654, '65656565', 'root', '2023-08-07 23:11:13', '2023-08-12 22:27:38'),
(5, 'ddd', 233, '33', '', '2023-08-09 08:30:19', '2023-08-09 08:30:19'),
(6, 'zds', 23, '23', '', '2023-08-09 08:31:39', '2023-08-09 08:31:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `nombreEmpresa` text NOT NULL,
  `rifEmpresa` text NOT NULL,
  `telefonoEmpresa` text NOT NULL,
  `emailEmpresa` text NOT NULL,
  `direccionEmpresa` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `nombreEmpresa`, `rifEmpresa`, `telefonoEmpresa`, `emailEmpresa`, `direccionEmpresa`, `createdAt`, `updatedAt`) VALUES
(8, 'sdsd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', '2023-02-12 00:49:56', '2023-02-12 00:49:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

CREATE TABLE `entradas` (
  `id` int(11) NOT NULL,
  `idSalida` int(11) NOT NULL,
  `fecha` int(11) NOT NULL,
  `hora` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `marca` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelos`
--

CREATE TABLE `modelos` (
  `id` int(11) NOT NULL,
  `modelo` text NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modelos`
--

INSERT INTO `modelos` (`id`, `modelo`, `updatedAt`, `createdAt`) VALUES
(1, 'FORD-1721', '2023-02-20 21:11:33', '2023-02-20 21:11:33'),
(2, 'Mack Granite', '2023-08-01 04:05:17', '2023-08-01 04:05:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id` int(11) NOT NULL,
  `ruta` text NOT NULL,
  `codRuta` varchar(4) NOT NULL,
  `idSupervisor` int(11) NOT NULL,
  `idUsuario` text NOT NULL,
  `idSector` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`id`, `ruta`, `codRuta`, `idSupervisor`, `idUsuario`, `idSector`, `createdAt`, `updatedAt`) VALUES
(10, 'CASTILLITO CENTRO COMERCIAL I - VIA PRINCIPAL DE CACHAMAY', 'C-20', 1, '1', 1, '2023-08-08 01:29:47', '2023-08-13 17:25:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salidas`
--

CREATE TABLE `salidas` (
  `id` int(11) NOT NULL,
  `unidad` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `chofer` text NOT NULL,
  `pvr` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `placa` text NOT NULL,
  `correlativo` text NOT NULL,
  `tipoUnidad` text NOT NULL,
  `idUsuario` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `salidas`
--

INSERT INTO `salidas` (`id`, `unidad`, `chofer`, `pvr`, `placa`, `correlativo`, `tipoUnidad`, `idUsuario`, `status`, `updatedAt`, `createdAt`) VALUES
(86, '1148', 'Cedula: 123654 - PEDRO PEREZ', '{\"ayudantes\":[{\"value\":18073922,\"label\":\"18073922\",\"id\":3,\"nombreApellido\":\"MICHELDYS NATERA\",\"cedula\":18073922,\"telefono\":\"2222222\"}],\"unidades\":{\"value\":37,\"label\":\"1148\",\"placa\":\"Y5500\",\"marca\":\"Mack Granite\",\"tipoUnidad\":\"SUPERVISORA\",\"unidad\":\"1148\"},\"ruta\":{\"ruta\":\"CASTILLITO CENTRO COMERCIAL I - VIA PRINCIPAL DE CACHAMAY\",\"codRuta\":\"C-20\",\"supervisor\":\"Perdo Perer\",\"sectores\":\"PUERTO ORDAZ\"},\"chofer\":{\"nombreApellido\":\"PEDRO PEREZ\",\"cedula\":123654,\"telefono\":\"65656565\"},\"salida\":{\"varSalida\":{\"combustible\":\"1\",\"kilometraje\":\"1\",\"fecha\":\"2023-08-17\",\"hora\":\"19:54\"},\"varCondicionSalida\":[{\"id\":2,\"condicion\":\"Cauchos #2\",\"listaTipoCondicion\":\"Regular\",\"listaObservacion\":\"11\"}]},\"entrada\":{\"varEntrada\":{\"combustible\":\"1\",\"kilometraje\":\"1\",\"fecha\":\"2023-08-17\",\"hora\":\"19:54\"},\"varCondicionEntrada\":[{\"id\":2,\"condicion\":\"Cauchos #2\",\"listaTipoCondicion\":\"Regular\",\"listaObservacion\":\"11\"}]}}', 'Y5500', '1692316495076', 'SUPERVISORA', 'Root', 1, '2023-08-17 23:54:56', '2023-08-17 23:54:56'),
(87, '1148', 'Cedula: 123654 - PEDRO PEREZ', '{\"ayudantes\":[{\"value\":18073922,\"label\":\"18073922\",\"id\":3,\"nombreApellido\":\"MICHELDYS NATERA\",\"cedula\":18073922,\"telefono\":\"2222222\"}],\"unidades\":{\"value\":37,\"label\":\"1148\",\"placa\":\"Y5500\",\"marca\":\"Mack Granite\",\"tipoUnidad\":\"SUPERVISORA\",\"unidad\":\"1148\"},\"ruta\":{\"value\":10,\"label\":\"C-20\",\"ruta\":\"CASTILLITO CENTRO COMERCIAL I - VIA PRINCIPAL DE CACHAMAY\",\"codRuta\":\"C-20\",\"supervisor\":\"Perdo Perer\",\"sectores\":\"PUERTO ORDAZ\"},\"chofer\":{\"nombreApellido\":\"PEDRO PEREZ\",\"cedula\":123654,\"telefono\":\"65656565\"},\"salida\":{\"varSalida\":{\"combustible\":\"1\",\"kilometraje\":\"1\",\"fecha\":\"2023-08-17\",\"hora\":\"19:59\"},\"varCondicionSalida\":[{\"id\":1,\"condicion\":\"Cauchos #1\",\"listaTipoCondicion\":\"Buena\"}]},\"entrada\":{\"varEntrada\":{\"combustible\":\"4\",\"kilometraje\":\"4\",\"fecha\":\"2023-08-10\",\"hora\":\"19:59\"},\"varCondicionEntrada\":[{\"id\":2,\"condicion\":\"Cauchos #2\",\"listaTipoCondicion\":\"Mala\",\"listaObservacion\":\"444\"}]}}', 'Y5500', '1692316790508', 'SUPERVISORA', 'Root', 1, '2023-08-17 23:59:51', '2023-08-17 23:59:51'),
(88, '1148', 'Cedula: 123654 - PEDRO PEREZ', '{\"ayudantes\":[{\"value\":18073923,\"label\":\"18073923\",\"id\":5,\"nombreApellido\":\"leonardo sdsdsd\",\"cedula\":18073923,\"telefono\":\"ewewe\"}],\"unidades\":{\"value\":37,\"label\":\"1148\",\"placa\":\"Y5500\",\"marca\":\"Mack Granite\",\"tipoUnidad\":\"SUPERVISORA\",\"unidad\":\"1148\"},\"ruta\":{\"value\":10,\"label\":\"C-20\",\"ruta\":\"CASTILLITO CENTRO COMERCIAL I - VIA PRINCIPAL DE CACHAMAY\",\"codRuta\":\"C-20\",\"supervisor\":\"Perdo Perer\",\"sectores\":\"PUERTO ORDAZ\"},\"chofer\":{\"value\":123654,\"label\":\"123654\",\"nombreApellido\":\"PEDRO PEREZ\",\"cedula\":123654,\"telefono\":\"65656565\"},\"salida\":{\"varSalida\":{\"combustible\":\"1\",\"kilometraje\":\"1\",\"fecha\":\"2023-08-09\",\"hora\":\"20:04\"},\"varCondicionSalida\":[{\"id\":1,\"condicion\":\"Cauchos #1\",\"listaTipoCondicion\":\"Regular\",\"listaObservacion\":\"qq\"}]},\"entrada\":{\"varEntrada\":{\"kilometraje\":\"1\",\"combustible\":\"1\",\"fecha\":\"2023-08-09\",\"hora\":\"20:10\"},\"varCondicionEntrada\":[{\"id\":3,\"condicion\":\"Cauchos #3\",\"listaTipoCondicion\":\"Mala\",\"listaObservacion\":\"1\"}]}}', 'Y5500', '1692317063532', 'SUPERVISORA', 'Root', 1, '2023-08-18 00:04:25', '2023-08-18 00:04:25'),
(90, '1148', 'Cedula: 123654 - PEDRO PEREZ', '{\"ayudantes\":[{\"value\":18073922,\"label\":\"18073922\",\"id\":3,\"nombreApellido\":\"MICHELDYS NATERA\",\"cedula\":18073922,\"telefono\":\"2222222\"}],\"unidades\":{\"value\":37,\"label\":\"1148\",\"placa\":\"Y5500\",\"marca\":\"Mack Granite\",\"tipoUnidad\":\"SUPERVISORA\",\"unidad\":\"1148\"},\"ruta\":{\"value\":10,\"label\":\"C-20\",\"ruta\":\"CASTILLITO CENTRO COMERCIAL I - VIA PRINCIPAL DE CACHAMAY\",\"codRuta\":\"C-20\",\"supervisor\":\"Perdo Perer\",\"sectores\":\"PUERTO ORDAZ\"},\"chofer\":{\"value\":123654,\"label\":\"123654\",\"nombreApellido\":\"PEDRO PEREZ\",\"cedula\":123654,\"telefono\":\"65656565\"},\"salida\":{\"varSalida\":{\"combustible\":\"2\",\"kilometraje\":\"2\",\"fecha\":\"2023-08-02\",\"hora\":\"14:20\"},\"varCondicionSalida\":[{\"id\":2,\"condicion\":\"Cauchos #2\",\"listaTipoCondicion\":\"Regular\",\"listaObservacion\":\"2\"}]},\"entrada\":{\"varEntrada\":{\"combustible\":\"1\",\"kilometraje\":\"1\",\"fecha\":\"2023-08-01\",\"hora\":\"13:19\"},\"varCondicionEntrada\":[{\"id\":1,\"condicion\":\"Cauchos #1\",\"listaTipoCondicion\":\"Buena\",\"listaObservacion\":\"1\"}]}}', 'Y5500', '1692328665613', 'SUPERVISORA', 'Root', 1, '2023-08-18 03:17:47', '2023-08-18 03:17:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sectores`
--

CREATE TABLE `sectores` (
  `id` int(11) NOT NULL,
  `sector` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sectores`
--

INSERT INTO `sectores` (`id`, `sector`, `createdAt`, `updatedAt`) VALUES
(1, 'PUERTO ORDAZ', '2023-02-26 22:46:17', '2023-02-26 22:46:17'),
(2, 'SAN FELIX', '2023-02-26 22:46:17', '2023-02-26 22:46:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `supervisores`
--

CREATE TABLE `supervisores` (
  `id` int(11) NOT NULL,
  `nombreApellido` text NOT NULL,
  `cedula` int(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `jefe` varchar(3) NOT NULL,
  `idUsuario` text NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `supervisores`
--

INSERT INTO `supervisores` (`id`, `nombreApellido`, `cedula`, `telefono`, `jefe`, `idUsuario`, `updatedAt`, `createdAt`) VALUES
(1, 'Perdo Perer', 3333, 3333, 'no', 'root', '2023-02-26 15:07:46', '2023-02-26 15:07:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipofallas`
--

CREATE TABLE `tipofallas` (
  `id` int(11) NOT NULL,
  `fallas` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipofallas`
--

INSERT INTO `tipofallas` (`id`, `fallas`, `createdAt`, `updatedAt`) VALUES
(1, 'DISPONIBLE', '2023-02-21 00:17:38', '2023-02-21 00:17:38'),
(2, 'FALLA MECANICA', '2023-02-21 00:17:38', '2023-02-21 00:17:38'),
(3, 'FUERA DE SEDE', '2023-02-21 00:18:20', '2023-02-21 00:18:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuarios`
--

CREATE TABLE `tipousuarios` (
  `id` int(11) NOT NULL,
  `nameuser` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ruta` text COLLATE utf8_spanish_ci NOT NULL,
  `menu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipousuarios`
--

INSERT INTO `tipousuarios` (`id`, `nameuser`, `createdAt`, `updatedAt`, `ruta`, `menu`) VALUES
(1, 'estudiante', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '/estudiantes', 'menuAlumnos'),
(2, 'profesor', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '/profesores', 'menuProfesor'),
(3, 'administrador', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '/administrador', 'menuAdministrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `idUser`, `createdAt`, `updatedAt`) VALUES
(1, 'leonardo', 'espina', 'root', '$2a$08$LfZfM09aGTc51IAlUpzAvOrC3CBpEHxV8E3sNqXDSt3XuSr5dftd2', 1, '2022-09-19 23:59:00', '2022-09-19 23:59:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` int(11) NOT NULL,
  `placa` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `unidad` text NOT NULL,
  `idModelo` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `idUser` int(11) DEFAULT 1,
  `idEstado` int(1) NOT NULL DEFAULT 1,
  `idMarca` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `placa`, `unidad`, `idModelo`, `idCategoria`, `idUser`, `idEstado`, `idMarca`, `createdAt`, `updatedAt`) VALUES
(37, 'Y5500', '1148', 2, 2, 1, 1, 0, '2023-08-07 23:09:38', '2023-08-07 23:10:05'),
(38, 'sdfsd', 'fsdf', 1, 1, 1, 1, 0, '2023-08-09 08:07:25', '2023-08-09 08:07:25'),
(39, '44', '44', 1, 1, 1, 1, 0, '2023-08-09 08:09:40', '2023-08-09 08:09:40'),
(40, 'sss', 'sds', 1, 1, 1, 1, 0, '2023-08-09 08:13:26', '2023-08-09 08:13:26'),
(41, '4422', '44', 1, 2, 1, 1, 0, '2023-08-09 08:14:45', '2023-08-09 08:14:45');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ayudantes`
--
ALTER TABLE `ayudantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `choferes`
--
ALTER TABLE `choferes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salidas`
--
ALTER TABLE `salidas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sectores`
--
ALTER TABLE `sectores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `supervisores`
--
ALTER TABLE `supervisores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipofallas`
--
ALTER TABLE `tipofallas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuarios`
--
ALTER TABLE `tipousuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`) USING BTREE;

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ayudantes`
--
ALTER TABLE `ayudantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `choferes`
--
ALTER TABLE `choferes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `salidas`
--
ALTER TABLE `salidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `tipousuarios`
--
ALTER TABLE `tipousuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
