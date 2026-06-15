# LucKeyGirls-IRIC9-1

## Descripción del Proyecto

Aplicación web para la gestión y autenticación de usuarios desarrollada como parte de la materia Automatización de Infraestructura Digital I.

## Integrantes

- Luisa María Carmelo Servín
- Keyla Merari Estrada Andrade

## Tecnologías

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- GitHub

## Funcionalidades

- Login
- Logout
- CRUD de Usuarios
- Issues
- Pull Requests
- Code Reviews
- Release v1.0.0

## Licencia

GPL-3.0

## Instalación

1. Clonar el repositorio.
2. Abrir index.html en el navegador.
3. Iniciar sesión con las credenciales configuradas.

## Estructura del Proyecto

/
├── index.html
├── usuarios.html
├── css/
├── js/
└── README.md

## Integración Continua

El proyecto utiliza GitHub para el control de versiones, Pull Requests y revisiones de código.

## Actividad 3.1 - Arquitectura y estilos de diseño de APIs

Esta actividad es una continuación del proyecto LucKeyGirls-IRIC9-1, agregando funcionalidades relacionadas con APIs REST, recuperación de contraseña, respaldo y restauración.

## API REST de Logs de Acceso

Se implementó una API REST simulada para registrar accesos y acciones realizadas dentro del sistema.

### Datos registrados

- Usuario
- Fecha
- IP
- Acción realizada

### Endpoints simulados

```text
GET /api/logs
POST /api/logs
