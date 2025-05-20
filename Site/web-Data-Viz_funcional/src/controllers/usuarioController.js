var usuarioModel = require("../models/usuarioModel");
var dashboardModel = require("../models/dashboardModel");

function autenticar(req, res) {
    var codigo = req.body.codigoServer;
    var senha = req.body.senhaServer;

// verifica se as crendenciais foram preenchidas
    if (codigo == undefined) {
        res.status(400).send("Sua susep está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

// chama o model para autenticar o usuário e puxar suas devidas informações
        usuarioModel.autenticar(codigo, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);


                        res.json({
                                 id: resultadoAutenticar[0].id,
                        })


                        //dashboardModel.buscarLeads(resultadoAutenticar[0].empresaId)
                          //  .then((resultadoAquarios) => {
                            //    if (resultadoAquarios.length > 0) {
                              //      res.json({
                              //       id: resultadoAutenticar[0].id,
                                //        lead_recebidos: resultadoAutenticar[0].lead_recebidos,
                                //    });
                                //} else {
                                //    res.status(204).json({ aquarios: [] });
                               // }
                           // })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Susep e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   var codigo = req.body.codigoServer; 
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(codigo, email, cpf, senha)
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

module.exports = {
    autenticar,
    cadastrar
}