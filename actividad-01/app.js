import express from "express";

// Crear una instancia de express
const app = express();

// conf el puerto
const PORT = 3000;

// ruta basica
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// ruta GET con parametro de ruta
// solicitud http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  console.log(`ID del usuario recibido: ${userID}`);
  res.send(`Perfil del usuario con ID: ${userID}`);
});

// iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
