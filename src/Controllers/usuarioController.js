    import { request, response } from "express";
    import Usuario from "../Models/usuarioModel.js";

    export const todosUsuarios = async (request, response) => {
        try {
            const usuarios = await Usuario.findAll();
            response.status(200).json(usuarios);
        } catch (error) {
            response.status(500).json({ message: "Erro ao listar Usuario" });
        }
        };

    export const criarUsuario = async (request, response) => {
    const { nome, email, passworld} = request.body;
    if (!nome) {
        response.status(404).json({ message: "digite seu nome" });
    }
    if (!email) {
        response.status(404).json({ message: "digite seu email" });
    }
    if (!passworld) {
        response.status(404).json({ message: "digite seu password" });
    }
    const novoUsuarios = {
        nome,
        email,
        passworld
    };
    try {
       /*await*/  Usuario.create(novoUsuarios);
        response.status(201).json({ message: "Usuário Cadastrado" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao cadastrar Usuario" });
    }
    };

 

    export const login = (request, response) => {
    const { email, senha } = request.body;
    if (!email) {
        response.status(400).json({ err: "O email é obrigatório" });
        return;
    }
    if (!senha) {
        response.status(400).json({ err: "A senha é obrigatória" });
        return;
    }

    const checkSql = /*sql*/ `SELECT * FROM  usuarios WHERE ?? = ?`;
    const checkData = ["email", email];
    conn.query(
        checkSql,
        checkData,
        /*async */ (err, data) => {
        if (err) {
            console.error(err);
            response.status(500).json({ err: "Erro ao buscar usuario" });
            return;
        }

        if (data.length === 0) {
            response.status(404).json({ err: "Usuário não encontrado" });
            return;
        }

        const usuario = data[0];
        const compararSenha = /*await */ bcrypt.compare(senha, usuario.senha);
        console.log("Senha do usuário", senha);
        console.log("Senha do objeto", usuario.senha);
        console.log("comparar senha", compararSenha);
        if (!compararSenha) {
            return response.status(401).json({ message: "Senha inválida" });
        }

        try {
            /*await*/ createToken(usuario, request, response);
        } catch (error) {
            response.error(error);
            response.status(500).json({ err: "Erro ao processar informações" });
            return;
        }
        }
    );
    };
