const { agregarRegistro, obtenerRegistros, modificarRegistro, eliminarRegistro } = require('./consultas')
const express = require('express')
const cors = require('cors')

const app = express()

app.listen(3000, console.log("Servidor encendido"))

app.use(cors())
app.use(express.json())

app.get("/posts", async (req, res) => {
  try {
    const registros = await obtenerRegistros()
    res.json(registros)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body
    await agregarRegistro(
    titulo,
    url,        
    descripcion,
    0          
  )
  res.send("Post agregado")
  } catch (error) {
    res.status(500).send(error)
  }
})

app.put("/posts/:id", async (req,res) => {
  try {
    const { id } = req.params
    const { titulo, img, descripcion } = req.body
    await modificarRegistro(titulo, img, descripcion, id)
    res.send("Post modificado")
  } catch (error) {
    res.status(500).send(error)
  }
})

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params
    await eliminarRegistro(id)
    res.send("Post eliminado")
  } catch (error) {
    res.status(500).send(error)
  }
})  