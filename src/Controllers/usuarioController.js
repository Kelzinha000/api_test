    import { request, response } from "express";
    import Usuario from "../Models/usuarioModel.js";

    export const criarUsuario = async (request, response) => {
    const { nome, email, password } = request.body;
    if(nome === ""){
        response.status(404).json({mesage:"digite seu nome"})
    }
    if(email === ""){
        response.status(404).json({mesage:"digite seu nome"})
    }
    if(password === ""){
        response.status(404).json({mesage:"digite seu nome"})
    }
    const novoUsuario = {
        nome,
        email,
        password,
    };
    try {
        // criar cadastro
        await Usuario.create(novoUsuario);
        response.status(201).json({ message: "Usuário Cadastrado" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao cadastrar Usuario" });
    }
    };

    export const todosUsuarios = async (request, response) => {
    try {
        const Usuario = await Usuario.findAll();
        response.status(200).json(Usuario);
    } catch (error) {
        response.status(500).json({ message: "Erro ao listar Usuario" });
    }
    };
