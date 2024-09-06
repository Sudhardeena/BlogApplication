import express from 'express'
import {open} from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'
import bcrypt from 'bcrypt'
import jwtToken from 'jsonwebtoken';
import cors from 'cors'

// app config
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.listen(3000,()=>console.log('server running at http://localhost:3000'))

app.get('/', async (req,res)=>{
    res.send("home page")
})

export default app