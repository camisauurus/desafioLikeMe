require("dotenv").config()
const { Pool } = require("pg")

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

const agregarRegistro= async (titulo, img, descripcion, likes) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query(consulta, values)
    console.log("Registro agregdo")
}

const obtenerRegistros = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}

module.exports = { agregarRegistro, obtenerRegistros }