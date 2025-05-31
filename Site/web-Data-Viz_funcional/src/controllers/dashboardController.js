var dashboardModel = require("../models/dashboardModel");

function buscarLeads(req, res) {
    console.log(`controller`);
    const usuario = req.query.usuario;
    console.log(`controller`);

    dashboardModel.buscarLeads(usuario).then((resultado) => {
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

function buscarLeadsPizza(req, res){
    console.log(`controller`);
    const usuario = req.query.usuario;
        
    dashboardModel.buscarLeadsPizza(usuario).then((resultado) => {
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

function buscarLeadsLista(req, res){
    console.log(`controller`);
    const usuario = req.query.usuario;
        
    dashboardModel.buscarLeadsLista(usuario).then((resultado) => {
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

function atualizarStatus(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo dashboard.html
   var statusCotacao = req.body.cotacoes; 
    var statusApolice = req.body.apolices;
    var idReferencia = req.body.ids;
    

        // Passe os valores como parâmetro e vá para o arquivo dashboardModel.js
         dashboardModel.atualizarStatus(statusCotacao, statusApolice, idReferencia)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar os leads",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
function dadosKpis(req, res){
    console.log(`controller`);
    const usuario = req.query.usuario;
        
    dashboardModel.dadosKpis(usuario).then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as KPIs: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarLeads,
    buscarLeadsPizza,
    buscarLeadsLista,
    atualizarStatus,
    dadosKpis
}