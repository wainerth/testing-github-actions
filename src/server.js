import express from 'express';
const app = express();
const PORT = process.env.PORT || 4013;

// Middleware
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Servidor funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime()
  });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'María García' }
  ];
  res.status(200).json(users);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El nombre es requerido' });
  }

  const newUser = {
    id: Date.now(),
    name
  };

  res.status(201).json(newUser);
});

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;

