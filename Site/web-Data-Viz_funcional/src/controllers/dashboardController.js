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

module.exports = {
    buscarLeads,
    buscarLeadsPizza,
    buscarLeadsLista
}