# Proyecto de Base de Datos con Docker

Este proyecto utiliza Docker para configurar y ejecutar bases de datos Oracle y PostgreSQL.

## Requisitos

- Docker
- Docker Compose

## Configuración

### Base de Datos PostgreSQL

El archivo `docker-compose.yml` también está configurado para utilizar la imagen de PostgreSQL.

- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `${POSTGRES_DB}`
- **Username**: `${POSTGRES_USER}`
- **Password**: `${POSTGRES_PASSWORD}`

## Instrucciones

### 1. Clonar el repositorio

```
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
cd BackEnd/
```

### 2. Correr comando docker en terminal
```
docker-compose up -d
```

### 3. Correr comando para desarrollo
```
npm run dev
```
