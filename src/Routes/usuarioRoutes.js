import express,{ Router } from "express";
import {criarUsuario, todosUsuarios} from "../Controllers/usuarioController.js"
const router = Router()

router.post("/register", criarUsuario)
router.get("/list", todosUsuarios)



export default router;