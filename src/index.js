const app = require('./app'); // Importación del módulo app

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Iniciando el servidor en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});