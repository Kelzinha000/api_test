import "dotenv/config"
import express, {response} from "express"
import conn from './config/conn.js'


const PORT = process.env.PORT
const app = express()

 import usuarioModel from './Models/usuarioModel.js'

import usuarioRouter from "./Routes/usuarioRoutes.js"

app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use((request, response)=>{
    response.status(404).json({message:"Rota não encontrada"})
})

app.use("/user", usuarioRouter)
app.use("/list", usuarioRouter)


conn.sync().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Servidor on http://localhost:${PORT}`)
})}).catch()

