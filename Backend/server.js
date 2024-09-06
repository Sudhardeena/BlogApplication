const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  cors = require('cors')

// app config
const app = express()

// middleware
app.use(cors())
app.use(express.json())

let db = null
const intializeDBAndServer = async () => {
  try {
    db = await open({
      filename: path.join(__dirname, 'blogDatabase.db'),
      driver: sqlite3.Database,
    })
    app.listen(4000, () => {
      console.log('server running at http://localhost:3000')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

intializeDBAndServer()

app.get('/', async (req,res)=>{
    res.send("home page")
})

module.exports =app