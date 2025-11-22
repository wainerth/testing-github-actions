import request from 'supertest';
import app from '../../src/server.js';

describe('Server - Pruebas End-to-End', () => {
  
  describe('GET /', () => {
    test('debe retornar mensaje de bienvenida', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Servidor funcionando correctamente');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /health', () => {
    test('debe retornar el estado de salud del servidor', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('uptime');
      expect(typeof response.body.uptime).toBe('number');
    });
  });

  describe('GET /api/users', () => {
    test('debe retornar lista de usuarios', async () => {
      const response = await request(app).get('/api/users');
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
    });
  });

  describe('POST /api/users', () => {
    test('debe crear un nuevo usuario', async () => {
      const newUser = { name: 'Pedro López' };
      
      const response = await request(app)
        .post('/api/users')
        .send(newUser)
        .set('Content-Type', 'application/json');
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name', newUser.name);
    });

    test('debe retornar error si no se proporciona nombre', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({})
        .set('Content-Type', 'application/json');
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Rutas no existentes', () => {
    test('debe retornar 404 para rutas no encontradas', async () => {
      const response = await request(app).get('/ruta-inexistente');
      
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Ruta no encontrada');
    });
  });
});
