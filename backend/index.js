const { agregarRegistro, obtenerRegistros } = require('./consultas')
const express = require('express')
const cors = require('cors')

const app = express()

app.listen(3000, console.log("Servidor encendido"))

app.use(cors())
app.use(express.json())

app.get("/posts", async (req, res) => {
  const registros = await obtenerRegistros()
  res.json(registros)
})

app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body
  await agregarRegistro(
    titulo,
    url,        
    descripcion,
    0          
  )
  res.send("Post agregado")
})