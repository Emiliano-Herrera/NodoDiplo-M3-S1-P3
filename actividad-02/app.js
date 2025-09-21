import express from 'express';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});
// Ruta GET con parametros de consulta
// Solicitud http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})