const express = require('express')
const mysql = require('mysql2')
require('dotenv').config()

console.log(process.env.DB_USER)

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
