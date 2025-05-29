var usuarioModel = require("../models/leadsModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var celular = req.body.celularServer;
    var email = req.body.emailServer;
    var mensagem = req.body.mensagemServer;
    var idade = req.body.idadeServer;
    var receber = req.body.receberServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    }else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo leadsModel.js
        usuarioModel.cadastrar(nome, celular, email, mensagem, idade, receber)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function verQuantidade(req, res) {

    console.log(`controller`);

    usuarioModel.verQuantidade().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medidas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    cadastrar,
    verQuantidade
}