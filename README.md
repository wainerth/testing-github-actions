# Proyecto Node.js con Pruebas Unitarias y End-to-End

Proyecto básico de Node.js con Express que incluye pruebas unitarias y pruebas end-to-end utilizando Jest y Supertest.

## 📋 Características

- Servidor Express básico
- Pruebas unitarias con Jest
- Pruebas end-to-end con Supertest
- Cobertura de código

## 🚀 Instalación

```bash
# Instalar dependencias
npm install
```

## 💻 Uso

### Iniciar el servidor

```bash
npm start
```

El servidor se iniciará en `http://localhost:3000`

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar solo pruebas unitarias

```bash
npm run test:unit
```

### Ejecutar solo pruebas end-to-end

```bash
npm run test:e2e
```

## 📁 Estructura del Proyecto

```
node-testing-project/
├── src/
│   ├── server.js          # Servidor Express principal
│   └── utils.js           # Funciones de utilidad
├── tests/
│   ├── unit/
│   │   └── utils.test.js  # Pruebas unitarias
│   └── e2e/
│       └── server.test.js # Pruebas end-to-end
├── package.json
├── jest.config.js
└── README.md
```

## 🔌 Endpoints Disponibles

### GET /
Retorna un mensaje de bienvenida

### GET /health
Retorna el estado de salud del servidor

### GET /api/users
Retorna una lista de usuarios

### POST /api/users
Crea un nuevo usuario
- Body: `{ "name": "Nombre del usuario" }`

## 🧪 Tipos de Pruebas

### Pruebas Unitarias
Ubicadas en `tests/unit/`, prueban funciones individuales como:
- Suma de números
- Validación de números pares
- Validación de emails
- Capitalización de strings

### Pruebas End-to-End
Ubicadas en `tests/e2e/`, prueban el servidor completo:
- Endpoints GET y POST
- Respuestas HTTP correctas
- Manejo de errores
- Rutas no encontradas

## 📊 Cobertura de Código

El comando `npm test` genera un reporte de cobertura en la carpeta `coverage/`

## 🛠️ Tecnologías

- **Node.js**: Runtime de JavaScript
- **Express**: Framework web
- **Jest**: Framework de testing
- **Supertest**: Librería para pruebas HTTP

## 📝 Notas

- El servidor no se inicia durante las pruebas
- Las pruebas son independientes entre sí
- La configuración de Jest está en `jest.config.js`
